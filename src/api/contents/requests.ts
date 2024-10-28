import { request } from '../axios';
import type { IParamsContents } from './types';

export const getContents = async (params: IParamsContents) => {
  const { data } = await request({
    url: '/api/contents',
    method: 'GET',
    params,
  });

  return data;
};
