import { createMutation } from 'react-query-kit';

import { sendContactRequest } from './requests';
import { type IContactFormBody } from './types';

export const useSendContactMutation = createMutation<any, IContactFormBody>({
  mutationFn: sendContactRequest,
});
