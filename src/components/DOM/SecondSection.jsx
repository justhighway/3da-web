import Section from "./CustomSection";
import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <Section>
      <div className="space-y-2">
        <motion.h1
          className="relative mb-8 overflow-hidden text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0 }}
        >
          <span className="relative">
            <motion.span
              className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500 z-[-1]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <span className="relative text-white">3D Automation</span>
          </span>
        </motion.h1>

        <motion.h3
          className="relative overflow-hidden text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="relative">쓰리디오토메이션은 </span>
          <span className="relative">
            <motion.span
              className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500 z-[-1]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
            <span className="relative text-white">
              일류 디지털 엔지니어링 지원,
            </span>
          </span>
        </motion.h3>

        <motion.h3
          className="relative overflow-hidden text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="relative">
            <motion.span
              className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500 z-[-1]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
            <span className="relative text-white">제조 서비스 파트너로서</span>
          </span>
        </motion.h3>

        <motion.h3
          className="relative overflow-hidden text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="relative">고객 가치 실현을 위해</span>
        </motion.h3>

        <motion.h3
          className="relative overflow-hidden text-3xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="relative">끊임 없이 노력하고 있습니다.</span>
        </motion.h3>
      </div>
    </Section>
  );
}
