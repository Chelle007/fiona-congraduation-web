import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SpinningText } from "@/components/magicui/spinning-text";

export function SpinningTextComponent() {
    return (
        <div className="flex flex-col items-center justify-center my-24 p-8">
            <TypingAnimation>Hence, Welcome to the ✨WORKFORCE✨</TypingAnimation>

            <div className="my-48">
                <SpinningText reverse className="text-4xl" duration={10} radius={6}>
                    eat • work • repeat •
                </SpinningText>
            </div>
        </div>
    );
}
