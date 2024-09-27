import { useState } from 'react';
import { useQuery, useMutation, UseQueryResult } from '@tanstack/react-query';
import { user, token } from '../../api';
import { AxiosResponse } from 'axios';

interface UserInfo {
  user_id: string;
  email: string;
  nickname: string;
  phone_number: string;
  total_tokens: number;
  created_at: string;
  updated_at: string;
  subscription?: {
    subscription_id: number;
    plan_id: number;
    plan_name: string;
    price: string;
    next_billing_date: string;
    status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
  };
}

interface UpdateUserData {
  nickname?: string;
  phone_number?: string;
}

interface ChangePasswordData {
  current_password: string;
  new_password: string;
}

interface TokenInfo {
  total_tokens: number;
  used_tokens: number;
  last_charged_at: string;
}

interface ChangePasswordData {
  current_password: string;
  new_password: string;
}

interface TokenInfo {
  total_tokens: number;
  used_tokens: number;
  last_charged_at: string;
}

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getUserInfoQuery = useQuery<UserInfo, Error>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await user.getMyInfo();
      return response.data;
    },
  });

  const updateUserInfoMutation = useMutation<UserInfo, Error, UpdateUserData>({
    mutationFn: async (userData) => {
      const response = await user.updateMyInfo(userData);
      return response.data;
    },
  });

  const deleteAccountMutation = useMutation<
    void,
    Error,
    { reason?: string; feedback?: string }
  >({
    mutationFn: async ({ reason, feedback }) => {
      await user.deleteAccount(reason, feedback);
    },
  });

  const verifyPasswordMutation = useMutation<boolean, Error, string>({
    mutationFn: async (currentPassword) => {
      const response = await user.verifyPassword(currentPassword);
      return response.data;
    },
  });

  const changePasswordMutation = useMutation<void, Error, ChangePasswordData>({
    mutationFn: async ({ current_password, new_password }) => {
      await user.changePassword(current_password, new_password);
    },
  });

  const getTokenInfoQuery = useQuery<TokenInfo, Error>({
    queryKey: ['tokenInfo'],
    queryFn: async () => {
      const response = await token.getMyTokenInfo();
      return response.data;
    },
  });

  const updateUserInfo = async (userData: UpdateUserData) => {
    setIsLoading(true);
    try {
      const response = await updateUserInfoMutation.mutateAsync(userData);
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAccount = async (reason?: string, feedback?: string) => {
    setIsLoading(true);
    try {
      await deleteAccountMutation.mutateAsync({ reason, feedback });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPassword = async (currentPassword: string) => {
    setIsLoading(true);
    try {
      const response =
        await verifyPasswordMutation.mutateAsync(currentPassword);
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (
    current_password: string,
    new_password: string,
  ) => {
    setIsLoading(true);
    try {
      await changePasswordMutation.mutateAsync({
        current_password,
        new_password,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getUserInfo: getUserInfoQuery,
    updateUserInfo,
    deleteAccount,
    verifyPassword,
    changePassword,
    getTokenInfo: getTokenInfoQuery,
  };
};
