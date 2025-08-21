"use client"
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function RickRollButton() {
    const handleClick = () => {
        window.location.href = "https://youtu.be/iik25wqIuFo";
    };

    return (
        <div className="flex items-center justify-center my-24">
            <RainbowButton variant="outline" onClick={handleClick}>
                Special Gift from Desmond 🆒
            </RainbowButton>
        </div>
    );
}
