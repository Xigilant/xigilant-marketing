const VARIANTS = {
  primary: { hex: '#1C2B1E', x: '#4ADE80', stroke: null },
  ghost:   { hex: 'rgba(255,255,255,0.07)', x: '#4ADE80', stroke: '#4ADE80' },
  reverse: { hex: '#4ADE80', x: '#1C2B1E', stroke: null },
  mono:    { hex: '#1C2B1E', x: '#ffffff', stroke: null },
  forest:  { hex: '#16A34A', x: '#ffffff', stroke: null },
}

export default function HexShield({ size = 28, variant = 'primary' }) {
  const v = VARIANTS[variant] || VARIANTS.primary
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <polygon
        points="32,3 56,17 56,47 32,61 8,47 8,17"
        fill={v.hex}
        stroke={v.stroke || 'none'}
        strokeWidth={v.stroke ? 2.5 : 0}
      />
      <rect x="26" y="11" width="12" height="42" rx="4" fill={v.x} transform="rotate(45 32 32)" />
      <rect x="26" y="11" width="12" height="42" rx="4" fill={v.x} transform="rotate(-45 32 32)" />
    </svg>
  )
}
