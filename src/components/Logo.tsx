export function Logo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 12v6a3 3 0 0 0 6 0V6a3 3 0 0 1 6 0v6" />
      <circle cx="9" cy="18" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
