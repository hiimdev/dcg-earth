'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSendContactMutation } from '@/api/mail';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { HStack } from '@/components/ui/h-stack';
import { TextAreaField, TextField } from '@/components/FormField';

import { contactSchema, type ContactFormType } from '../../schema';

type NoticeType = 'success' | 'error' | '';

const ContactForm = () => {
  const [noticeType, setNoticeType] = useState<NoticeType>('');
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: 'How may we best be of assistance?',
    },
  });

  const renderNotice = useMemo(() => {
    switch (noticeType) {
      case 'success':
        return (
          <div className="mt-2 rounded-[0.625rem] border border-[#46b450] p-2.5">
            <p className="text-center font-medium text-[#0C231FF2]">Thank you for your message. It has been sent.</p>
          </div>
        );
      case 'error':
        return (
          <div className="mt-2 rounded-[0.625rem] border border-[#ffb900] p-2.5">
            <p className="text-center font-medium text-[#0C231FF2]">
              One or more fields have an error. Please check and try again.
            </p>
          </div>
        );
      default:
        return '';
    }
  }, [noticeType]);

  const { mutate: sendEmail, isPending } = useSendContactMutation({
    onSuccess: () => {
      setNoticeType('success');

      form.reset({
        email: '',
        name: '',
        subject: '',
      });
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (!Object.keys(errors).length) return;

    setNoticeType('error');
  }, [errors]);

  const handleSubmit: SubmitHandler<ContactFormType> = async (formData) => {
    setNoticeType('');

    sendEmail({
      email: formData?.email,
      name: formData?.name,
      subject: formData?.subject,
      message: formData?.message,
    });
  };

  return (
    <div className="w-full p-2.5 lg:ml-[1.875rem] lg:w-[45%]">
      <div className="mx-auto w-full rounded-[1.25rem] border border-[#ACACAC] bg-white px-10 pb-8 pt-10 md:max-w-[26.875rem] lg:max-w-[31.0625rem]">
        <FormWrapper form={form} onSubmit={handleSubmit}>
          <HStack spacing={20}>
            <div className="flex-1">
              <TextField className="mb-5" placeholder="-" control={control} name="name" label="Name" />
            </div>

            <div className="flex-1">
              <TextField className="mb-5" placeholder="-" control={control} name="email" label="Email" />
            </div>
          </HStack>

          <div>
            <TextField
              className="mb-5"
              placeholder="-"
              control={control}
              name="subject"
              label="Individual or Institution?"
            />
          </div>

          <div className="mb-[1.5625rem]">
            <TextAreaField control={control} name="message" label="Topic" />
          </div>

          <Button
            disabled={isPending}
            type="submit"
            className="bg-primary text-accent hover:bg-accent mb-6 hidden h-[3.125rem] w-full text-base font-medium transition-all duration-300 ease-in-out hover:text-black lg:inline-flex"
          >
            Send
          </Button>

          {renderNotice}
        </FormWrapper>
      </div>
    </div>
  );
};

export default ContactForm;
