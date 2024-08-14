import FirstSection from "./FirstSection";
import SwiperSection from "./SwiperSection";
import SecondSection from "./SecondSection";
import Section from "./Section";
import ThirdSection from "./ThirdSection";

export default function Interface() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <SecondSection />
      <ThirdSection />
      <SwiperSection />
      <Section>
        <h1>등등</h1>
      </Section>
    </div>
  );
}
