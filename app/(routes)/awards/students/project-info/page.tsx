'use client';

import React from 'react';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { projectInfoFormInputs } from '@/app/_utils/info';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { ProjectInfoFormData } from 'Awards';

export default function ProjectInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ProjectInfoFormData>();

  const formSubmitHandler = async (value: ProjectInfoFormData) => {
    const res = await axiosInterceptorInstance.post<ProjectInfoFormData>(
      '/awards/student-project-info/',
      value
    );
    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully',
      });
      reset();
    } else {
      console.log(res.data);
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
          <h2 className="title mb-6 md:mb-10">Project Information</h2>

          <form
            className="row gap-4 md:gap-6 "
            onSubmit={handleSubmit(formSubmitHandler)}
          >
            {projectInfoFormInputs?.projectInfo.map(
              ({ key, title, options, properties, type }, i) => (
                <div
                  className={`input-container col-span-12 ${
                    type !== 'textarea' && 'md:col-span-6 lg:col-span-4'
                  }`}
                  key={i}
                >
                  <label className="main-label mb-2" htmlFor={key}>
                    {title}
                  </label>
                  {type === 'select' ? (
                    <select
                      className={`main-input ${
                        errors?.[key as keyof ProjectInfoFormData] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      {...register(
                        key as keyof ProjectInfoFormData,
                        properties
                      )}
                      value={watch(key as keyof ProjectInfoFormData) ?? ''}
                    >
                      <option value="" disabled>
                        Choose One
                      </option>{' '}
                      {options?.map((item, i) => (
                        <option value={item} key={i}>
                          {item}
                        </option>
                      ))}
                    </select>
                  ) : type === 'textarea' ? (
                    <textarea
                      className={`main-input h-52 resize-none ${
                        errors?.[key as keyof ProjectInfoFormData] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      {...register(
                        key as keyof ProjectInfoFormData,
                        properties
                      )}
                    ></textarea>
                  ) : (
                    <input
                      className={`main-input ${
                        errors?.[key as keyof ProjectInfoFormData] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      type={type}
                      {...register(
                        key as keyof ProjectInfoFormData,
                        properties
                      )}
                    />
                  )}
                  {errors?.[key as keyof ProjectInfoFormData] && (
                    <p className="text-[#dc3545] text-xs md:text-sm ">
                      {errors?.[key as keyof ProjectInfoFormData]?.message}
                    </p>
                  )}
                </div>
              )
            )}
            <h2 className="title mt-6 md:mt-10 mb-2 md:mb-4 col-span-12">
              Team leader information
            </h2>
            {projectInfoFormInputs?.teamLeaderInfo.map(
              ({ key, title, properties, type }, i) => (
                <div
                  className={'input-container col-span-12 md:col-span-6'}
                  key={i}
                >
                  <label className="main-label mb-2" htmlFor={key}>
                    {title}
                  </label>
                  <input
                    className={`main-input ${
                      errors?.[key as keyof ProjectInfoFormData] &&
                      '!border-[#dc3545]'
                    }`}
                    id={key}
                    type={type}
                    {...register(key as keyof ProjectInfoFormData, properties)}
                  />
                  {errors?.[key as keyof ProjectInfoFormData] && (
                    <p className="text-[#dc3545] text-xs md:text-sm ">
                      {errors?.[key as keyof ProjectInfoFormData]?.message}
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
                Send
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
