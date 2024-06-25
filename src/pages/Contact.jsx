import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element
      name="contact"
      className="w-screen h-screen flex flex-col justify-center items-start"
    >
      <div className="flex justify-start mb-7 ml-10 border-b border-[#E12920] w-2/3 pb-2">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight">
          Contact
        </h2>
      </div>
      <h4 className="text-xl md:text-4xl font-semibold tracking-tight text-start mx-10 mb-7">
        Send me an email at{' '}
        <a
          href="mailto:jake.crawford512@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E12920]"
        >
          jake.crawford512@gmail.com
        </a>{' '}
        or connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/jakecrawford512/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E12920]"
        >
          LinkedIn
        </a>
        .
      </h4>
      <h4 className="text-xl md:text-4xl font-semibold tracking-tight text-start mx-10">
        Also, check out my{' '}
        <a
          href="https://github.com/jake-up-0517"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E12920]"
        >
          GitHub
        </a>
        .
      </h4>
    </Element>
  );
}
