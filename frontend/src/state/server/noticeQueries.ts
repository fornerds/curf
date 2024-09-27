import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { notice } from '../../api';
import { AxiosError } from 'axios';

interface Notice {
  notice_id: number;
  title: string;
  content: string;
  created_at: string;
  is_important: boolean;
  is_read: boolean;
}

interface NoticesResponse {
  notices: Notice[];
  total_count: number;
}

interface NoticesQueryParams {
  page?: number;
  limit?: number;
}

export const useGetNotices = (
  params: NoticesQueryParams = {},
): UseQueryResult<NoticesResponse, AxiosError> =>
  useQuery({
    queryKey: ['notices', params],
    queryFn: () =>
      notice
        .getNotices(params.page, params.limit)
        .then((response) => response.data),
  });

export const useGetNoticeById = (
  noticeId: number,
): UseQueryResult<Notice, AxiosError> =>
  useQuery({
    queryKey: ['notice', noticeId],
    queryFn: () =>
      notice.getNoticeById(noticeId).then((response) => response.data),
  });
