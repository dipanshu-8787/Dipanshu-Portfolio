import { useScroll, motion } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 z-[200] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
