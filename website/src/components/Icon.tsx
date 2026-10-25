// Simple 24×24 stroke icons drawn for this site.
const paths = {
  timer: 'M12 8v4l2.5 2.5M9 2h6M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
  calendar: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6ZM4 10h16M8 2v4M16 2v4',
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  tap: 'M9 11V5a2 2 0 1 1 4 0v5l4.4 1.1a2 2 0 0 1 1.5 2.2L18 20H9.5L6 15.5a1.8 1.8 0 0 1 2.7-2.4L9 13.5',
  battery: 'M3 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8ZM22 11v2M11.5 8.5 9 12h4l-2.5 3.5',
  shield: 'M12 3 4.5 6v5.5c0 4.5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-5 7.5-9.5V6L12 3ZM9 12l2 2 4-4',
  phone: 'M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4ZM11 18h2',
  chart: 'M4 20h16M7 16v-4M12 16V8M17 16v-7',
  lock: 'M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8ZM8.5 10V7.5a3.5 3.5 0 0 1 7 0V10',
  key: 'M14.5 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.2 12.7 20 19.5M17.5 17l2-2',
  laptop: 'M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9H5V6ZM3 18h18',
  cable: 'M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0V7ZM12 16v5',
  filter: 'M12 3 4.5 6v5.5c0 4.5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-5 7.5-9.5V6L12 3ZM9.5 9.5l5 5M14.5 9.5l-5 5',
  privacy: 'M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6ZM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 4l16 16',
  check: 'M5 12.5 10 17 19 7',
  chevron: 'M6 9l6 6 6-6',
} as const

export type IconName = keyof typeof paths

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className ?? 'icon'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
