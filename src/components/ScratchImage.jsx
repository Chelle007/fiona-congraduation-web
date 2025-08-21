import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import Image from "next/image";
// TODO: Remember to change placeholder image
import fionaImg from "@/assets/images/fiona.jpg";

export function ScratchImage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ScratchToReveal
                width={300}
                height={300}
                minScratchPercentage={50}
                className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            >
                <Image
                    src={fionaImg}
                    alt="Congratulations Fiona!"
                    className="object-cover w-full h-full"
                />
            </ScratchToReveal>
            <p>Scratch to reveal 👀🎓</p>
        </div>
    );
}
