import { useEffect, useState } from "react";

const useNavbarManager = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50 && !isScrolled) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // `get` prefixed is exposed
  const getScrollIntoViewHandler = (id: string, top?: number) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: top || element.offsetTop - 88,
      });
      if (isHamburgerMenuOpen) setIsHamburgerMenuOpen(false);
    }
  };
  const getToggleHamburgerMenuHandler = () =>
    setIsHamburgerMenuOpen((prev) => !prev);
  const getIsHamburgerMenuOpen = () => isHamburgerMenuOpen;
  const getIsScrolled = () => isScrolled;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("mousedown", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getIsHamburgerMenuOpen,
    getIsScrolled,
    getScrollIntoViewHandler,
    getToggleHamburgerMenuHandler,
  };
};

export default useNavbarManager;
