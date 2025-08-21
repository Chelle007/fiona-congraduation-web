import { Highlighter } from "@/components/magicui/highlighter";

export function HighlighterSection() {
    return (
        <div className="text-center my-86">
            <p className="leading-relaxed">
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
