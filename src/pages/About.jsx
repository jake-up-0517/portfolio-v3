// import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
// import { Link } from 'react-scroll';
// import arrow from '@/assets/arrow-down.svg';

export default function About() {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const opacity = Math.max(1 - scrollY / 1500, 0);

  return (
    <Element
      name="about"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="flex justify-center mb-7 border-b border-black w-2/3 pb-2">
        <h2 className="text-5xl font-extrabold tracking-tight lg:text-5xl">
          About
        </h2>
      </div>
      <h4 className="text-xl font-semibold tracking-tight text-center mx-7 mb-7">
        I&apos;m Jake. I&apos;m a full-stack software developer located in
        Austin, TX. I strive to build products and offer services that help
        businesses reach their goals and increase their value. I have experience
        with a variety of technologies, including JavaScript, Node.js, React,
        and more. I am always looking for new opportunities to learn and grow as
        a developer.
      </h4>
      <h4 className="text-xl font-semibold tracking-tight text-center mx-7">
        Personally, I enjoy spending time with my dog, playing video games, and
        watching sports.
      </h4>
      {/* <div className="absolute bottom-6 animate-bounce">
        <Link to="about" smooth>
          <img
            src={arrow}
            alt="Arrow pointing down"
            className="w-10 h-10"
            style={{ opacity: opacity }}
          />
        </Link>
      </div> */}
    </Element>
  );
}
