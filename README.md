# HtmlMeta utility

this is a little utility to read from and write to html document's meta data.

## Usage

```javascript
import HtmlMeta from 'html-meta';

const meta = new HtmlMeta();

// read
console.log('charset', meta.get('charset'));
console.log('base', meta.get('base'));
console.log('lang', meta.get('lang'));

// write
meta.set('charset', 'utf-8');
meta.set('base', '/app/');
meta.set('lang', 'en');
```
