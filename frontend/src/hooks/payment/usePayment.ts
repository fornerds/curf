import { useState } from 'react';
import { useQuery, useMutation, UseQueryResult } from '@tanstack/react-query';
import { payment, subscription } from '../../api';
import { AxiosResponse } from 'axios';

interface Product {
  product_id: string;
  name: string;
  expiry_date: string;
  original_price: number;
  discount: {
    amount: number;
    coupon_discount: number;
  };
  final_price: number;
}

interface CouponValidationResponse {
  is_valid: boolean;
  coupon_details?: {
    discount_type: 'AMOUNT' | 'RATE';
    discount_value: number;
    expiration_date: string;
  };
  message: string;
}

interface PaymentResponse {
  payment_id: number;
  amount: number;
  payment_method: 'card' | 'kakaopay';
  status: 'SUCCESS' | 'FAILED';
}

interface SubscriptionInfo {
  subscription_id: number;
  plan_id: number;
  plan_name: string;
  price: string;
  start_date: string;
  next_billing_date: string;
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
}

interface CouponValidationResponse {
  is_valid: boolean;
  coupon_details?: {
    discount_type: 'AMOUNT' | 'RATE';
    discount_value: number;
    expiration_date: string;
  };
  message: string;
}

interface PaymentResponse {
  payment_id: number;
  amount: number;
  payment_method: 'card' | 'kakaopay';
  status: 'SUCCESS' | 'FAILED';
}

interface PaymentData {
  product_type: 'subscription' | 'token';
  product_id: number;
  payment_method: 'card' | 'kakaopay';
  coupon_code?: string;
}

export const usePayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getProductsQuery = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await payment.getProducts();
      return response.data;
    },
  });

  const getProductByIdQuery = (
    productId: string,
  ): UseQueryResult<Product, Error> =>
    useQuery({
      queryKey: ['product', productId],
      queryFn: async () => {
        const response = await payment.getProductById(productId);
        return response.data;
      },
    });

  const validateCouponMutation = useMutation<
    CouponValidationResponse,
    Error,
    { couponCode: string; productId: string }
  >({
    mutationFn: async ({ couponCode, productId }) => {
      const response = await payment.validateCoupon(couponCode, productId);
      return response.data; // API 응답에서 data 필드를 반환
    },
  });

  const createPaymentMutation = useMutation<
    PaymentResponse,
    Error,
    PaymentData
  >({
    mutationFn: async (paymentData) => {
      const response = await payment.createPayment(paymentData);
      return response.data;
    },
  });

  const getMyPaymentsQuery = useQuery<PaymentResponse[], Error>({
    queryKey: ['myPayments'],
    queryFn: async () => {
      const response = await payment.getMyPayments();
      return response.data;
    },
  });

  const getPaymentByIdQuery = (
    paymentId: string,
  ): UseQueryResult<PaymentResponse, Error> =>
    useQuery({
      queryKey: ['payment', paymentId],
      queryFn: async () => {
        const response = await payment.getPaymentById(paymentId);
        return response.data;
      },
    });

  const cancelPaymentMutation = useMutation<
    any,
    Error,
    { paymentId: string; cancellationData: any }
  >({
    mutationFn: async ({ paymentId, cancellationData }) => {
      const response = await payment.cancelPayment(paymentId, cancellationData);
      return response.data;
    },
  });

  const getMySubscriptionQuery = useQuery<SubscriptionInfo, Error>({
    queryKey: ['mySubscription'],
    queryFn: async () => {
      const response = await subscription.getMySubscription();
      return response.data;
    },
  });

  const changeSubscriptionMutation = useMutation<any, Error, number>({
    mutationFn: (planId) => subscription.changeSubscription(planId),
  });

  const cancelSubscriptionMutation = useMutation<any, Error, void>({
    mutationFn: () => subscription.cancelSubscription(),
  });

  const validateCoupon = async (couponCode: string, productId: string) => {
    setIsLoading(true);
    try {
      const response = await validateCouponMutation.mutateAsync({
        couponCode,
        productId,
      });
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const createPayment = async (paymentData: PaymentData) => {
    setIsLoading(true);
    try {
      const response = await createPaymentMutation.mutateAsync(paymentData);
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelPayment = async (paymentId: string, cancellationData: any) => {
    setIsLoading(true);
    try {
      await cancelPaymentMutation.mutateAsync({ paymentId, cancellationData });
    } finally {
      setIsLoading(false);
    }
  };

  const changeSubscription = async (planId: number) => {
    setIsLoading(true);
    try {
      await changeSubscriptionMutation.mutateAsync(planId);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelSubscription = async () => {
    setIsLoading(true);
    try {
      await cancelSubscriptionMutation.mutateAsync();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getProducts: getProductsQuery,
    getProductById: getProductByIdQuery,
    validateCoupon,
    createPayment,
    getMyPayments: getMyPaymentsQuery,
    getPaymentById: getPaymentByIdQuery,
    cancelPayment,
    getMySubscription: getMySubscriptionQuery,
    changeSubscription,
    cancelSubscription,
  };
};
