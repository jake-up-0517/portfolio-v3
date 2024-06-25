import { useState } from 'react';
import { Element } from 'react-scroll';
import Modal from './Modal';

export default function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalLink, setModalLink] = useState('');
  const [modalButton, setModalButton] = useState('');

  const handleMouseEnter = (content, link, button) => {
    setModalContent(content);
    setModalLink(link);
    setModalButton(button);
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  const argometrics = {
    content: `A Kubernetes visualizer that graphically displays real-time insights into cluster health. Built using React, Node.js, and MongoDB.`,
    link: `https://github.com/oslabs-beta/Argometrics`,
    button: `GitHub`,
  };
  const eggGame = {
    content: `Inspired by the game featured in the series I Think You Should Leave with Tim Robinson on Netflix.`,
    link: `https://egg-game-blue.vercel.app/`,
    button: `Try It!`,
  };
  const jamd = {
    content: `A mobile app to find and alert nearby friends if you are in need. Built using React Native, Node.js, MongoDB, and SQLite.`,
    link: `https://github.com/jake-up-0517/jamd`,
    button: `GitHub`,
  };
  const portfolio = {
    content: `This portfolio site. Built using React, Tailwind, shadcn/ui, and Vite.`,
    link: `https://github.com/jake-up-0517/portfolio-v3`,
    button: `GitHub`,
  };

  return (
    <Element
      name="projects"
      className="relative w-screen h-screen flex flex-col justify-center items-start"
    >
      <div className="flex justify-start ml-10 border-b border-[#E12920] w-2/3 pb-2">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight">
          Projects
        </h2>
      </div>
      <div className="flex flex-col justify-start ml-10 w-2/3">
        <a
          href={argometrics.link}
          target="_blank"
          onMouseEnter={() =>
            handleMouseEnter(
              argometrics.content,
              argometrics.link,
              argometrics.button
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center h-28 text-xl md:text-5xl font-bold tracking-tight border-b border-[#E12920] hover:bg-[#E12920] transition-colors duration-300">
            Argometrics
          </div>
        </a>
        <a
          href={eggGame.link}
          target="_blank"
          onMouseEnter={() =>
            handleMouseEnter(eggGame.content, eggGame.link, eggGame.button)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center h-28 text-xl md:text-5xl font-bold tracking-tight border-b border-[#E12920] hover:bg-[#E12920] transition-colors duration-300">
            Egg Game
          </div>
        </a>
        <a
          href={jamd.link}
          target="_blank"
          onMouseEnter={() =>
            handleMouseEnter(jamd.content, jamd.link, jamd.button)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center h-28 text-xl md:text-5xl font-bold tracking-tight border-b border-[#E12920] hover:bg-[#E12920] transition-colors duration-300">
            Jamd
          </div>
        </a>
        <a
          href={portfolio.link}
          target="_blank"
          onMouseEnter={() =>
            handleMouseEnter(
              portfolio.content,
              portfolio.link,
              portfolio.button
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center h-28 text-xl md:text-5xl font-bold tracking-tight border-b border-[#E12920] hover:bg-[#E12920] transition-colors duration-300">
            Portfolio
          </div>
        </a>
      </div>
      {isModalVisible && (
        <div className="absolute right-0 top-0 h-screen w-1/2 flex flex-col justify-center items-center">
          <Modal content={modalContent} link={modalLink} button={modalButton} />
        </div>
      )}
    </Element>
  );
}
