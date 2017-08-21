/**
 * html document meta tag content access (OO)
 *
 * @author codexp <codexp@gmx.com>
 */
class HtmlMeta {
    constructor() {
        this.tags = window.document.getElementsByTagName('meta');

        for (let i = 0; i < this.tags.length; ++i) {
            const tag = this.tags[i];
            const hasNameAttribute = tag.hasAttribute('name');

            if (!hasNameAttribute && tag.hasAttribute('charset')) {
                this.charset = tag.getAttribute('charset');
                this.tags.charset = tag;
            }
            else if (tag.hasAttribute('http-equiv')) {
                this[tag.getAttribute('http-equiv')] = tag.content;
                this.tags[tag.getAttribute('http-equiv')] = tag;
            }
            else if (hasNameAttribute) {
                this[tag.name] = tag.content;
            }
        }

        if (!this.tags.base) {
            this.tags.base = window.document.getElementsByTagName('base')[0];
            if (this.tags.base) {
                this.base = this.tags.base.href;
            }
        }
    }

    exists(name) {
        return undefined !== this.tags[name];
    }

    get(name) {
        return this[name];
    }

    set(name, value) {
        if (this.tags[name]) {
            if ('charset' === name) {
                this.tags[name].setAttribute('charset', value);
            } else if ('base' === name) {
                this.tags[name].href = value;
            } else {
                this.tags[name].content = value;
            }
            this[name] = value;
        }
    }
}

export default HtmlMeta;
