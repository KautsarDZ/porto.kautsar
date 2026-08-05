---
name: Connectivity & Precision
colors:
  surface: '#f5faff'
  surface-dim: '#d5dbdf'
  surface-bright: '#f5faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f9'
  surface-container: '#e9eef3'
  surface-container-high: '#e4e9ee'
  surface-container-highest: '#dee3e8'
  on-surface: '#171c20'
  on-surface-variant: '#43474e'
  inverse-surface: '#2c3135'
  inverse-on-surface: '#ecf1f6'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#555f71'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f6'
  on-secondary-container: '#596376'
  tertiary: '#002625'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d3c'
  on-tertiary-container: '#4cadab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#d9e3f9'
  secondary-fixed-dim: '#bdc7dc'
  on-secondary-fixed: '#121c2c'
  on-secondary-fixed-variant: '#3d4759'
  tertiary-fixed: '#94f2f0'
  tertiary-fixed-dim: '#77d6d3'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504e'
  background: '#f5faff'
  on-background: '#171c20'
  surface-variant: '#dee3e8'
typography:
  display:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  gutter: 24px
  margin-mobile: 16px
  container-max: 1140px
---

## Brand & Style

The design system is engineered for a **Network Engineer & IT Support portfolio**, where the primary objectives are demonstrating technical reliability, architectural precision, and operational stability. The brand personality is **Technical, Disciplined, and Methodical**, moving away from "creative flair" toward a "systems-thinking" aesthetic.

The chosen design style is **Minimalist / Corporate Modern**. This approach utilizes heavy whitespace to allow complex technical information to breathe, while maintaining a strict information hierarchy. The visual language takes subtle cues from networking topology—using nodes, clean lines, and structured grids—to evoke the feeling of a well-maintained network infrastructure without visual clutter.

**Emotional Response:** 
The UI should evoke a sense of **calm authority (Kalem)**. Visitors should feel they are in the hands of a professional who values uptime, security, and structured problem-solving.

## Colors

The color strategy, "Kalem," utilizes a palette of deep, stable blues and grounding grays to reflect the seriousness of IT infrastructure.

- **Primary (Deep Navy):** Reserved for high-level structural elements like the navigation bar, primary headings, and critical "hero" moments. It represents the foundation of the network.
- **Secondary (Slate Blue):** Used for sub-headings and supporting UI elements to provide contrast without the harshness of pure black.
- **Accent (Professional Teal):** Used sparingly for interactive states, progress indicators, "current status" badges, and specific networking motifs (nodes/lines).
- **Neutral (Soft Gray):** The primary background color for section staggering, providing a soft alternative to white that reduces eye strain.

**Color Usage Rules:**
- Avoid all gradients; use solid fills to maintain a clean, "diagrammatic" look.
- Use **surface** (#FFFFFF) for cards and main content areas to create a clear "layered" effect against the neutral background.

## Typography

This system uses a paired typographic approach. **Be Vietnam Pro** is used for headlines to provide a clean, geometric, and modern engineering feel. **Inter** is retained for body text and labels to leverage its technical legibility and neutral personality.

**Hierarchy Rules:**
- **Display/Headline:** Uses Be Vietnam Pro for major titles. Tighten letter spacing slightly for a more "designed" feel. The geometric nature of the font reinforces the "architectural" theme.
- **Body:** Used for narrative descriptions. Inter's tall x-height ensures readability for technical protocols and lists.
- **Labels:** Used for metadata (dates, locations, tool names). The `label-sm` style should be used for category tags, set in uppercase to differentiate from body text.
- **Technical Content:** For specific commands or protocols (e.g., "BGP," "OSPF"), use the `label-md` weight to give them a distinct visual weight.

## Layout & Spacing

The layout is built on a **Fixed Grid** model for desktop, centered within the viewport to maintain a professional "document" feel. 

**Grid & Rhythm:**
- **Desktop:** 12-column grid with a 1140px max-width. Use 24px gutters.
- **Mobile:** Single column with 16px side margins.
- **Rhythm:** Utilize an 8px spacing scale. Vertical spacing between different sections should be `xxl` (80px), while spacing between items within a section should be `xl` (48px).

**Content Alignment:**
Align most content to the left to mirror technical documentation. Use "Technical Nodes" (small 8px dots) in the left margin to connect experience items, creating a vertical "connectivity line" that guides the eye through the timeline.

## Elevation & Depth

The system uses a **Low-Contrast Outline** and **Tonal Layering** approach to convey depth, avoiding heavy shadows to keep the interface looking clean and "flat-plus."

- **Level 0 (Background):** `neutral_color_hex` (#EDF2F7).
- **Level 1 (Cards/Surface):** White (#FFFFFF) with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Interactive/Active):** When a card or list item is hovered, apply a very subtle, diffused shadow: `0 4px 12px rgba(26, 54, 93, 0.05)` and a slightly darker border.

## Shapes

The shape language is **Rounded (0.5rem / 8px)**. This updated rounding suggests a balance between the rigidity of technical systems and a modern, approachable software aesthetic.

- **Primary Elements:** Buttons and input fields use 8px corners (DEFAULT).
- **Secondary Elements:** Technology "chips" or "tags" use `rounded-lg` (16px) to make them look distinct and modular.
- **Icons:** Use linear, 2px stroke icons with square caps to match the technical theme.

## Components

### Buttons
- **Primary:** Deep Navy (#1A365D) background, white text. No shadow. 8px radius.
- **Secondary:** Transparent background, Slate Blue (#2D3748) border and text.
- **Hover State:** Shift background color by 5-10% or add the accent Teal as a bottom border.

### Technology Chips
Small, modular containers for skills (e.g., "Wireshark," "RF Planner").
- Background: #FFFFFF.
- Border: 1px solid #E2E8F0.
- Radius: 16px (`rounded-lg`).
- Text: `label-sm` (uppercase, bold).
- Leading element: A tiny dot in the Accent Teal (#319795) to represent a network node.

### Timeline / Experience Lists
Vertical line (1px, Slate Blue) running down the left side. Each entry starts with a 12px circular node. "Current" roles use the Accent Teal for the node; past roles use a hollow Slate Blue circle.

### Cards
Used for Projects and Education.
- White background, 1px border, 8px corner radius.
- Padding: 24px (lg).
- Include a "Connectivity" icon in the top right corner to link to external assets.

### Input Fields
- Flat appearance. 1px border (#E2E8F0). 8px radius.
- Focus state: Border changes to Accent Teal with a 2px outer "glow" using the same color at 10% opacity.

### Animations
- **Section Entrance:** Fade-in with a subtle slide-up (20px) over 400ms.
- **Hover Transitions:** 200ms ease-in-out for all color/border changes.