"use client";
import React, { useEffect, useRef } from "react";
import { Confetti } from "@/components/magicui/confetti"; // your component

export default function ConfettiOnScroll() {
    const ref = useRef(null);
    const confettiRef = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        confettiRef.current?.fire(); // fire confetti 🎉
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref}>
            <Confetti
                ref={confettiRef}
                style={{
                    position: "fixed",   // cover entire viewport
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100dvh",   // dynamic viewport height for mobile
                    pointerEvents: "none",
                    zIndex: 50,         // ensure it’s above everything
                }}
            />
        </div>
    );
}
