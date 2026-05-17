# Smart Attendance Management System — Design Brief

## Aesthetic
Premium glassmorphism with deep navy-indigo palette. Frosted glass cards, subtle backdrop blur, refined academic tone. Dark mode dominant, light mode accessible.

## Color Palette
| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Primary (Navy) | 0.35 0.12 260 | 0.5 0.18 260 | Foundational trust, primary actions |
| Secondary (Indigo) | 0.4 0.15 270 | 0.55 0.2 270 | Depth, secondary UI |
| Accent-Student (Teal) | 0.65 0.15 200 | 0.7 0.2 200 | QR scan, attendance check-in |
| Accent-Teacher (Amber) | 0.65 0.2 60 | 0.7 0.22 60 | Teacher role, authority actions |
| Destructive (Red) | 0.55 0.22 25 | 0.65 0.19 22 | Errors, deletions |

## Typography
| Layer | Font | Usage |
| --- | --- | --- |
| Display | Space Grotesk | Headlines, dashboard titles, role labels |
| Body | Inter | Body text, descriptions, form fields |
| Mono | Geist Mono | Attendance codes, timestamps, data values |

## Structural Zones
| Zone | Treatment | Depth |
| --- | --- | --- |
| Header | Gradient navy bar with accent line | Elevated, dark |
| Sidebar | Glass effect, subtle border, soft background | Elevated |
| Cards | Glassmorphism: 10% white/backdrop blur, frosted border | Mid-level |
| Main Background | Neutral grey with blue undertone | Base |
| Modals | Semi-transparent overlay with glass card | Top |

## Components & Patterns
- **Dashboard Cards**: Glass treatment with gradient accent overlay, shadow-glass for depth
- **Buttons**: Primary (navy), Secondary (muted), Role-specific (teal/amber accent)
- **Forms**: Subtle input borders, glass container backgrounds
- **QR Display**: Large, centered, pulsing glow on active scan
- **Charts**: Custom OKLCH palette (teal, amber, indigo, red, cyan) for Recharts

## Motion & Micro-interactions
- Fade-in on page load, slide-up for card entrance (0.3–0.4s)
- Pulse-glow on QR code (2s infinite), smooth transitions (0.3s cubic-bezier)
- Role toggle: Quick accent color shift from teal to amber

## Signature Detail
Glassmorphism with academic precision — frosted glass borders and backdrop blur create depth without clutter. Dual accent colors (teal/amber) visually distinguish student vs teacher without layout change. Chart palette reflects attendance sentiment (teal = success, amber = authority).

## Responsive Strategy
Mobile-first grid: single column on sm, 2-col sidebar+content on md+. Sidebar collapses to icon-only on md breakpoint. Cards stack on mobile, grid on tablet+.

## Constraints
- No harsh shadows; use inset glass highlights and soft backdrop blur
- No animation longer than 0.4s for entrance, 2s for looping micro-interactions
- Always maintain AA contrast between text and glass backgrounds
- QR code area is always center-focal; charts and stats are secondary
