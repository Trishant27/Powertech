---
name: Powertech Industrial
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#06182b'
  on-tertiary-container: '#728299'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  button-text:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 40px
  container-max: 1280px
---

## Brand & Style

The brand identity centers on the intersection of rugged industrial reliability and high-precision technology. This design system evokes a sense of "heavy-duty digitalism," where every element feels structural, deliberate, and engineered to last. It is designed for stakeholders in the energy, construction, and infrastructure sectors who value uptime, safety, and expertise.

The aesthetic follows a **Corporate / Modern** style with subtle **Brutalist** undertones—utilizing strong verticality, thick strokes, and high-contrast color blocking. It avoids unnecessary flourishes, favoring functional clarity and a "machined" finish that mirrors the physical equipment used by the company.

## Colors

The palette is anchored in a foundation of **Deep Navy Blues** and **Steel Grays**, creating a high-tech, nocturnal environment that emphasizes stability. 

- **Primary (Deep Navy):** Used for large surface areas and backgrounds to provide a professional, grounded atmosphere.
- **Secondary (Safety Orange):** Reserved strictly for high-visibility actions, critical status alerts, and primary CTAs. This mimics the orange used on safety vests and heavy machinery.
- **Tertiary (Steel Gray):** Used for structural elements like borders, dividers, and secondary iconography.
- **Neutral:** A range of slates and cool grays that handle text hierarchy and surface layering.

The system utilizes a dark default mode to reduce glare in industrial environments and to create a premium, futuristic aesthetic.

## Typography

This design system utilizes **Inter** for its utilitarian precision and exceptional legibility at all scales. The typographic hierarchy is built on bold weights and tight letter-spacing for headlines to mimic architectural signage.

- **Headlines:** Use Extra Bold (800) or Bold (700) weights. They should feel massive and authoritative.
- **Body Text:** Standardized for readability with generous line heights to ensure technical data remains digestible.
- **Labels:** Small-caps are utilized for technical metadata and category tags, reinforcing the "blueprints" and "spec-sheet" feel of the interface.

## Layout & Spacing

The layout is built on a **12-column fixed grid** with a strict 8px base unit. This ensures that every component aligns to a "structural beam," creating a sense of rigid engineering.

- **Gutter & Margins:** Generous 24px gutters provide breathing room between complex data modules.
- **Alignment:** All elements should favor left-alignment to maintain a clear vertical axis of sight, reminiscent of technical manuals.
- **Density:** High information density is encouraged for dashboards, while marketing surfaces should use larger vertical padding to emphasize premium craftsmanship.

## Elevation & Depth

To maintain a "heavy-duty" feel, the design system avoids soft, floating shadows. Instead, depth is conveyed through **Tonal Layering** and **Structural Borders**.

- **Surface Tiers:** Backgrounds use the darkest navy, while interactive containers (cards, panels) use a slightly lighter slate. This "stacked plate" approach feels more physical than ethereal.
- **Hard Borders:** Components use 1px or 2px solid borders in Steel Gray or translucent white to define edges.
- **Active States:** Instead of elevation, active states are indicated by Safety Orange glows or solid fills, suggesting a component has been "engaged" or "powered on."

## Shapes

The shape language is primarily linear and geometric. This design system uses a **Soft (0.25rem)** roundedness level to take the "edge" off the industrial aesthetic without making it feel bubbly or consumer-grade.

- **Containers:** Cards and modules use the base roundedness.
- **Interactive Elements:** Buttons and inputs follow the same radius for consistency.
- **Technical Accents:** Chamfered corners (45-degree cuts) can be used on decorative elements or specialty icons to reinforce the machining metaphor.

## Components

### Buttons
Primary buttons are solid Safety Orange with black or deep navy text, using bold weights. They should feel like physical "kill switches" or "start" buttons. Secondary buttons use a heavy 2px Steel Gray border.

### Cards
Cards are designed as "Modules." They feature a solid background color one shade lighter than the page background, with a subtle 1px border. Technical cards should include a "Label-caps" header to categorize the data within.

### Input Fields
Inputs are dark-themed with a subtle "Steel" bottom border or full outline. The focus state must use a Safety Orange border to ensure the user knows exactly where they are currently interacting.

### Chips & Status Indicators
Status chips use high-contrast backgrounds: "Active" (Green-Cyan), "Fault" (Safety Orange), and "Offline" (Steel Gray). They should look like physical LED indicators on a control panel.

### Data Displays
For telemetry and metrics, use slightly larger font weights. Consider integrating small sparklines with a "high-tech" neon-blue glow to represent live streaming data.