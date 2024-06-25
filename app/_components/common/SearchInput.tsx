'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function SearchInput({ filter }: { filter: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="search-container flex flex-1 justify-end">
      <input
        id="search"
        className="w-5/6 md:w-1/3 border-2 4xl:placeholder:text-xl rounded-md outline-none p-3 h-10 4xl:h-12 font-2xl "
        type="search"
        name="search"
        placeholder="Search words..."
        defaultValue={searchParams.get('query') ?? ''}
      />
      <button
        className="!ml-2 !mr-0 green-btn text-xs md:!text-sm lg:!text-base !font-normal !py-2 !px-4"
        title="Search Button"
        onClick={() =>
          router.push(
            pathname +
              `?${filter}=${searchParams.get(filter)}` +
              //@ts-ignore
              `&query=${document.getElementById('search')?.value}`
          )
        }
      >
        Search
      </button>
    </div>
  );
}
