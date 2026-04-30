# POWERTECH - Industrial DG Solutions Website

A high-end, industrial B2B website for Powertech, specializing in Diesel Generator (DG) set installations, piping, electrical work, mechanical services, and HSD systems.

## Design System

**Heavy-Duty B2B Industrial Theme**
- Dark navy/charcoal base (#1A1E23, #121212)
- High-contrast safety orange accents (#FF6B00)
- Bold, masculine industrial typography
- Sharp corners with metallic gradients
- Clean industrial iconography

## Features

✅ **Industrial B2B Design** - Professional dark theme with orange accents
✅ **Fully Responsive** - Mobile-first design (mobile, tablet, desktop)
✅ **Sticky Navigation** - Active section highlighting with orange underline
✅ **Hero Section** - "ENGINEERED FOR UPTIME" badge with powerful headline
✅ **Stats Strip** - 4 key metrics (500+ DG Installs, 2.5GW Power, 100% Safety, 24/7 Support)
✅ **Services Grid** - 2x3 layout with 5 service cards + 1 orange CTA card
✅ **Why Powertech** - Two-column split with "0.0% Downtime" badge
✅ **Contact Card** - High-contrast dark card with 2-column form
✅ **Working Contact Methods** - Email and WhatsApp integration
✅ **Minimalist Footer** - IND-CONTRACTOR branding with compliance links

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3 (Custom Industrial Theme)
- **Typography**: Inter (Bold, Black weights)
- **Icons**: Heroicons (SVG)

## Contact Information

- **Email**: powertechengineer82@gmail.com
- **WhatsApp**: +91 7083964914

## Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Industrial nav with active states & REQUEST QUOTE button
│   │   ├── Hero.js            # Dark hero with "ENGINEERED FOR UPTIME" badge
│   │   ├── StatsStrip.js      # 4 key metrics strip
│   │   ├── Services.js        # 2x3 grid with 5 services + orange CTA card
│   │   ├── About.js           # "Why Powertech" with 0.0% Downtime badge
│   │   ├── ContactForm.js     # High-contrast contact card (2-column)
│   │   └── Footer.js          # Minimalist footer with compliance links
│   ├── App.js                 # Main app component
│   ├── index.js               # React entry point
│   └── index.css              # Industrial theme CSS with custom utilities
├── package.json
├── tailwind.config.js         # Custom color palette (charcoal, navy, orange)
└── postcss.config.js
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

## Features Breakdown

### 1. Industrial Navigation Bar
- Sticky dark navy header with border
- Logo: Orange "P" box + "POWERTECH" branding
- Center-aligned navigation links (HOME, ABOUT, SERVICES, CONTACT)
- Active section with orange underline
- WhatsApp icon button
- Orange "REQUEST QUOTE" CTA button
- Responsive hamburger menu for mobile

### 2. Hero Section
- Dark industrial background with pattern overlay
- Orange "ENGINEERED FOR UPTIME" badge with pulse animation
- Massive headline: "PRECISION DG SET INSTALLATIONS & ELECTRICAL MASTERY"
- "ELECTRICAL MASTERY" highlighted in orange
- Two CTA buttons: "REQUEST QUOTE" and "VIEW CAPABILITIES"
- Quick stats strip (500+, 2.5GW, 24/7)

### 3. Stats Strip
- Dark grey divider section
- 4 metrics with icons:
  - 500+ DG INSTALLS
  - 2.5GW POWER CAPACITY
  - 100% SAFETY RECORD
  - 24/7 SUPPORT
- Responsive grid: 2 columns (mobile), 4 columns (desktop)

### 4. Services Section (2x3 Grid)
- "OUR CAPABILITIES" badge
- "TECHNICAL SERVICES" headline
- 5 service cards on dark charcoal:
  - DG SET INSTALLATION
  - DG PIPING SYSTEMS
  - ELECTRICAL INTEGRATION
  - MECHANICAL SERVICES
  - HSD FUEL SYSTEMS
- 6th card: Solid orange "NEED A CUSTOM SOLUTION?" CTA
- All cards clickable, scroll to contact form
- Hover effects with border color change

### 5. Why Powertech Section
- Two-column split layout
- Left: Engineer placeholder with floating orange "0.0% Downtime" badge
- Right: "WHY POWERTECH" badge + "ENGINEERED FOR ZERO FAILURE" headline
- 4 bulleted features with mechanical icons:
  - ISO Certified Operations
  - 24/7 Emergency Response
  - Turnkey Solutions
  - 100% Safety Record

### 6. Contact Form (High-Contrast Card)
- "REQUEST A QUOTE" headline
- Two-column layout:
  - Left (2/5): Contact info panel on navy background
    - Email, Phone, Support Hours
    - WhatsApp button
  - Right (3/5): Form on dark grey
    - Name, Company, Email, Phone
    - Service dropdown
    - Project details textarea
    - Orange "SUBMIT REQUEST" button

### 7. Minimalist Footer
- Dark navy background
- 4-column grid: Company, Navigation, Services, Contact
- "IND-CONTRACTOR" branding
- Bottom bar with compliance links (MSDS, Safety Standards, Compliance)
- Copyright notice

## Button Functionality

All buttons are fully functional:

1. **Navbar Buttons**:
   - Logo/Home - Scrolls to top
   - About - Scrolls to about section
   - Services - Scrolls to services section
   - Contact - Scrolls to contact form
   - WhatsApp - Opens WhatsApp chat

2. **Hero Buttons**:
   - Get a Quote - Scrolls to contact form
   - WhatsApp Us - Opens WhatsApp chat

3. **Service Cards**:
   - Entire card is clickable - Scrolls to contact form
   - "Enquire Now" button - Scrolls to contact form

4. **Contact Form Buttons**:
   - Send via Email - Opens email client
   - Send via WhatsApp - Opens WhatsApp with form data

5. **Footer Buttons**:
   - All navigation links work
   - WhatsApp button opens chat
   - Email and phone are clickable links

## Responsive Breakpoints

- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 1024px (2 column layout)
- **Desktop**: > 1024px (3 column layout)

## Design Tokens

### Colors
- **Charcoal**: #121212 (Main background)
- **Navy**: #1A1E23 (Secondary background, header)
- **Dark Grey**: #2A2E33 (Cards, sections)
- **Safety Orange**: #FF6B00 (Primary accent, CTAs)
- **White**: #FFFFFF (Text, borders at 10% opacity)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900
- **Style**: Bold, uppercase tracking for headings
- **Hierarchy**: Black (900) for main headlines, Bold (700) for subheads

### Layout
- **Grid**: 12-column responsive grid
- **Corners**: Sharp (no border-radius)
- **Borders**: 1px solid rgba(255,255,255,0.1)
- **Shadows**: Industrial depth (0 4px 20px rgba(0,0,0,0.5))

### Effects
- **Gradients**: Subtle metallic (rgba(255,255,255,0.05) to transparent)
- **Hover**: Scale transforms, border color changes
- **Transitions**: 200-300ms ease

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Updating Contact Information

Edit the following files to update contact details:

1. **Email**: Search for `powertechengineer82@gmail.com` and replace
2. **Phone/WhatsApp**: Search for `7083964914` and replace

### Modifying Services

Edit `client/src/components/Services.js` to add/remove/modify services.

### Changing Colors

Edit `client/tailwind.config.js` to modify the color scheme.

## License

© 2026 Powertech. All rights reserved.
