import { TextReveal } from "@/components/magicui/text-reveal";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { Iphone15ProDemo } from "@/components/Iphone15ProDemo";
import ConfettiOnScroll from "@/components/ConfettiOnScroll";
import { ScratchImage } from "@/components/ScratchImage";
import { HighlighterSection } from "@/components/HighlighterSection";
import { SpinningTextComponent } from "@/components/SpinningTextComponent";
import { WarpBackground } from "@/components/magicui/warp-background";

export default function Page() {
  return (
    <>
      <WarpBackground />
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
          <SpinningTextComponent />
        </div>
    </>
  );
}