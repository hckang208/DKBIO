# Design System Strategy: Molecular Harmony

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Lab-Grown Sanctuary."** 

We are moving away from the generic, boxy corporate aesthetic and toward a "High-End Editorial" experience that bridges the gap between clinical precision and organic fluidity. The design must feel like a premium scientific journal—authoritative yet breathable. We break the standard "template" look through **intentional asymmetry**, where content is offset to create a sense of movement, and **tonal layering**, which replaces harsh structural lines with soft, environmental transitions.

By blending the deep, authoritative blues of the DAMY group with the vibrant, life-affirming greens of biotechnology, we create a visual language of "Green Chemistry." This isn't just about chemicals; it’s about the art of sourcing and the science of nature.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of `primary` (#00193c) and the vitality of `secondary` (#096c4b). To maintain a premium, editorial feel, we use a sophisticated light-mode execution with high-contrast accents.

### The "No-Line" Rule
Traditional borders are forbidden for sectioning. To separate content, designers must use:
*   **Background Shifts:** Transition from `surface` (#f9f9fa) to `surface-container-low` (#f3f3f4) to define a new content area.
*   **Negative Space:** Use generous padding (minimum 80px-120px between sections) to create clear mental breaks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
*   **Base:** `surface` (#f9f9fa) for the main canvas.
*   **Level 1 (Subtle Inset):** `surface-container` (#edeeef) for large background blocks.
*   **Level 2 (The Floating Card):** `surface-container-lowest` (#ffffff) for interactive elements like cards or modules. This creates a natural "lift" without relying on heavy shadows.

### The "Glass & Gradient" Rule
To evoke "Scientific Precision," use glassmorphism for floating navigation and detail overlays:
*   **Glass Effect:** Use `surface` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For Hero sections and CTAs, use a subtle radial gradient: `primary` (#00193c) transitioning into `primary-container` (#002d62) at a 45-degree angle. This prevents the "flat" look and adds a sense of microscopic depth.

---

## 3. Typography
We utilize a dual-font system to balance technical authority with modern accessibility.

*   **Display & Headline (Manrope):** Chosen for its geometric precision and modern proportions. `display-lg` (3.5rem) should be used with tight letter-spacing (-0.02em) to create an editorial, high-fashion impact.
*   **Body & Labels (Inter):** Chosen for its extreme readability in data-heavy biotechnology contexts.
*   **Hierarchy as Identity:** Use `title-lg` (Inter, 1.375rem) in `secondary` (#096c4b) for sub-headers to inject "Green Chemistry" into every page. Use `label-sm` (Inter, 0.6875rem) with all-caps and increased tracking (0.1em) for technical data points to mimic lab labeling.

---

## 4. Elevation & Depth
Depth is achieved through "Tonal Layering" rather than structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, sophisticated edge that feels like a physical object.
*   **Ambient Shadows:** For high-priority floating elements (Modals/Dropdowns), use: `box-shadow: 0 20px 40px rgba(0, 25, 60, 0.05)`. Note the use of `primary` (blue) in the shadow color rather than black, which maintains the "Trust" color profile even in the shadows.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use `outline-variant` (#c4c6d1) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background, `on-primary` text. No border. `rounded-md` (0.375rem). Use a subtle scale-up interaction (1.02x) on hover.
*   **Secondary (The Bio-Action):** `secondary-container` background with `on-secondary-container` text. This is used for "Green" initiatives or sample requests.
*   **Tertiary:** Transparent background with `primary` text and a `2px` underline that expands from center on hover.

### Cards & Data Modules
*   **Rule:** Forbid all divider lines.
*   **Styling:** Use `surface-container-lowest` for the card body. Use `secondary-fixed` (#9ff4c9) as a small vertical "accent bar" (4px wide) on the left side of cards to highlight innovative products.

### Input Fields
*   **Style:** Underline-only or subtle `surface-container` fills.
*   **States:** On focus, the label (Inter, `label-md`) should shift to `secondary` (#096c4b) to indicate "Life/Activity."

### Signature Component: The "Bio-Badge"
Use `tertiary-container` (#003532) for small badges indicating ingredient purity or sourcing origin. These should use `rounded-full` for an organic, pebble-like feel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts where text is left-aligned and imagery is offset to the right, bleeding off the screen.
*   **Do** use high-resolution photography of raw ingredients (roots, leaves, minerals) with "Macro-Focus"—blurred backgrounds and extreme detail on the subject.
*   **Do** use `on-surface-variant` (#43474f) for long-form body text to reduce eye strain and maintain a premium, softer contrast.

### Don't:
*   **Don't** use 100% black (#000000). Always use `primary` for the darkest values to maintain the "Trust" identity.
*   **Don't** use hard 90-degree corners for containers. Stick to the `md` (0.375rem) or `lg` (0.5rem) scale to suggest natural harmony.
*   **Don't** use standard "icon-plus-text" grids. Try varied icon sizes and placement to create a more curated, less "SaaS-like" experience.