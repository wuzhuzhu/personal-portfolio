import React from "react"
import Image from "next/image"
import meImg from "~/images/frames/me.webp"
import { CImage } from "@/components/shared/chakra-wrapped"

const Responsive = () => {
  return (
    <div>
      <h1>Image Component With Layout Fill</h1>
      <div
        style={{ position: "relative", width: "100px", height: "150px", backgroundColor: "gray" }}
      >
        <Image
          alt="meImg"
          src={meImg}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <CImage w="200px" h="300px" bgColor="purple" alt="meImg" src={meImg}></CImage>
      <div
        style={{ position: "relative", width: "100px", height: "500px", backgroundColor: "gray" }}
      >
        <Image
          alt="meImg"
          src={meImg}
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{ position: "relative", width: "300px", height: "500px", backgroundColor: "gray" }}
      >
        <Image
          alt="meImg"
          src={meImg}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "none",
          }}
        />
      </div>
    </div>
  )
}

export default Responsive
