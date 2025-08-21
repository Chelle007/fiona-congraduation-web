import { TextReveal } from "@/components/magicui/text-reveal";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { Iphone15ProDemo } from "@/components/Iphone15ProDemo";
import ConfettiOnScroll from "@/components/ConfettiOnScroll";
import { ScratchImage } from "@/components/ScratchImage";
import { HighlighterSection } from "@/components/HighlighterSection";
import { SpinningTextComponent } from "@/components/SpinningTextComponent";
import { RickRollButton } from "@/components/RickRollButton";
import Footer from "@/components/Footer";
import { WarpBackground } from "@/components/magicui/warp-background";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Ripple } from "@/components/magicui/ripple";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Page() {
  return (
    <>
      <Ripple />
      <div className="relative z-10">
        <TextReveal>
          OMG!!! 👩🏻‍🎓Congraduation Fiona!!!🎊
        </TextReveal>
        <ConfettiOnScroll />
        <TextReveal>
          The day is today.. 🗓️ 22nd Aug 2025
        </TextReveal>
        <ConfettiOnScroll />

        <ScratchImage />

        <HighlighterSection />
        <div className="flex flex-col items-center justify-center p-8">
          <TypingAnimation>{"PING! 10+ notifications 🔔"}</TypingAnimation>
        </div>
        <Iphone15ProDemo size="w-88">
          <AnimatedListDemo />
        </Iphone15ProDemo>

        <RickRollButton />

        <SpinningTextComponent />

        <Footer />
        </div>
    </>
  );
}