import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import arrow from '@/assets/arrow-down.svg';

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
      <h1 className="text-6xl font-extrabold tracking-tight lg:text-5xl mb-1">
        Jake Crawford
      </h1>
      <h2 className="border-b border-black pb-2 text-4xl font-semibold tracking-tight first:mt-0 mb-7">
        Software Developer
      </h2>
      <h4 className="text-2xl font-semibold tracking-tight text-center mb-7">
        I&apos;m a software developer currently based in Austin, TX. I
        specialize in full-stack web development, with a focus on JavaScript and
        Node.js.
      </h4>
      <Button asChild variant="default" size="lg" className="text-xl">
        <Link to="contact" smooth>
          Contact
        </Link>
      </Button>
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
