import { Button } from '@/components/ui/button';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-28 flex flex-row justify-center items-center p-4 bg-[#1E1C1C]">
      <div className="flex w-1/3 justify-between items-center">
        <Button onClick={scrollToTop} variant="outline" size="lg">
          <Link to="about" smooth>
            About
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="projects" smooth>
            Projects
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="contact" smooth>
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
}
