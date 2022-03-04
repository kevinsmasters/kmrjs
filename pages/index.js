import "bootswatch/dist/solar/bootstrap.min.css";
import MainNav from "../components/nav";
import HomeHero from "../components/homeHero";
import About from "../components/about";
import Projects from "../components/projects";
import BlogRoll from "../components/blogroll";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from 'next/head'

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
          <Projects />
          <BlogRoll />
          <Contact />
        </main>

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
