import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import { getContents } from './requests';
import { type IParamsContents } from './types';

export const useGetContents = <T>(params: IParamsContents, options?: UseQueryOptions<T, AxiosError>) => {
  return useQuery<T, AxiosError>({
    queryKey: ['/contents', params],
    queryFn: () => getContents(params),
    ...options,
  });
};
