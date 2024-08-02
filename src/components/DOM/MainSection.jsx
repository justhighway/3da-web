// src/components/DOM/MainSection.jsx:

import Section from "./Section";

export default function MainSection() {
  return (
    <Section className="items-center justify-center">
      <div className="leading-[5rem]">
        <h1 className="text-[5rem] font-extrabold drop-shadow-xl text-center text-white">
          Your Best
        </h1>
        <h1 className="text-[5rem] font-extrabold drop-shadow-xl text-center text-white">
          Digital Engineering
        </h1>
        <h1 className="text-[5rem] font-extrabold drop-shadow-xl text-center text-white">
          Partner
        </h1>
        <h2 className="mt-12 text-3xl font-bold text-center text-blue-500 drop-shadow-lg">
          3Dautomation
        </h2>
      </div>
    </Section>
  );
}
