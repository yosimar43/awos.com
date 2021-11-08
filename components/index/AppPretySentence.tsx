import gsap from "gsap";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

interface Props {
 sentence: string;
 specialSentence: string;
}

const AppPretySentence: NextPage<Props> = ({ sentence, specialSentence }) => {
 const specialSentenceRef = useRef(null);

 useEffect(() => {
  const specialSentenceAnimation = gsap.fromTo(
   specialSentenceRef.current,
   {
    opacity: 0,
    y: -100,
    ease: "ease-in-out",
   },
   {
    opacity: 1,
    y: 0,
    duration: 1,
   }
  );
  //delete animation when the component is unmounted
  return () => {
   specialSentenceAnimation.kill();
  };
 }, []);

 return (
  <>
   <h1>
    <span ref={specialSentenceRef}>{specialSentence}</span>
    <br />
    {sentence}
   </h1>

   <style jsx>{`
    h1 {
     overflow: hidden;
     font-family: "Quicksand", sans-serif;
     text-align: center;
     font-size: clamp(25px, 2.5rem, 3rem);
     line-height: 2;
     color: rgb(0, 0, 0, 0.7);
     margin: 4rem 0;
     text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    }
    h1 span {
     color: #ff004cef;
     font-size: clamp(2rem, 70px, 6rem);
     background: rgb(232, 9, 36);
     display: inline-block;
     background: linear-gradient(
      90deg,
      rgba(232, 9, 36, 1) 9%,
      rgba(167, 0, 135, 1) 65%,
      rgba(55, 6, 215, 1) 92%
     );
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     text-align: center;
    }
   `}</style>
  </>
 );
};

export default AppPretySentence;
