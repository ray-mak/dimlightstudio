"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const GalleryPage = () => {
  const imgSrc = [
    "/images/portfolio1.webp",
    "/images/portfolio2.webp",
    "/images/portfolio3.webp",
    "/images/portfolio4.webp",
    "/images/portfolio5.webp",
    "/images/portfolio6.webp",
    "/images/portfolio7.webp",
    "/images/portfolio8.webp",
  ]

  const [showModal, setShowModal] = useState<string>("")
  function openModal(src: string) {
    setShowModal(src)
  }

  useEffect(() => {
    if (showModal !== "") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [showModal])
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="banner text-white flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Gallery
          </h1>
        </div>
        <div className="relative w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-2 lg:grid-cols-3 gap-2 p-4 md:p-0 my-16">
          {showModal !== "" && (
            <>
              <div className="z-20 fixed top-0 left-0 w-full h-full bg-black/80"></div>
              <div className="z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[50%] md:w-[700px] md:h-[700px] relative">
                  <div
                    className="absolute z-20 fixed top-0 right-0 w-10 h-10 bg-black/80 flex items-center justify-center hover:cursor-pointer"
                    onClick={() => setShowModal("")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <Image
                    src={showModal}
                    alt="picture of tattoo"
                    fill
                    className="hover:cursor-zoom-out object-cover"
                    onClick={() => setShowModal("")}
                  />
                </div>
              </div>
            </>
          )}
          {imgSrc.map((img, index) => {
            console.log(img)
            return (
              <div
                className="relative w-full h-auto aspect-square overflow-hidden"
                key={index}
                onClick={() => openModal(img)}
              >
                <Image
                  src={img}
                  alt="picture of tattoo"
                  fill
                  className="object-cover transition duration-500 hover:scale-125 hover:cursor-zoom-in"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
