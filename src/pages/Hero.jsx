import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import arrow from '@/assets/arrow-down.svg';
import pic from '@/assets/IMG_1185.jpeg';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-screen flex justify-between pl-40 mb-7">
        <img
          src={pic}
          alt="Jake Crawford"
          className="w-96 h-96 rounded-full grayscale-[50%]"
        />
        <div className="flex flex-col self-end mr-10">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight mb-1 md:mr-10 self-end">
            Jake
          </h1>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight mb-1 md:mr-10 self-end">
            Crawford
          </h1>
          <h2 className="border-b border-[#E0DFDF] pb-2 text-4xl md:text-6xl font-semibold tracking-tight first:mt-0 mb-14 md:mr-10 md:text-[#E12920] self-end">
            Software Developer
          </h2>
        </div>
      </div>
      <h4 className="text-2xl md:text-4xl font-semibold tracking-tight text-center md:text-start md:ml-10 self-start md:max-w-[60%]">
        I&apos;m a software developer currently based in Austin, TX. I
        specialize in full-stack web development, with a focus on JavaScript and
        Node.js.
      </h4>
      <div className="absolute bottom-6 animate-bounce">
        <Link to="about" smooth>
          <img
            src={arrow}
            alt="Arrow pointing down"
            className="w-10 h-10"
            style={{ opacity: opacity }}
          />
        </Link>
      </div>
    </div>
  );
}
