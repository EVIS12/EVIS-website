'use client';

import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { registerFormInputs } from '@/app/_utils/info';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

interface RegisterUser {
  title: string;
  email: string;
  name: string;
  job_title: string;
  company_name: string;
  address: string;
  city: string;
  country: string;
  phone_number: string;
  business_nature: string;
  interested_in: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterUser>();

  const formSubmitHandler = async (value: RegisterUser) => {
    const res = await axiosInterceptorInstance.postForm(
      '/interest/register-interest/',
      value
    );
    if (res.status === 201) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Congratulations!',
        text: 'Registered successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
    } else if (res.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `<ul>${Object.entries(res?.data).map(
          //@ts-ignore
          ([key, val]) => `<li>${key}: ${val[0]}</li>`
        )}<ul>`,
      });
    } else {
      console.log({ error: res.data });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <main>
      <section className="section-pad">
        <div className="container">
          <h2 className="title mb-6 md:mb-10">Register Your Interest</h2>

          <form
            className="row gap-4 md:gap-6 "
            onSubmit={handleSubmit(formSubmitHandler)}
          >
            {registerFormInputs?.map(
              ({ key, title, properties, type, options }, i) => (
                <div
                  className="input-container col-span-12 md:col-span-6 lg:col-span-4"
                  key={i}
                >
                  <label className="main-label mb-2" htmlFor={key}>
                    {title}
                  </label>

                  {type === 'select' ? (
                    <select
                      className={`main-input ${
                        errors?.[key as keyof RegisterUser] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      {...register(key as keyof RegisterUser, properties)}
                      value={watch('interested_in') ?? ''}
                    >
                      <option value="" disabled>
                        Choose One
                      </option>
                      {options?.map((item, i) => (
                        <option value={item} key={i}>
                          {item}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className={`main-input ${
                        errors?.[key as keyof RegisterUser] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      type={type}
                      {...register(key as keyof RegisterUser, properties)}
                    />
                  )}
                  {errors?.[key as keyof RegisterUser] && (
                    <p className="text-[#dc3545] text-xs md:text-sm ">
                      {errors?.[key as keyof RegisterUser]?.message}
                    </p>
                  )}
                </div>
              )
            )}

            <div className="col-span-12">
              <button
                className="green-btn !mx-auto !bg-main-color hover:!bg-[#229C99]"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <h2 className=" font-bold  mt-12">
            By submitting this form, you authorize Nirvana MICE to manage your
            personal details in accordance with our{' '}
            <Link
              href="/privacy-guidelines"
              className=" underline text-blue-600"
            >
              privacy guidelines
            </Link>
            .{' '}
          </h2>
        </div>
      </section>
    </main>
  );
}
