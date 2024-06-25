import { Button } from '@/components/ui/button';
/* eslint-disable react/prop-types */
export default function Modal({ content, link, button }) {
  return (
    <div className="bg-[#E12920] w-96 h-96 rounded-md">
      <div className="relative flex flex-col h-full w-full justify-start items-center pt-6 px-6">
        <div className="text-center text-3xl font-medium tracking-tight">
          {content}
        </div>
        <a href={link} target="_blank" className="absolute bottom-0 mb-12">
          <Button variant="outlineSecondary" size="lg" className="mt-3 text-xl">
            {button}
          </Button>
        </a>
      </div>
    </div>
  );
}
