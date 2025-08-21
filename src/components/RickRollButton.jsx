"use client"
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function RickRollButton() {
    const handleClick = () => {
        window.open("https://youtu.be/iik25wqIuFo", "_blank");
    };

    return (
        <div className="flex items-center justify-center my-24">
            <RainbowButton variant="outline" onClick={handleClick}>
                Special Gift from Desmond 🆒
            </RainbowButton>
        </div>
    );
}
