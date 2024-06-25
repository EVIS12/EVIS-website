import { ArrowIcon } from '@/public/icons/SVGIcons';

export default function SplideArrows() {
  return (
    <div className="splide__arrows splide__arrows--ltr">
      <button
        className="splide__arrow splide__arrow--prev !bg-transparent !-left-4 md:!-left-6 !outline-none"
        type="button"
        aria-label="Previous slide"
        aria-controls="splide01-track"
      >
        <ArrowIcon className="bg-transparent w-10 !fill-none md:text-2xl" />
      </button>
      <button
        className="splide__arrow splide__arrow--next !bg-transparent !-right-4 md:!-right-6 !outline-none"
        type="button"
        aria-label="Next slide"
        aria-controls="splide01-track"
      >
        <ArrowIcon className="bg-transparent w-10 !fill-none md:text-2xl" />
      </button>
    </div>
  );
}
