import { request } from '../axios';
import type { IContactFormBody } from './types';

export const sendContactRequest = async (body: IContactFormBody) => {
  const { data } = await request({
    url: '/api/send-mail-contact',
    method: 'POST',
    data: body,
  });

  return data;
};
