import type { NextPage } from "next";

import Head from "next/head";
import PrincipalNavBar from "@/helpers/PrincipalNavBar";
import AppPretySentence from "@/helpers/index/AppPretySentence";
import AppDesccriptionCard from "@/helpers/index/AppDescriptionCard";
import { Col, Row } from "antd";
import useHiddenMenuScroll from "@hooks/useHiddenMenuScroll";

const Home: NextPage = () => {
 const hiddenClassName = `
    transform: translateY(-100%);
    transition: transform 0.5s;
`;

 const showClassName = `
    transform: translateY(0%);
    transition: transform 0.5s;
`;

 return (
  <div>
   <Head>
    <title>Welcome|awos</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <header>
    <PrincipalNavBar />
   </header>
   <style jsx>{`
    header {
     position: fixed;
     top: 0;
     width: 100%;
     height: auto;
     z-index: 3;
     background-color: #fff;
     ${useHiddenMenuScroll(showClassName, hiddenClassName)}
    }
   `}</style>
   <main>
    <AppPretySentence
     specialSentence="AWOS.COM"
     sentence="Una nueva forma de ser parte de la web"
    />
    <Row style={{ margin: "0rem 0.5rem" }}>
     <Col span={8}>
      <AppDesccriptionCard
       title="¿Que es awos?"
       description="awos.com es un lugar diseñado para que lleves tus habilidades de programcion al siguiente nivel"
      />
     </Col>
    </Row>
    <Row>
     <Col span={8} offset={8}>
      <AppDesccriptionCard
       title="¿Que es awos?"
       description="awos.com es un lugar diseñado para que lleves tus habilidades de programcion al siguiente nivel"
      />
     </Col>
    </Row>
    <Row>
     <Col span={8} offset="16">
      <AppDesccriptionCard
       title="¿Que es awos?"
       description="awos.com es un lugar diseñado para que lleves tus habilidades de programcion al siguiente nivel"
      />
     </Col>
    </Row>
   </main>
  </div>
 );
};

export default Home;
