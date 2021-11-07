import type { NextPage } from "next";
import Link from "next/link";

const PrincipalNavBar: NextPage = () => {
 return (
  <>
   <nav>
    <Link href="/">
     <a>blog</a>
    </Link>
    <Link href="/">
     <a>AWOS</a>
    </Link>
    <Link href="/">
     <a>guias</a>
    </Link>
   </nav>
   <style jsx>
    {`
     nav {
      min-height: max-content;
      display: flex;
      justify-content: center;
      font-family: "Quicksand", sans-serif;
      font-size: clamp(0.5rem, 1.2rem, 1.4rem);
      padding: 1rem 0rem;
      gap: 2rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
       0 10px 10px -5px rgba(0, 0, 0, 0.04);
     }

     a {
      position: relative;
      text-decoration: none;
      color: #1d1c1c;
      transition: all 0.5s ease-in-out;
      overflow: hidden;
     }
     a:hover {
      transform: translateY(-3px);
      color: #e71135;
     }
     a:before {
      content: "";
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 2px;
      transform: translateX(-100%);
      background-color: #e71135;
      transition: all 1s ease-in-out;
     }
     a:hover:before {
      transform: translateX(0%);
     }
    `}
   </style>
  </>
 );
};

export default PrincipalNavBar;
