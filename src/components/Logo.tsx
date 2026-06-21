import { Leaf } from "lucide-react";

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent shadow-soft">
        <Leaf className="h-5 w-5 text-accent-foreground" strokeWidth={2.4} />
      </span>
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
