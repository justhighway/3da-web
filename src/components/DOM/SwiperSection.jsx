import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function SwiperSection() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollXProgress } = useScroll({ container: ref });

  // 중앙 카드의 크기와 불투명도를 조정하기 위한 트랜스폼
  const scale = useTransform(scrollXProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollXProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    if (ref.current) {
      const handleScroll = () => {
        const scrollPosition = ref.current.scrollLeft;
        const cardWidth = ref.current.scrollWidth / 11;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      };

      ref.current.addEventListener("scroll", handleScroll);
      return () => ref.current.removeEventListener("scroll", handleScroll);
    }
  }, [ref]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center w-full"
    >
      {/* Scrollable List */}
      <ul
        ref={ref}
        className="flex w-full max-w-6xl py-5 mx-auto overflow-x-scroll list-none h-[500px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 snap-x snap-mandatory"
      >
        {Array(11)
          .fill("")
          .map((_, index) => (
            <motion.li
              key={index}
              className={`flex-shrink-0 h-full mx-4 bg-white rounded-lg shadow-lg w-80 snap-center transition-all duration-300`}
              style={{
                transform: `scale(${
                  activeIndex === index ? 1.1 : 0.9
                }) translateY(${activeIndex === index ? "-10px" : "0px"})`,
                opacity: activeIndex === index ? 1 : 0.6,
              }}
            ></motion.li>
          ))}
      </ul>

      {/* Progress Bar */}
      <div className="relative w-2/3 h-2 mb-5 bg-gray-300 rounded-full">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          style={{ scaleX: scrollXProgress }}
          transformOrigin="0% 50%"
        />
      </div>
    </motion.div>
  );
}
