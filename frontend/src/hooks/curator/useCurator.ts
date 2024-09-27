import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { curator } from '../../api';
import { AxiosResponse } from 'axios';

interface Curator {
  curator_id: number;
  name: string;
  profile_image: string;
  introduction: string;
  category: string;
}

export const useCurator = () => {
  const getCuratorsQuery = (
    category?: string,
  ): UseQueryResult<Curator[], Error> =>
    useQuery({
      queryKey: ['curators', category],
      queryFn: async () => {
        const response = await curator.getCurators(category);
        return response.data;
      },
    });

  return {
    getCurators: getCuratorsQuery,
  };
};
