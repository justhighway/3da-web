import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Section from "./Section";
import ThirdSection from "./ThirdSection";

export default function Interface() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      {/* <Section>
        <h1>사업</h1>
      </Section> */}
      <ThirdSection />
      <Section hasMotion={false}>
        <h1>연락</h1>
      </Section>
      <Section>
        <h1>등등</h1>
      </Section>
    </div>
  );
}
