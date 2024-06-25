'use client';

import useGetAttendees from '@/app/_api/_hooks/useGetAttendees';
import React, { useState } from 'react';
import Loader from '../common/Loader';
import { PaginationArrowBtn } from '@/public/icons/SVGIcons';
import Swal from 'sweetalert2';
import { Attendee } from 'Attendees';

type Props = {
  attendees: Attendee[];
};

export default function PreviousAttendees({ attendees }: Props) {
  const [page, setPage] = useState<number>(1);

  const { data, error, count, isLoading } = useGetAttendees({
    page,
  });

  if (error) {
    console.log({ error });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }

  return (
    <section
      className="section-pad bg-previous-attendees-bg bg-cover bg-center"
      id="previous-attendees"
    >
      <div className="container">
        <h2 className="title !text-white !text-start mb-8 md:mb-16">
          Welcoming 5000+ attendees from companies such as:
        </h2>

        <div className="companies-container">
          <div className="companies grid grid-cols-12 lg:grid-cols-10 gap-6 transition-all">
            {isLoading ? (
              <div className="col-span-12 lg:col-span-10">
                <Loader color="white" />
              </div>
            ) : (
              (data ?? attendees)?.map(({ id, name }) => (
                <div
                  className="p-3 col-span-6 md:col-span-4 lg:col-span-2 bg-[#D9D9D9] bg-opacity-20 aspect-video rounded-lg grid place-content-center text-white font-bold text-center"
                  key={id}
                >
                  {name}
                </div>
              ))
            )}
          </div>

          <div className="btns w-fit flex items-center ml-auto mt-10">
            <button
              className="rotate-180 disabled-btn-style"
              onClick={() => setPage((old) => old - 1)}
              disabled={page === 1}
            >
              <PaginationArrowBtn className="w-8 md:w-10" />
            </button>
            <p className="mx-4 text-white font-bold md:text-lg">{page}</p>
            <button
              className="disabled-btn-style"
              onClick={() => setPage((old) => old + 1)}
              disabled={hasMoreData({ page, count })}
            >
              <PaginationArrowBtn className="w-8 md:w-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const hasMoreData = ({ page, count }: { page: number; count: number }) => {
  const numberOfPages = Math.floor(count / 15);
  return !(numberOfPages >= page);
};
