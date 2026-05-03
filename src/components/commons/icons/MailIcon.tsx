export function MailIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
