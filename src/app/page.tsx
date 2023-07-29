import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Project from "@/components/Project/Project"
import HomeSection from "@/components/HomeSection/HomeSection"

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
      <Project />
      <Contact />
    </div>
  )
}
