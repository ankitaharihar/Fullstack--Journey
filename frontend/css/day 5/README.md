# Box-sizing:

The **`box-sizing` CSS** property sets how the total width and height of an element is calculated.

1. **box-sizing: content-box;**
   1. This is the default value of box-sizing property in css.
   2. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, but does not include the padding, border, or margin. For example,

```css
.box {
  width: 350px;
  border: 10px solid black;
}
/* actual width = width + border + padding */
```

   renders a box that is 370px wide.

1. **box-sizing: border-box;**
   1. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, padding, and border, but do not include the margin.

```css
.box {
  width: 350px;
  box-sizing: border-box;
  border: 10px solid black;
}
/* actual width = given width ie. 350px border will be included
 inside of that width  */
```

- So to override the default box-sizing: content-box; we add this in css

```css
* {
  box-sizing: border-box;
}
```

## CodePen

https://codepen.io/Ankita-Harihar/pen/raLZqwv# Box-sizing:

The **`box-sizing` CSS** property sets how the total width and height of an element is calculated.

1. **box-sizing: content-box;**
   1. This is the default value of box-sizing property in css.
   2. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, but does not include the padding, border, or margin. For example,

```css
.box {
  width: 350px;
  border: 10px solid black;
}
/* actual width = width + border + padding */
```

renders a box that is 370px wide.

1. **box-sizing: border-box;**
   1. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, padding, and border, but do not include the margin.

```css
.box {
  width: 350px;
  box-sizing: border-box;
  border: 10px solid black;
}
/* actual width = given width ie. 350px border will be included
 inside of that width  */
```

- So to override the default box-sizing: content-box; we add this in css

````css
* {
  box-sizing: border-box;
}
```# Box-sizing:

The **`box-sizing` CSS** property sets how the total width and height of an element is calculated.

1. **box-sizing: content-box;**
   1. This is the default value of box-sizing property in CSS.
   2. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, but do not include the padding, border, or margin. For example,

```css
.box {
  width: 350px;
  border: 10px solid black;
}
/* actual width = width + border + padding */
````

renders a box that is 370px wide.

1. **box-sizing: border-box;**
   1. The [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties include the content, padding, and border, but do not include the margin.

```css
.box {
  width: 350px;
  box-sizing: border-box;
  border: 10px solid black;
}
/* actual width = given width ie. 350px. Border will be included inside of that width */
```

- So to override the default box-sizing: content-box; we add this in CSS

```css
* {
  box-sizing: border-box;
}
```

## More info

- `box-sizing` affects height calculations in the same way as width.
- Margin is never included in the size calculation for either value.
- `border-box` makes layout math easier, especially for grids and cards.
- You can use `box-sizing: inherit;` on components to keep consistent sizing rules.
- Common pattern:

````css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```# Box-sizing

The `box-sizing` CSS property sets how the total width and height of an element is calculated.

## 1. box-sizing: content-box;

1. This is the default value of `box-sizing` in CSS.
2. The `width` and `height` properties include the content, but do not include the padding, border, or margin. For example,

```css
.box {
  width: 350px;
  border: 10px solid black;
}
/* actual width = width + border + padding */
````

This renders a box that is 370px wide.

## 2. box-sizing: border-box;

1. The `width` and `height` properties include the content, padding, and border, but do not include the margin.

```css
.box {
  width: 350px;
  box-sizing: border-box;
  border: 10px solid black;
}
/* actual width = given width (350px). Border is included inside that width. */
```

- To override the default `box-sizing: content-box;`, add this in CSS:

````css
* {
  box-sizing: border-box;
}
```# Block, inline and inline-block elements:

- Depending on behaviour of elements and “display” property, elements can be divided into following categories
  - Block level elements
  - Inline level elements
  - Inline block level elements

1. **Block level elements**:
   - A block level element will always start on new line.
   - Block level element will always takes full width available.
   - You can set the `height` and `width` of block-level elements in CSS.
   - The CSS display property for block level elements is `display: block;`
   - Examples of block level elements-
     - p
     - div
     - all lists ( ol, ul, dl )
     - li, dt, dd
     - heading tags ( h1 to h6 )
     - section
     - header
     - footer
     - nav

   Example: _In following example we have two div elements ie. block level elements. you can see how they are stacked upon one another and how they occupy the full available width._

   https://codepen.io/Salman-Shaikh-the-bashful/pen/RwzzvJm
   1. Inline elements:
      - An inline element does not start on a new line.
      - An inline element only takes up as much width as necessary.
      - You **cannot** set the `height` and `width` of block-level elements in CSS
      - The CSS display property for inline level elements is `display: inline;`
      - Examples of inline elements
        - span
        - a
        - button
        - img
        - br
        - strong
        - em

      Example: In following example see how two span elements are placed in single line only and they only take space that is required for their content.

      https://codepen.io/Salman-Shaikh-the-bashful/pen/jOjjdQy

   2. Inline-block:

   Inline block is the middle ground between block level elements and inline elements.
   - Inline-block level elements `start on the same line`
   - but `they respect the height and width properties` ie. they don’t ignore these (height & width ) properties.
   - By default `button` and `input` elements are inline-block elements.
   - We can externally say `display: inline-block;` so that element will behave like inline-block element.

## Quick comparison

- **Block**: Starts on a new line, takes full width, supports `width` and `height`.
- **Inline**: Stays in the same line, only takes needed width, ignores `width` and `height`.
- **Inline-block**: Stays in the same line, but supports `width` and `height`.

## Common use cases

- **Block**: Layout sections like cards, page sections, headers, footers.
- **Inline**: Small text-level elements like links or emphasized words.
- **Inline-block**: Buttons, badges, or small cards that should sit side-by-side but keep size.

## Useful CSS examples

- Make a block element shrink to content: `display: inline-block;`
- Make an inline element behave like a block: `display: block;`
- Align inline-block elements nicely: `vertical-align: middle;`

## Tip

If you see unexpected gaps between inline-block elements, it can be caused by whitespace in the HTML. You can remove the whitespace or set the parent font-size to 0 and reset it on children.
````
