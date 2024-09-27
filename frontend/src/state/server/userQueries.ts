import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from '@tanstack/react-query';
import { user, token } from '../../api';
import { AxiosError } from 'axios';

interface UserInfo {
  user_id: string;
  email: string;
  nickname: string;
  phone_number: string;
  birthdate: string;
  gender: 'M' | 'F' | 'N';
  total_tokens: number;
  created_at: string;
  updated_at: string;
  subscription?: {
    subscription_id: number;
    plan_id: number;
    plan_name: string;
    price: string;
    next_billing_date: string;
    status: string;
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

export const useGetMyInfo = (): UseQueryResult<UserInfo, AxiosError> =>
  useQuery({
    queryKey: ['myInfo'],
    queryFn: () => user.getMyInfo().then((response) => response.data),
  });

export const useUpdateMyInfo = (): UseMutationResult<
  UserInfo,
  AxiosError,
  UpdateUserData
> =>
  useMutation({
    mutationFn: (userData) =>
      user.updateMyInfo(userData).then((response) => response.data),
  });

export const useDeleteAccount = (): UseMutationResult<
  void,
  AxiosError,
  { reason?: string; feedback?: string }
> =>
  useMutation({
    mutationFn: ({ reason, feedback }) =>
      user.deleteAccount(reason, feedback).then((response) => response.data),
  });

export const useVerifyPassword = (): UseMutationResult<
  boolean,
  AxiosError,
  string
> =>
  useMutation({
    mutationFn: (currentPassword) =>
      user.verifyPassword(currentPassword).then((response) => response.data),
  });

export const useChangePassword = (): UseMutationResult<
  void,
  AxiosError,
  ChangePasswordData
> =>
  useMutation({
    mutationFn: ({ current_password, new_password }) =>
      user
        .changePassword(current_password, new_password)
        .then((response) => response.data),
  });

export const useGetMyTokenInfo = (): UseQueryResult<TokenInfo, AxiosError> =>
  useQuery({
    queryKey: ['myTokenInfo'],
    queryFn: () => token.getMyTokenInfo().then((response) => response.data),
  });
