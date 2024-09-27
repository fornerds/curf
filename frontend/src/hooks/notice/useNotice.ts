import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { notice } from '../../api';
import { AxiosResponse } from 'axios';

interface Notice {
  notice_id: number;
  title: string;
  content: string;
  created_at: string;
  is_important: boolean;
  is_read: boolean;
}

interface NoticeListResponse {
  notices: Notice[];
  total_count: number;
}

interface NoticeQueryParams {
  page?: number;
  limit?: number;
}

export const useNotice = () => {
  const getNoticesQuery = (
    params: NoticeQueryParams = {},
  ): UseQueryResult<NoticeListResponse, Error> =>
    useQuery({
      queryKey: ['notices', params],
      queryFn: async () => {
        const response = await notice.getNotices(params.page, params.limit);
        return response.data;
      },
    });

  const getNoticeByIdQuery = (
    noticeId: number,
  ): UseQueryResult<Notice, Error> =>
    useQuery({
      queryKey: ['notice', noticeId],
      queryFn: async () => {
        const response = await notice.getNoticeById(noticeId);
        return response.data;
      },
    });

  return {
    getNotices: getNoticesQuery,
    getNoticeById: getNoticeByIdQuery,
  };
};
