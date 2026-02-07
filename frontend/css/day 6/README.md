# Day 6

## Block, Inline, and Inline-Block Elements (CSS)

This example explains the difference between block, inline, and inline-block elements using simple HTML and CSS.

### Block Elements

Block elements:

- Start on a new line
- Take full available width
- Respect width and height

Examples: `div`, `p`, `h1`-`h6`, `section`

```css
display: block;
```

### Inline Elements

Inline elements:

- Stay on the same line
- Take only required space
- Ignore width and height

Examples: `span`, `a`, `strong`, `em`

```css
display: inline;
```

### Inline-Block Elements

Inline-block elements:

- Stay on the same line
- Respect width and height

Examples: `button`, `input`

```css
display: inline-block;
```

### Key Differences

| Type         | New Line | Width and Height |
| ------------ | -------- | ---------------- |
| Block        | Yes      | Yes              |
| Inline       | No       | No               |
| Inline-block | No       | Yes              |

### Why This Matters

Understanding these display types helps in:

- Building layouts
- Styling buttons and cards
- Creating responsive designs
