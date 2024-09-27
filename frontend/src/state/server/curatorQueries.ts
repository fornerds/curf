import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { curator } from '../../api';
import { AxiosError } from 'axios';

interface Curator {
  curator_id: number;
  name: string;
  profile_image: string;
  introduction: string;
  category: string;
}

interface CuratorsResponse {
  curators: Curator[];
  total_count: number;
}

interface CuratorsQueryParams {
  category?: string;
}

export const useGetCurators = (
  params: CuratorsQueryParams = {},
): UseQueryResult<CuratorsResponse, AxiosError> =>
  useQuery({
    queryKey: ['curators', params],
    queryFn: () =>
      curator.getCurators(params.category).then((response) => response.data),
  });

// 만약 개별 큐레이터 조회 API가 추가된다면 아래와 같이 구현할 수 있습니다.
// export const useGetCuratorById = (curatorId: number): UseQueryResult<Curator, AxiosError> =>
//   useQuery({
//     queryKey: ['curator', curatorId],
//     queryFn: () => curator.getCuratorById(curatorId).then(response => response.data),
//   });
