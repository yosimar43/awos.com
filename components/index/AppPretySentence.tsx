import { NextPage } from "next";

interface Props {
 sentence: string;
 specialSentence: string;
}

const AppPretySentence: NextPage<Props> = ({ sentence, specialSentence }) => {
 return (
  <>
   <h1>
    <span>{specialSentence}</span>
    <br />
    {sentence}
   </h1>

   <style jsx>{`
    h1 {
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
     background: linear-gradient(
      90deg,
      rgba(232, 9, 36, 1) 9%,
      rgba(167, 0, 135, 1) 65%,
      rgba(55, 6, 215, 1) 92%
     );
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     text-align: center;
     animation: fade ease-in-out 1.5s;
    }

    @keyframes fade {
     from {
      opacity: 0;
     }
     to {
      opacity: 1;
     }
    }
    @keyframes translateY {
     from {
      transform: translateY(-50%);
     }
     to {
      transform: translateY(0);
     }
    }
   `}</style>
  </>
 );
};

export default AppPretySentence;
