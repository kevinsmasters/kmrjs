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
          <Console log='Rather be in Richmond with all the hail and rain' />
          <Console log="Than to be in Georgia boys wearin' that ball and chain" />
          <Console log="Won't get drunk no more" />
          <Console log="Won't get drunk no more" />
          <Console log="Won't get drunk no more" />
          <Console log="Way down the Old Plank Road" />
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
