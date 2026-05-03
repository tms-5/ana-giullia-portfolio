export function ToolIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5 text-mode-accent" fill="none" aria-hidden="true">
      <path d="M7 17V9M12 17V5M17 17v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity={0.95 - (index % 3) * 0.14} />
      <path d="M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
    </svg>
  )
}
