import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element
      name="about"
      className="w-screen h-screen flex flex-col justify-center items-start"
    >
      <div className="flex justify-start mb-7 ml-10 border-b border-[#E12920] w-2/3 pb-2">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight">
          About
        </h2>
      </div>
      <h4 className="text-xl md:text-4xl font-semibold tracking-tight text-start mx-10 mb-7">
        I&apos;m Jake. I&apos;m a full-stack software developer located in
        Austin, TX. I strive to build products and offer services that help
        businesses reach their goals and increase their value. I have experience
        with a variety of technologies, including JavaScript, Node.js, React,
        and more. I am always looking for new opportunities to learn and grow as
        a developer.
      </h4>
      <h4 className="text-xl md:text-4xl font-semibold tracking-tight text-start mx-10">
        Personally, I enjoy spending time with my dog, playing video games, and
        watching sports.
      </h4>
    </Element>
  );
}
