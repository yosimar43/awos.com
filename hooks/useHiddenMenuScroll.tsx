import { useEffect, useState } from "react";

const useHiddenMenuScroll = (showClass: string, hiddenClass: string) => {
 const [prevScrollPos, setPrevScrollPos] = useState(0);
 const [visible, setVisible] = useState(true);

 // new useEffect:
 useEffect(() => {
  const handleScroll = () => {
   // find current scroll position
   const currentScrollPos = window.pageYOffset;

   // set state based on location info (explained in more detail below)
   setVisible(prevScrollPos > currentScrollPos || prevScrollPos === 0);

   // set state to new scroll position
   setPrevScrollPos(currentScrollPos);
  };
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
 }, [prevScrollPos, visible]);

 return visible ? hiddenClass : showClass;
};

export default useHiddenMenuScroll;
