import logoAsset from "@/assets/umodoro-logo.png.asset.json";

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoAsset.url}
        alt="Umodoro Biotechnology logo"
        className="h-9 w-9 object-contain"
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-700 tracking-tight">Umodoro</span>
          <span className="text-[0.6rem] font-600 uppercase tracking-[0.22em] text-muted-foreground">
            Biotechnology
          </span>
        </span>
      )}
    </span>
  );
}
