import { SpinningText } from "@/components/magicui/spinning-text";

export function SpinningTextBasic() {
    return (
        <div>
            <SpinningText reverse className="text-4xl" duration={4} radius={6}>
                eat • work • repeat •
            </SpinningText>
        </div>
    );
}
