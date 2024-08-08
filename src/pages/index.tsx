import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import HomePageHeader from "@site/src/components/HomePageHeader";
import HomepageMain from "@site/src/components/HomepageMain";
import Head from "@docusaurus/Head";
import "aos/dist/aos.css"; 
import AOS from "aos"; 

export default function Home(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间
      easing: "ease-in-out", // 动画效果
    });
  }, []);

  return (
    <Layout description="A Q&A platform software for teams at any scale. Whether it’s a community forum, help center, or knowledge management platform, you can always count on Answer.">
      <Head>
        <title>Apache Answer | Free Open-source Q&A Platform</title>
        <meta data-rh="true" name="twitter:card" content="summary" />
      </Head>
      <main className="headerBg">
        <HomePageHeader />
        <HomepageMain />
      </main>
    </Layout>
  );
}
