"use client"
import HeroSection from "./Components/hero"
import Image from "next/image"
import ImageGallery from "./Components/imagegallerys"


export default async function Home() {

  return (
    <main className="bg-white">
      <HeroSection>        
      </HeroSection>
      <div id="widget-holder">

      </div>

      <div className="container mx-auto">
        <ImageGallery />
</div>


    </main>
  )
}
