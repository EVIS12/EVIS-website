'use client';

//@ts-ignore
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { SplideArrows } from '../_components';

export const AdaptiveCards = ({
  children,
  className,
}: {
  children: React.ReactNode[];
  className?: string;
}) => {
  return (
    <>
      <div className={`cards-container !hidden md:!flex ${className}`}>
        {children}
      </div>
      <Splide
        className="md:hidden"
        options={{
          perPage: 1,
          focus: 0,

          pagination: false,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {children?.map((child, i) => (
            <SplideSlide className="!p-6 4xl:!p-10 flex justify-center" key={i}>
              {child}
            </SplideSlide>
          ))}
        </SplideTrack>
        <SplideArrows />
      </Splide>
    </>
  );
};
