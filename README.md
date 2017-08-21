# HtmlMeta utility

this is a little utility to read from and write to html document's meta data.

## Usage

```javascript
import meta from "html-meta";

// read
console.log('charset', meta.get('charset'));
console.log('base', meta.get('base'));
console.log('lang', meta.get('lang'));

// write
meta.set('charset', 'utf-8');
meta.set('base', '/app/');
meta.set('lang', 'en');
```
