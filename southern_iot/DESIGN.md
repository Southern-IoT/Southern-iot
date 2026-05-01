---
name: Southern IoT
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c6d0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8d909a'
  outline-variant: '#43474f'
  surface-tint: '#a9c7ff'
  primary: '#a9c7ff'
  on-primary: '#073060'
  primary-container: '#002b5b'
  on-primary-container: '#7594ca'
  inverse-primary: '#405f91'
  secondary: '#83cfff'
  on-secondary: '#00344b'
  secondary-container: '#03a8e8'
  on-secondary-container: '#003952'
  tertiary: '#c3c7cb'
  on-tertiary: '#2c3134'
  tertiary-container: '#272c2f'
  on-tertiary-container: '#8f9397'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#264778'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#83cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
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
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style
The brand personality of this design system is anchored in technical precision, unwavering reliability, and forward-thinking innovation. It is designed for an audience of engineers, industrial operators, and tech-forward stakeholders who require clarity in complex data environments.

The visual style combines **Corporate Modern** stability with **Glassmorphism** accents to evoke a sense of high-tech sophistication. Inspired by the clean, ergonomic layouts of premium hardware interfaces, the system emphasizes "Data-as-Art," where information density is balanced by generous whitespace and fluid, rhythmic transitions. The result is an interface that feels responsive, airy, and hyper-functional.

## Colors
The palette is dominated by **Professional Navy**, providing a solid, trustworthy foundation for high-contrast data visualization. **Electric Blue** serves as the primary action color, drawing the eye to interactive elements and representing active connectivity.

This design system utilizes a "Surface-Depth" approach for both Light and Dark modes. In Dark mode, deep navy hues are used instead of pure blacks to maintain a premium, backlit feel. In Light mode, neutral tints of blue-gray are used to reduce eye strain. All semantic colors (Success, Warning, Error) are desaturated slightly to harmonize with the tech-heavy aesthetic while maintaining high visibility.

## Typography
The typography strategy employs a dual-typeface system to balance technicality with legibility. **Space Grotesk** is used for headlines and data callouts, offering a geometric, futuristic rhythm that reflects the IoT's precision. **Inter** is the workhorse for body copy and UI labels, ensuring maximum readability across various screen densities and device types.

Hierarchies are strictly enforced, using `label-caps` for metadata and status indicators to create a distinct visual "code" for technical information. Line heights are kept generous in body text to maintain the clean, airy feel requested in the brand narrative.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** with fixed gutters to ensure consistent alignment of complex technical dashboards. The spacing rhythm is based on a **base-8 scale**, which ensures mathematical harmony across all components and screen sizes.

The layout philosophy prioritizes "modular grouping." Elements related to a specific sensor or device are contained within defined pods with consistent internal padding (`lg` for primary containers). Margin and gutter widths are increased at larger breakpoints to enhance the "clean and modern" Samsung-inspired aesthetic, allowing the UI to breathe even when displaying significant amounts of data.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** and tonal layering rather than traditional heavy shadows. Surfaces use a backdrop blur (12px to 20px) and a subtle 1px inner border (white at 10% opacity) to create a "frosted" look that suggests light passing through hardware components.

For elevation levels:
1.  **Level 0 (Base):** Solid navy or light-gray background.
2.  **Level 1 (Cards/Panels):** Subtle semi-transparent fill with backdrop-filter.
3.  **Level 2 (Popovers/Tooltips):** Increased blur and a faint Electric Blue outer glow to signify active focus and high-priority interaction.

Shadows, when used, are ambient and tinted with the primary navy color to avoid a "muddy" appearance.

## Shapes
The shape language of this design system is **Rounded (Level 2)**, mirroring the ergonomic design of modern consumer electronics. This approach softens the technical nature of the data, making the interface feel more approachable and modern.

- **Standard UI Elements:** 0.5rem (8px) corner radius.
- **Large Product Cards/Containers:** 1rem (16px) corner radius.
- **Interactive Tags/Badges:** 1.5rem (24px) for a soft, pill-shaped appearance.

Buttons and input fields follow the standard 8px radius to maintain a professional, structured alignment within the 8px grid system.

## Components
This design system's components are engineered for dynamic interaction and technical clarity.

*   **Buttons:** Primary buttons feature an Electric Blue gradient with a subtle glow effect on hover. Ghost buttons use 1px borders and translucent fills to maintain the glassmorphic feel.
*   **Sleek Product Cards:** These feature high-resolution hardware imagery, subtle glass backgrounds, and a "spec-row" footer using `label-caps` typography for technical stats.
*   **High-Tech Icons:** Use a custom 2px line weight with "open" terminals and Electric Blue accents for active states.
*   **Inputs:** Minimalist fields with a focus-state that triggers an Electric Blue bottom border and a subtle internal glow.
*   **Dynamic Chips:** Used for status monitoring (e.g., "Online," "Offline"), these chips pulse softly when a status is critical, adding the animated feel of RAKwireless interfaces.
*   **Data Lists:** High-density rows with alternating subtle navy/gray tints, utilizing monospaced-style numeric formatting for sensor values.