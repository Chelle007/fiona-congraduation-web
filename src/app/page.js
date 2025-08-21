import { TextReveal } from "@/components/magicui/text-reveal";
import ConfettiOnScroll from "@/components/ConfettiOnScroll";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { Iphone15ProDemo } from "@/components/Iphone15ProDemo";

export default function Page() {
  return (
    <>
      <TextReveal>
        Congraduation Fiona!!!
      </TextReveal>
      <TextReveal>
        22nd Aug 2025
      </TextReveal>
      <ConfettiOnScroll />

      <Iphone15ProDemo size="w-100">
        <AnimatedListDemo />
      </Iphone15ProDemo>
    </>
  );
}