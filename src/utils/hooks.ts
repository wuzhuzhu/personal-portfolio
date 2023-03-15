import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollHeaderVariants } from "./framer-variants";

// Parallax by framer motion,
// https://codesandbox.io/s/framer-motion-parallax-i9gwuc?from-embed=&file=/src/App.tsx:214-345
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function useHeaderHidden() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    return scrollY.onChange(() => {
      // @ts-ignore
      if (scrollY?.current < scrollY?.prev) {
        setHidden(false)
        // @ts-ignore
      } else if (scrollY?.current > 15 && scrollY?.current > scrollY?.prev) {
        setHidden(true)
      }
    })
  })

  return [hidden, scrollHeaderVariants]
}
