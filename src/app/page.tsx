import About from "@/components/About/About"
import Project from "@/components/Project/Project"
import HomeSection from "@/components/HomeSection/HomeSection"
import NavBar from "@/components/NavBar/NavBar"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">

      <NavBar />

      <div className='container m-auto px-20'>

        <HomeSection />
        <About />
        <Project />

      </div>
      <Footer />

    </main>
  )
}
