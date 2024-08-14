import Section from "./Section";
import { motion } from "framer-motion";

export default function ThirdSection() {
  return (
    <Section
      size="large"
      position="right"
      hasMotion={true}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 1 }}
      onAnimationStart={() => console.log("Animation Start")}
      onAnimationComplete={() => console.log("Animation Completed")}
    >
      <motion.h1 className="text-5xl font-bold drop-shadow-lg">
        회사소개3
      </motion.h1>
      <motion.span className="mt-4 text-lg drop-shadow-md">
        회사소개멘트 회사소개멘트 회사소개멘트 회사소개멘트 회사소개멘트
        회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
        회사소개멘트회사소개멘트회사소개멘트회사소개멘트회사소개멘트
      </motion.span>
    </Section>
  );
}
