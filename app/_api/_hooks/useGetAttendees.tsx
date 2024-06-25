import React from 'react';
import axiosInterceptorInstance from '../axiosInterceptor';
import { useQuery } from 'react-query';

export type AttendeesResponse = {
  count: number;
  results: { id: string; name: string }[];
};

const fetchAttendees = (page = 1) =>
  axiosInterceptorInstance
    .get<AttendeesResponse>(`/attendees/previous_attendees/?page=${page}`)
    .then((res) => res.data);

export default function useGetAttendees({ page }: { page: number }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['attendees', page],
    queryFn: () => fetchAttendees(page as number),
    keepPreviousData: true,
  });

  return {
    data: data?.results,
    count: data?.count ?? 0,
    error,
    isLoading,
  };
}
