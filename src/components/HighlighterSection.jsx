import { Highlighter } from "./magicui/highlighter";

export function HighlighterSection() {
    return (
        <div className="text-center my-60"> {/* Increased vertical margin */}
            <p className="leading-relaxed text-3xl sm:text-4xl md:text-5xl">
                YUP!!{" "}
                <Highlighter action="underline" color="#FF9800">
                    FIONA TEO
                </Highlighter>{" "}
                has just{" "}
                <Highlighter action="highlight" color="#87CEFA">
                    GRADUATEDD
                </Highlighter>
            </p>
        </div>
    );
}
