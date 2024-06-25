'use client';

import React, { useEffect, useState } from 'react';

export default function Hero({ time }: { time: string }) {
  const [leftMonths, setLeftMonths] = useState(0);
  const [leftDays, setLeftDays] = useState(0);
  const [leftHours, setLeftHours] = useState(0);
  const [leftMinutes, setLeftMinutes] = useState(0);
  const [leftSeconds, setLeftSeconds] = useState(0);

  const getLeftTime = () => {
    const currentDt = new Date();
    const closedDate = new Date(time);
    const leftDate = closedDate.getTime() - currentDt.getTime();
    if (leftDate <= 0) {
      setLeftMonths(0);
      setLeftDays(0);
      setLeftHours(0);
      setLeftMinutes(0);
      setLeftSeconds(0);
    } else {
      setLeftMonths(Math.floor(leftDate / (1000 * 60 * 60 * 24 * 30)));
      setLeftDays(
        Math.floor(
          (leftDate % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        )
      );
      setLeftHours(
        Math.floor((leftDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setLeftMinutes(Math.floor((leftDate % (1000 * 60 * 60)) / (1000 * 60)));
      setLeftSeconds(Math.floor((leftDate % (1000 * 60)) / 1000));
    }
  };

  useEffect(() => {
    getLeftTime();
    setInterval(getLeftTime, 1000);
  }, []);

  return (
    <section className="bg-cover bg-home-bg bg-center -mt-[100px] md:-mt-[120px] lg:-mt-[150px] 4xl:-mt-[85px] h-[80vh] md:h-[calc(90vh+5px)] flex items-center px-6">
      <div className="container mt-20">
        <div className="content flex flex-col items-center text-center md:text-left md:block">
          <div className="left-time  bg-black bg-opacity-40 rounded-xl md:rounded-2xl 4xl:rounded-3xl border-4 border-solid border-main-color w-fit py-3 px-6 md:py-6 md:px-16 lg:my-8 4xl:py-10 4xl:px-20 my-6 special-shadow">
            <h2 className="text-white text-xl sm:text-3xl lg:text-4xl 4xl:text-6xl font-bold flex">
              <TimeUnitWrapper unit="Months">{leftMonths} </TimeUnitWrapper>:
              <TimeUnitWrapper unit="Days">{leftDays} </TimeUnitWrapper>:
              <TimeUnitWrapper unit="Hours">{leftHours} </TimeUnitWrapper> :
              <TimeUnitWrapper unit="Minutes">{leftMinutes}</TimeUnitWrapper> :
              <TimeUnitWrapper unit="Seconds">{leftSeconds}</TimeUnitWrapper>
            </h2>
          </div>
          <h1 className=" text-white text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl font-bold ">
            Where <span className="text-main-color">EV</span> Innovations Meet
          </h1>

          <p className="  text-sm md:text-base text-white lg:w-1/2 mt-4">
            The premier gathering in the Middle East spotlighting the future of
            electric vehicles. Unveil ground-breaking advancements, connect with
            decision-makers, and be at the forefront of sustainable mobility.
          </p>
          <h1 className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2">
            20-22 <span className="text-main-color">May</span> 2024 | ADNEC
            Center Abu Dhabi
          </h1>
          <div className="btns flex gap-4 md:gap-6 mt-5 md:mt-8 lg:mt-10">
            <a
              href={'/register-form/?title=Register_your_interest'}
              target="_blank"
              className="gradient-btn"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const TimeUnitWrapper = ({
  unit,
  children,
}: {
  unit: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center mx-1 md:mx-3">
    {children} <span className="text-sm font-light">{unit}</span>
  </div>
);
