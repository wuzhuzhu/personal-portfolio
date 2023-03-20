import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollHeaderVariants } from "./framer-variants";

// Parallax by framer motion,
// https://codesandbox.io/s/framer-motion-parallax-i9gwuc?from-embed=&file=/src/App.tsx:214-345
// value: A scrollYProgress
// distance: positive number will move slower than scoll bar, as background items
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export function usePageParallax(distance: number) {
  const { scrollYProgress } = useScroll();
  return useParallax(scrollYProgress, distance);
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
      } else if (scrollY?.current > 10 && scrollY?.current > scrollY?.prev) {
        setHidden(true)
      }
    })
  })

  return [hidden, scrollHeaderVariants]
}
