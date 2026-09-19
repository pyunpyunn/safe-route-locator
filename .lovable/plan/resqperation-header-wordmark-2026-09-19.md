# ResQperation Header Wordmark

## Goal

Redesign only the ResQperation name in the dark header while leaving the existing image logo and all header behavior unchanged.

## Design

- Use a strong, modern lowercase wordmark with a deliberately heavier uppercase `Q`.
- Draw the `Q` as a solid white location pin with a larger transparent center, making it read as both a letter and a geotag.
- Add a restrained dashed route beneath the lettering, with rounded dashes and a clear destination point.
- Keep the treatment white for crisp contrast against the existing dark header.
- Preserve compact header sizing and make the mark remain legible on narrow screens.
- choose a LOUD and STRONG font u may choose from modern fonts that is LOUD and STRONG that fits the theme
  &nbsp;

## Technical details

- Replace the plain text node in `Topbar.jsx` with an accessible, code-drawn wordmark using semantic spans and inline SVG geometry.
- Replace only the existing `.header-brand strong` styling and add focused wordmark styles in `layout.css`.
- Preserve the current imported image, notifications, profile controls, navigation, and data behavior.