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
      
        <Iphone15ProDemo size="w-100">
          <AnimatedListDemo />
        </Iphone15ProDemo>

        <RickRollButton />
        <SpinningTextComponent />
      <Footer />
      </div>
    </>
  );
}