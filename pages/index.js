import MainNav from "../components/nav";
import HomeHero from "../components/homeHero";
import About from "../components/about";
import Projects from "../components/projects";
import BlogRoll from "../components/blogroll";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

export default function Home({posts}) {
  
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
          <BlogRoll posts={posts} />
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

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}
