import { TextReveal } from "@/components/magicui/text-reveal";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { Iphone15ProDemo } from "@/components/Iphone15ProDemo";
import ConfettiOnScroll from "@/components/ConfettiOnScroll";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { Iphone15ProDemo } from "@/components/Iphone15ProDemo";

export default function Page() {
  return (
    <>
      <TextReveal>
        OMG!!! 👩🏻‍🎓Congraduation Fiona!!!🎊
      </TextReveal>
      <TextReveal>
        The day is today.. 🗓️ 22nd Aug 2025
      </TextReveal>
      <ConfettiOnScroll />

      <Iphone15ProDemo size="w-100">
        <AnimatedListDemo />
      </Iphone15ProDemo>
    </>
  );
}