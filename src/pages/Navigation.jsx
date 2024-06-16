import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, animateScroll as scroll } from 'react-scroll';
import avatar from '../assets/IMG_1185.jpeg';

export default function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex flex-row justify-between items-center p-4 bg-white dark:bg-slate-900 shadow-md">
      <Avatar>
        <AvatarImage src={avatar} alt="Avatar" />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <Separator orientation="vertical" />
      <Button onClick={scrollToTop} variant="navigation">
        Home
      </Button>
      <Separator orientation="vertical" />
      <Button asChild variant="navigation">
        <Link to="about" smooth>
          About
        </Link>
      </Button>
      <Separator orientation="vertical" />
      <Button asChild variant="navigation">
        <Link to="projects" smooth>
          Projects
        </Link>
      </Button>
      {/* <Separator orientation="vertical" />
      <Button asChild variant="navigation">
        <Link to="contact" smooth>
          Contact
        </Link>
      </Button> */}
    </div>
  );
}
