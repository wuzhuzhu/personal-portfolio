import { Box, BoxProps } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"

// todo: try sizes:
// https://nextjs.org/docs/api-reference/next/image
export const CImage = ({
  src,
  alt,
  fit = "cover",
  w, // not support full yet
  h, // not support full yet
  ...rest
}: { src: StaticImageData; alt: string; fit?: "cover" | "contain" | "none" } & Omit<
  BoxProps,
  "as"
>) => {
  return (
    <Box display="inline" w={w} h={h} position="relative" {...rest}>
      <Image
        fill
        // sizes="(max-width: 768px) 100px,
        //       300px"
        style={{
          objectFit: fit,
        }}
        src={src}
        alt={alt}
      />
    </Box>
  )
}
