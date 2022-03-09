import MainNav from "../components/nav";
import HomeHero from "../components/homeHero";
import About from "../components/about";
import Projects from "../components/projects";
import BlogRoll from "../components/blogroll";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from 'next/head'

const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

export default function Home() {
  
  return (
    <>
      <MainNav />
      <div className="container">
        <Head>
          <title>Kevin Masters - Upstate New York Web Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <HomeHero />
          <About />
          <Projects />{/* 
          <BlogRoll />*/}
          <Contact />
          <Console log='Now, this is a story all about how' />
          <Console log='my life got flipped - turned upside down' />
          <Console log="And I'd like to take a minute" />
          <Console log="Just sit right there" />
          <Console log="I'll tell you how I became the prince of a town called Bel-Air" />
        </main>
        <div id="palmBg"></div>
        <Footer />
      </div>
      <style jsx>{`
        main {
          padding-top: 120px;
        }
        `}</style>
    </>
  )
}
