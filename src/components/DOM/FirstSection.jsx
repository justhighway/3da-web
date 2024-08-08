import CustomButton from "@components/CustomButton";
import Section from "./Section";
import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <Section>
      <div className="space-y-2">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          We are
        </motion.h1>
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Digital Engineering
        </motion.h1>
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Partner
        </motion.h1>
      </div>
      <CustomButton
        variant="primary"
        size="large"
        color="blue"
        className="mt-8"
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        Learn More
      </CustomButton>
    </Section>
  );
}
