# HTML literal

A vanilla javascript html tagged template literal function,
for convenient entity encoding when using template strings to generate HTML in vanilla JavaScript code.

## Usage

Copy `html.js` somewhere into your project.

Use it like this:

```
import { html, htmlEncode, htmlRaw } from './html.js';

const unsafe = '<script>alert('gotcha')</script>';
const safe = 'some <em>witty</em> text';

// html`` encodes by default, use htmlRaw to skip:
document.getElementById('body').innerHTML = html`
    ${unsafe} <br>
    ${htmlRaw(safe)}
`;
```

Will output:

```html
<body>
    &lt;script&gt;alert(&#39;gotcha&#39;)&lt;/script&gt; <br>
    some <em>witty</em> text
</body>
```

Functions:

- `html`: the tagged template literal function that automatically encodes entities
- `htmlRaw`: wrap a string to prevent encoding entities
- `htmlEncode`: explicitly encode entities in a string

## Syntax highlighting

Install the *html-in-template-string* extension in VS code for syntax highlighting of the html.
