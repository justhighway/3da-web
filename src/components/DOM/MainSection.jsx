// src/components/DOM/MainSection.jsx:

import Section from "./Section";

export default function MainSection() {
  return (
    <Section className="items-center justify-center">
      <div className="leading-[5rem]">
        <h1 className="text-[5rem] font-extrabold drop-shadow-2xl text-center text-blue-500">
          Your Best
        </h1>
        <h1 className="text-[5rem] font-extrabold drop-shadow-2xl text-center text-blue-500">
          Digital Engineering
        </h1>
        <h1 className="text-[5rem] font-extrabold drop-shadow-2xl text-center text-blue-500">
          Partner
        </h1>
        <h2 className="mt-12 text-3xl font-bold text-center text-white drop-shadow-lg">
          3Dautomation
        </h2>
      </div>
    </Section>
  );
}
