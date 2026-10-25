// Placeholder mark: three stacked blocks, for "builder". Replace when a real logo exists.
export function Logo() {
  return (
    <svg className="logo" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <rect x="8" y="19" width="16" height="5" rx="1.5" fill="var(--accent-text)" />
      <rect x="10.5" y="13" width="11" height="5" rx="1.5" fill="var(--accent-text)" opacity="0.8" />
      <rect x="13" y="7" width="6" height="5" rx="1.5" fill="var(--accent-text)" opacity="0.6" />
    </svg>
  )
}
