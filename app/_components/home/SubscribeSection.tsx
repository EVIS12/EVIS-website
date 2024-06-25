'use client';

import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

interface SubscriberInfo {
  first_name: string;
  last_name: string;
  email: string;
}

export default function SubscribeSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscriberInfo>();

  const onSubmit = async (value: SubscriberInfo) => {
    const resp = await axiosInterceptorInstance.post(
      '/visit/subscripe-news/',
      value
    );
    if (resp.status === 201) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Congratulations!',
        text: 'You subscribed successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
    } else {
      console.log(resp.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <section className="section-pad">
      <div className="container">
        <h2 className="title mb-8">
          Subscribe To <span className=" text-main-color">Our</span> Newsletter
        </h2>
        <form className="row gap-6 " onSubmit={handleSubmit(onSubmit)}>
          {[
            { title: 'First Name', key: 'first_name' },
            { title: 'Last Name', key: 'last_name' },
            { title: 'Email', key: 'email' },
          ].map(({ title, key }, i) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
              <input
                className={`main-input ${
                  errors?.[key as keyof SubscriberInfo] && '!border-[#dc3545]'
                }`}
                type="text"
                {...register(key as keyof SubscriberInfo, {
                  required: `${title} is required`,
                })}
                placeholder={title}
              />
              {errors?.[key as keyof SubscriberInfo] && (
                <p className="text-[#dc3545] text-xs md:text-sm ">
                  {errors?.[key as keyof SubscriberInfo]?.message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="col-span-12 green-btn !mx-auto !bg-main-color hover:!bg-[#229C99]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
