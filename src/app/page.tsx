"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("December 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 text-2xl font-bold tracking-wide text-white">
      <div>{String(timeLeft.days).padStart(2, "0")}</div>
      <span>:</span>
      <div>{String(timeLeft.hours).padStart(2, "0")}</div>
      <span>:</span>
      <div>{String(timeLeft.minutes).padStart(2, "0")}</div>
      <span>:</span>
      <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white font-sans">
      <header className="absolute top-10 text-sm tracking-widest text-gray-500">
        M O N D A Y . D E C E M B E R . 2 0 2 4
      </header>
      <main className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-7xl md:text-9xl font-extrabold">
          brandord<span className="text-red-600">.</span>
        </h1>
        <p className="text-lg font-medium tracking-wide max-w-xl">
          GET READY TO BE BLOWN AWAY. BRANDORD IS RAMPING UP FOR AN EXPLOSIVE
          LAUNCH. STAY TUNED!
        </p>
        <button className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700">
          HOLD YOUR HORSES!
        </button>
        <CountdownTimer />
      </main>
      <footer className="absolute bottom-10 text-gray-500">
        hello@brandord.com
      </footer>
    </div>
  );
}
