import { Element } from 'react-scroll';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function Projects() {
  return (
    <Element
      name="projects"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="flex justify-center mb-7 border-b border-black w-2/3 pb-2">
        <h2 className="text-5xl font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="argometrics"
        className="w-2/3"
      >
        <AccordionItem value="argometrics">
          <AccordionTrigger className="bg-sky-700 text-slate-100">
            Argometrics
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-2 text-center">
                A Kubernetes visualizer that graphically displays real-time
                insights into cluster health. Built using React, Node.js, and
                MongoDB.
              </div>
              <a
                href="https://github.com/oslabs-beta/Argometrics"
                target="_blank"
              >
                <Button variant="default" size="sm" className="mt-3">
                  GitHub
                </Button>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="egg-game">
          <AccordionTrigger className="bg-sky-800 text-slate-100">
            Egg Game
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-2 text-center">
                Inspired by the game featured in the series I Think You Should
                Leave with Tim Robinson on Netflix.
              </div>
              <div className="flex justify-center w-full">
                <a
                  href="https://github.com/jake-up-0517/egg-game"
                  target="_blank"
                >
                  <Button variant="default" size="sm" className="mt-3 mr-6">
                    GitHub
                  </Button>
                </a>
                <a href="https://egg-game-blue.vercel.app/" target="_blank">
                  <Button variant="default" size="sm" className="mt-3">
                    Try It!
                  </Button>
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Jamd">
          <AccordionTrigger className="bg-sky-900 text-slate-100">
            Jamd
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-2 text-center">
                A mobile app to find and alert nearby friends if you are in
                need. Built using React Native, Node.js, MongoDB, and SQLite.
              </div>
              <a href="https://github.com/jake-up-0517/jamd" target="_blank">
                <Button variant="default" size="sm" className="mt-3">
                  GitHub
                </Button>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Portfolio">
          <AccordionTrigger className="bg-sky-950 text-slate-100">
            Portfolio
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-2 text-center">
                This portfolio site. Built using React and shadcn/ui.
              </div>
              <a href="https://github.com/jake-up-0517/jamd" target="_blank">
                <Button variant="default" size="sm" className="mt-3">
                  GitHub
                </Button>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Element>
  );
}
