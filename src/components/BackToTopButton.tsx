import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="shadow-btnToTop hover:shadow-btnToTopHover fixed bottom-8 right-8 z-20 flex h-[2.5rem] w-[2.5rem] items-center justify-center bg-white transition-all duration-200 hover:scale-110"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
