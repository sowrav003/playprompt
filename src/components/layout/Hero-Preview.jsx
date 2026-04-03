import Image from "next/image";

export default function HeroPreview({
  src = "/dashboard-preview.png",
  alt = "Product Preview",
}) {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 p-4">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-120 h-120 bg-primary/20 blur-3xl rounded-full" />
      </div>
      <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden transition duration-300 hover:scale-[1.01]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
