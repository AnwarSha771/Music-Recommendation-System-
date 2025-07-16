
:root {
  /* Colors */
  --color-background: rgb(249, 250, 252);
  --color-surface: rgba(255, 255, 253, 1);
  --color-text: rgba(19, 52, 59, 1);
  --color-text-secondary: rgba(98, 108, 113, 1);
  --color-primary: rgba(33, 128, 141, 1);
  --color-primary-hover: rgba(29, 116, 128, 1);
  --color-primary-active: rgba(26, 104, 115, 1);
  --color-secondary: rgba(94, 82, 64, 0.12);
  --color-secondary-hover: rgba(94, 82, 64, 0.2);
  --color-secondary-active: rgba(94, 82, 64, 0.25);
  --color-border: rgba(94, 82, 64, 0.2);
  --color-btn-primary-text: rgba(252, 252, 249, 1);
  --color-card-border: rgba(94, 82, 64, 0.12);
  --color-card-border-inner: rgba(94, 82, 64, 0.12);
  --color-error: rgba(192, 21, 47, 1);
  --color-success: rgba(33, 128, 141, 1);
  --color-warning: rgba(168, 75, 47, 1);
  --color-info: rgba(98, 108, 113, 1);
  --color-focus-ring: rgba(33, 128, 141, 0.4);
  --color-select-caret: rgba(19, 52, 59, 0.8);

  /* Common style patterns */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for opacity control */
  --color-success-rgb: 33, 128, 141;
  --color-error-rgb: 192, 21, 47;
  --color-warning-rgb: 168, 75, 47;
  --color-info-rgb: 98, 108, 113;

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
    0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

/* Dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: rgba(31, 33, 33, 1);
    --color-surface: rgba(38, 40, 40, 1);
    --color-text: rgba(245, 245, 245, 1);
    --color-text-secondary: rgba(167, 169, 169, 0.7);
    --color-primary: rgba(50, 184, 198, 1);
    --color-primary-hover: rgba(45, 166, 178, 1);
    --color-primary-active: rgba(41, 150, 161, 1);
    --color-secondary: rgba(119, 124, 124, 0.15);
    --color-secondary-hover: rgba(119, 124, 124, 0.25);
    --color-secondary-active: rgba(119, 124, 124, 0.3);
    --color-border: rgba(119, 124, 124, 0.3);
    --color-error: rgba(255, 84, 89, 1);
    --color-success: rgba(50, 184, 198, 1);
    --color-warning: rgba(230, 129, 97, 1);
    --color-info: rgba(167, 169, 169, 1);
    --color-focus-ring: rgba(50, 184, 198, 0.4);
    --color-btn-primary-text: rgba(19, 52, 59, 1);
    --color-card-border: rgba(119, 124, 124, 0.2);
    --color-card-border-inner: rgba(119, 124, 124, 0.15);
    --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    --button-border-secondary: rgba(119, 124, 124, 0.2);
    --color-border-secondary: rgba(119, 124, 124, 0.2);
    --color-select-caret: rgba(245, 245, 245, 0.8);

    /* Common style patterns - updated for dark mode */
    --focus-ring: 0 0 0 3px var(--color-focus-ring);
    --focus-outline: 2px solid var(--color-primary);
    --status-bg-opacity: 0.15;
    --status-border-opacity: 0.25;
    --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    /* RGB versions for dark mode */
    --color-success-rgb: 50, 184, 198;
    --color-error-rgb: 255, 84, 89;
    --color-warning-rgb: 230, 129, 97;
    --color-info-rgb: 167, 169, 169;
  }
}

/* Data attribute for manual theme switching */
[data-color-scheme="dark"] {
  --color-background: rgba(31, 33, 33, 1);
  --color-surface: rgba(38, 40, 40, 1);
  --color-text: rgba(245, 245, 245, 1);
  --color-text-secondary: rgba(167, 169, 169, 0.7);
  --color-primary: rgba(50, 184, 198, 1);
  --color-primary-hover: rgba(45, 166, 178, 1);
  --color-primary-active: rgba(41, 150, 161, 1);
  --color-secondary: rgba(119, 124, 124, 0.15);
  --color-secondary-hover: rgba(119, 124, 124, 0.25);
  --color-secondary-active: rgba(119, 124, 124, 0.3);
  --color-border: rgba(119, 124, 124, 0.3);
  --color-error: rgba(255, 84, 89, 1);
  --color-success: rgba(50, 184, 198, 1);
  --color-warning: rgba(230, 129, 97, 1);
  --color-info: rgba(167, 169, 169, 1);
  --color-focus-ring: rgba(50, 184, 198, 0.4);
  --color-btn-primary-text: rgba(19, 52, 59, 1);
  --color-card-border: rgba(119, 124, 124, 0.15);
  --color-card-border-inner: rgba(119, 124, 124, 0.15);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  --color-border-secondary: rgba(119, 124, 124, 0.2);
  --color-select-caret: rgba(245, 245, 245, 0.8);

  /* Common style patterns - updated for dark mode */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for dark mode */
  --color-success-rgb: 50, 184, 198;
  --color-error-rgb: 255, 84, 89;
  --color-warning-rgb: 230, 129, 97;
  --color-info-rgb: 167, 169, 169;
}

[data-color-scheme="light"] {
  --color-background: rgba(252, 252, 249, 1);
  --color-surface: rgba(255, 255, 253, 1);
  --color-text: rgba(19, 52, 59, 1);
  --color-text-secondary: rgba(98, 108, 113, 1);
  --color-primary: rgba(33, 128, 141, 1);
  --color-primary-hover: rgba(29, 116, 128, 1);
  --color-primary-active: rgba(26, 104, 115, 1);
  --color-secondary: rgba(94, 82, 64, 0.12);
  --color-secondary-hover: rgba(94, 82, 64, 0.2);
  --color-secondary-active: rgba(94, 82, 64, 0.25);
  --color-border: rgba(94, 82, 64, 0.2);
  --color-btn-primary-text: rgba(252, 252, 249, 1);
  --color-card-border: rgba(94, 82, 64, 0.12);
  --color-card-border-inner: rgba(94, 82, 64, 0.12);
  --color-error: rgba(192, 21, 47, 1);
  --color-success: rgba(33, 128, 141, 1);
  --color-warning: rgba(168, 75, 47, 1);
  --color-info: rgba(98, 108, 113, 1);
  --color-focus-ring: rgba(33, 128, 141, 0.4);

  /* RGB versions for light mode */
  --color-success-rgb: 33, 128, 141;
  --color-error-rgb: 192, 21, 47;
  --color-warning-rgb: 168, 75, 47;
  --color-info-rgb: 98, 108, 113;
}

/* Base styles */
html {
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
}

h1 {
  font-size: var(--font-size-4xl);
}
h2 {
  font-size: var(--font-size-3xl);
}
h3 {
  font-size: var(--font-size-2xl);
}
h4 {
  font-size: var(--font-size-xl);
}
h5 {
  font-size: var(--font-size-lg);
}
h6 {
  font-size: var(--font-size-md);
}

p {
  margin: 0 0 var(--space-16) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

code,
pre {
  font-family: var(--font-family-mono);
  font-size: calc(var(--font-size-base) * 0.95);
  background-color: var(--color-secondary);
  border-radius: var(--radius-sm);
}

code {
  padding: var(--space-1) var(--space-4);
}

pre {
  padding: var(--space-16);
  margin: var(--space-16) 0;
  overflow: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background: none;
  padding: 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-standard);
  border: none;
  text-decoration: none;
  position: relative;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-btn-primary-text);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--primary:active {
  background: var(--color-primary-active);
}

.btn--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.btn--secondary:hover {
  background: var(--color-secondary-hover);
}

.btn--secondary:active {
  background: var(--color-secondary-active);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
}

.btn--lg {
  padding: var(--space-10) var(--space-20);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
}

.btn--full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: var(--space-8) var(--space-12);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  transition: border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard);
}

textarea.form-control {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}

select.form-control {
  padding: var(--space-8) var(--space-12);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: var(--select-caret-light);
  background-repeat: no-repeat;
  background-position: right var(--space-12) center;
  background-size: 16px;
  padding-right: var(--space-32);
}

/* Add a dark mode specific caret */
@media (prefers-color-scheme: dark) {
  select.form-control {
    background-image: var(--select-caret-dark);
  }
}

/* Also handle data-color-scheme */
[data-color-scheme="dark"] select.form-control {
  background-image: var(--select-caret-dark);
}

[data-color-scheme="light"] select.form-control {
  background-image: var(--select-caret-light);
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: var(--focus-outline);
}

.form-label {
  display: block;
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.form-group {
  margin-bottom: var(--space-16);
}

/* Card component */
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-card-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__body {
  padding: var(--space-16);
}

.card__header,
.card__footer {
  padding: var(--space-16);
  border-bottom: 1px solid var(--color-card-border-inner);
}

/* Status indicators - simplified with CSS variables */
.status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.status--success {
  background-color: rgba(
    var(--color-success-rgb, 33, 128, 141),
    var(--status-bg-opacity)
  );
  color: var(--color-success);
  border: 1px solid
    rgba(var(--color-success-rgb, 33, 128, 141), var(--status-border-opacity));
}

.status--error {
  background-color: rgba(
    var(--color-error-rgb, 192, 21, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-error);
  border: 1px solid
    rgba(var(--color-error-rgb, 192, 21, 47), var(--status-border-opacity));
}

.status--warning {
  background-color: rgba(
    var(--color-warning-rgb, 168, 75, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-warning);
  border: 1px solid
    rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-border-opacity));
}

.status--info {
  background-color: rgba(
    var(--color-info-rgb, 98, 108, 113),
    var(--status-bg-opacity)
  );
  color: var(--color-info);
  border: 1px solid
    rgba(var(--color-info-rgb, 98, 108, 113), var(--status-border-opacity));
}

/* Container layout */
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--space-16);
  padding-left: var(--space-16);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
  }
}
@media (min-width: 768px) {
  .container {
    max-width: var(--container-md);
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: var(--container-lg);
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-xl);
  }
}

/* Utility classes */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: var(--space-4);
}
.gap-8 {
  gap: var(--space-8);
}
.gap-16 {
  gap: var(--space-16);
}

.m-0 {
  margin: 0;
}
.mt-8 {
  margin-top: var(--space-8);
}
.mb-8 {
  margin-bottom: var(--space-8);
}
.mx-8 {
  margin-left: var(--space-8);
  margin-right: var(--space-8);
}
.my-8 {
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
}

.p-0 {
  padding: 0;
}
.py-8 {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
.px-8 {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
.py-16 {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
.px-16 {
  padding-left: var(--space-16);
  padding-right: var(--space-16);
}

.block {
  display: block;
}
.hidden {
  display: none;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:focus-visible {
  outline: var(--focus-outline);
  outline-offset: 2px;
}

/* Dark mode specifics */
[data-color-scheme="dark"] .btn--outline {
  border: 1px solid var(--color-border-secondary);
}

@font-face {
  font-family: 'FKGroteskNeue';
  src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2')
    format('woff2');
}

/* END PERPLEXITY DESIGN SYSTEM */
/* Music Recommendation System - Dark Theme with Purple/Blue Accents */

:root {
  /* Override design system colors for music theme */
  --music-primary: #8B5CF6;
  --music-primary-hover: #7C3AED;
  --music-secondary: #3B82F6;
  --music-accent: #10B981;
  --music-background: #0F172A;
  --music-surface: #1E293B;
  --music-card: #334155;
  --music-text: #F1F5F9;
  --music-text-secondary: #94A3B8;
  --music-border: #475569;
  --music-hover: #64748B;
}

body {
  background: var(--music-background);
  color: var(--music-text);
  font-family: var(--font-family-base);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: var(--music-surface);
  border-bottom: 1px solid var(--music-border);
  padding: var(--space-16) var(--space-24);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.app-title {
  color: var(--music-primary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin: 0;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: var(--space-16);
}

.avatar-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--music-primary), var(--music-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
}

/* Main Layout */
.main-layout {
  display: flex;
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* Sidebar */
.sidebar {
  width: 320px;
  background: var(--music-surface);
  border-right: 1px solid var(--music-border);
  padding: var(--space-24);
  overflow-y: auto;
  max-height: calc(100vh - 80px);
}

.user-profile {
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: var(--space-16);
}

.avatar-large {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--music-primary), var(--music-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
}

.profile-info h3 {
  margin: 0;
  color: var(--music-text);
  font-size: var(--font-size-xl);
}

.profile-subtitle {
  color: var(--music-text-secondary);
  margin: var(--space-4) 0 0 0;
  font-size: var(--font-size-sm);
}

.profile-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.profile-section h4 {
  color: var(--music-text);
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}

.genre-selector {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
}

.genre-tag {
  position: relative;
  cursor: pointer;
}

.genre-tag input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.genre-tag span {
  display: inline-block;
  padding: var(--space-6) var(--space-12);
  background: var(--music-card);
  border: 1px solid var(--music-border);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  color: var(--music-text-secondary);
  transition: all var(--duration-fast) var(--ease-standard);
}

.genre-tag input:checked + span {
  background: var(--music-primary);
  color: white;
  border-color: var(--music-primary);
}

.genre-tag:hover span {
  border-color: var(--music-primary);
}

.mood-selector {
  background: var(--music-card);
  border: 1px solid var(--music-border);
  color: var(--music-text);
}

.mood-selector:focus {
  border-color: var(--music-primary);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

.recent-songs {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.recent-song {
  display: flex;
  align-items: center;
  gap: var(--space-12);
  padding: var(--space-8);
  background: var(--music-card);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);
}

.recent-song:hover {
  background: var(--music-hover);
}

.recent-song-artwork {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--music-primary), var(--music-secondary));
  border-radius: var(--radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
}

.recent-song-info {
  flex: 1;
}

.recent-song-title {
  color: var(--music-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin: 0;
}

.recent-song-artist {
  color: var(--music-text-secondary);
  font-size: var(--font-size-xs);
  margin: var(--space-2) 0 0 0;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: var(--space-24);
  overflow-y: auto;
}

.search-section {
  background: var(--music-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-20);
  margin-bottom: var(--space-24);
  display: none;
}

.search-section.active {
  display: block;
}

.search-bar {
  display: flex;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
}

.search-bar input {
  flex: 1;
  background: var(--music-card);
  border: 1px solid var(--music-border);
  color: var(--music-text);
}

.search-bar input:focus {
  border-color: var(--music-primary);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

.filters {
  display: flex;
  gap: var(--space-12);
}

.filters select {
  background: var(--music-card);
  border: 1px solid var(--music-border);
  color: var(--music-text);
  min-width: 150px;
}

.filters select:focus {
  border-color: var(--music-primary);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

/* Algorithm Tabs */
.algorithm-tabs {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-24);
  border-bottom: 1px solid var(--music-border);
}

.tab-button {
  background: transparent;
  border: none;
  color: var(--music-text-secondary);
  padding: var(--space-16) var(--space-20);
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  border-bottom: 2px solid transparent;
  transition: all var(--duration-fast) var(--ease-standard);
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.tab-button:hover {
  color: var(--music-text);
  background: var(--music-card);
}

.tab-button.active {
  color: var(--music-primary);
  border-bottom-color: var(--music-primary);
}

.tab-icon {
  font-size: var(--font-size-lg);
}

/* Algorithm Info */
.algorithm-info {
  background: var(--music-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-20);
  margin-bottom: var(--space-24);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.algorithm-description h3 {
  color: var(--music-text);
  margin: 0 0 var(--space-8) 0;
  font-size: var(--font-size-lg);
}

.algorithm-description p {
  color: var(--music-text-secondary);
  margin: 0;
  max-width: 400px;
}

.algorithm-stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  min-width: 200px;
}

.stat {
  display: flex;
  align-items: center;
  gap: var(--space-12);
}

.stat-label {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
  min-width: 80px;
}

.stat-bar {
  flex: 1;
  height: 6px;
  background: var(--music-card);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.stat-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--music-primary), var(--music-secondary));
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-standard);
}

/* Recommendations */
.recommendations-section {
  margin-bottom: var(--space-32);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-24);
}

.section-header h2 {
  color: var(--music-text);
  margin: 0;
  font-size: var(--font-size-2xl);
}

.recommendation-count {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
}

.songs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-20);
}

/* Song Card */
.song-card {
  background: var(--music-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
  border: 1px solid var(--music-border);
  transition: all var(--duration-fast) var(--ease-standard);
  cursor: pointer;
}

.song-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: var(--music-primary);
}

.song-card-header {
  display: flex;
  align-items: center;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
}

.song-artwork {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--music-primary), var(--music-secondary));
  border-radius: var(--radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  color: white;
}

.song-info {
  flex: 1;
}

.song-title {
  color: var(--music-text);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin: 0 0 var(--space-4) 0;
}

.song-artist {
  color: var(--music-text-secondary);
  font-size: var(--font-size-md);
  margin: 0;
}

.song-duration {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
  margin-left: auto;
}

.song-tags {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.tag {
  background: var(--music-card);
  color: var(--music-text-secondary);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  text-transform: capitalize;
}

.tag.genre {
  background: var(--music-primary);
  color: white;
}

.tag.mood {
  background: var(--music-secondary);
  color: white;
}

.song-recommendation {
  margin-bottom: var(--space-16);
}

.recommendation-reason {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-8);
}

.similarity-score {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.similarity-score span {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
  min-width: 80px;
}

.score-bar {
  flex: 1;
  height: 4px;
  background: var(--music-card);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.score-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--music-accent), var(--music-primary));
  border-radius: var(--radius-full);
  transition: width var(--duration-normal) var(--ease-standard);
}

.song-actions {
  display: flex;
  gap: var(--space-8);
}

.action-btn {
  background: var(--music-card);
  border: 1px solid var(--music-border);
  color: var(--music-text-secondary);
  padding: var(--space-8);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-standard);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.action-btn:hover {
  background: var(--music-hover);
  color: var(--music-text);
}

.action-btn.liked {
  background: var(--music-accent);
  color: white;
  border-color: var(--music-accent);
}

.action-btn.disliked {
  background: #EF4444;
  color: white;
  border-color: #EF4444;
}

.play-btn {
  background: var(--music-primary);
  color: white;
  border-color: var(--music-primary);
}

.play-btn:hover {
  background: var(--music-primary-hover);
}

/* Footer */
.footer {
  background: var(--music-surface);
  border-top: 1px solid var(--music-border);
  padding: var(--space-24);
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-section h4 {
  color: var(--music-text);
  margin: 0 0 var(--space-8) 0;
  font-size: var(--font-size-md);
}

.footer-section p {
  color: var(--music-text-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
}

.performance-metrics {
  display: flex;
  gap: var(--space-16);
}

.metric {
  color: var(--music-text-secondary);
  font-size: var(--font-size-sm);
}

.metric strong {
  color: var(--music-primary);
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: var(--music-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-32);
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--music-border);
}

.modal-close {
  position: absolute;
  top: var(--space-16);
  right: var(--space-20);
  font-size: var(--font-size-2xl);
  color: var(--music-text-secondary);
  cursor: pointer;
  transition: color var(--duration-fast) var(--ease-standard);
}

.modal-close:hover {
  color: var(--music-text);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  margin-bottom: var(--space-24);
}

.modal-header .song-artwork {
  width: 80px;
  height: 80px;
  font-size: var(--font-size-3xl);
}

.modal-header h3 {
  color: var(--music-text);
  margin: 0 0 var(--space-4) 0;
  font-size: var(--font-size-xl);
}

.modal-header p {
  color: var(--music-text-secondary);
  margin: 0;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
}

.modal-actions {
  display: flex;
  gap: var(--space-12);
}

/* Button Overrides */
.btn {
  background: var(--music-card);
  border: 1px solid var(--music-border);
  color: var(--music-text);
}

.btn--primary {
  background: var(--music-primary);
  color: white;
  border-color: var(--music-primary);
}

.btn--primary:hover {
  background: var(--music-primary-hover);
}

.btn--secondary {
  background: var(--music-card);
  color: var(--music-text-secondary);
  border-color: var(--music-border);
}

.btn--secondary:hover {
  background: var(--music-hover);
  color: var(--music-text);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    max-height: none;
    border-right: none;
    border-bottom: 1px solid var(--music-border);
  }
  
  .songs-grid {
    grid-template-columns: 1fr;
  }
  
  .algorithm-info {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-16);
  }
  
  .footer-content {
    flex-direction: column;
    gap: var(--space-16);
    text-align: center;
  }
  
  .performance-metrics {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.song-card {
  animation: fadeIn 0.3s ease-out;
}

.song-card:nth-child(even) {
  animation-delay: 0.1s;
}

.song-card:nth-child(3n) {
  animation-delay: 0.2s;
}
