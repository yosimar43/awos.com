import type { NextPage } from "next";
import Image from "next/image";

interface Props {
 description: string;
 title: string;
 src: string;
 alt: string;
}

const AppDesccriptionCard: NextPage<Props> = ({
 title,
 description,
 src,
 alt,
}) => {
 return (
  <div className="card">
   <h2>{title}</h2>
   <p>{description}</p>
   <style jsx>{`
    div.card {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin: 2rem 0;
     width: min(100%, 500px);
     padding: 1rem 0.5rem;
     background: rgba(255, 255, 255, 0.4);
     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
     backdrop-filter: blur(5px);
     -webkit-backdrop-filter: blur(5px);
     border-radius: 10px;
     border: 1px solid rgba(255, 255, 255, 0.18);
     border-radius: 0.5rem;
    }
    h2 {
     font-size: 2rem;
     font-family: "Raleway", sans-serif;
     margin-bottom: 1rem;
     color: #1d1c1c;
    }
    p {
     font-size: 1.5rem;
     font-family: "Quicksand", sans-serif;
     margin: 0;
    }
   `}</style>
  </div>
 );
};

export default AppDesccriptionCard;
