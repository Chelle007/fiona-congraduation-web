import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo({ children, size = "w-72" }) {
  return (
    <div className={`relative ${size} mx-auto`}>
      <Iphone15Pro className="w-full h-auto" />
      {/* Scrollable overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start p-10 pt-17 overflow-y-auto rounded-3xl">
        {children}
      </div>
    </div>
  );
}
