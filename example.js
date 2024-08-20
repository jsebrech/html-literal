import { html, htmlEncode, htmlRaw } from "./html.js";

customElements.define('x-page', class ExamplePage extends HTMLElement {

    article = {
        title: 'My Nifty Article',
        text: 'Some <em>witty</em> text.',
    };
    
    headerTemplate() {
        return html`<header>${this.article.title}</header>`;
    }
    
    articleTemplate() {
        return html`
            <main>
                <p>Encodes entities by default:<br>${this.article.text}</p>
                <p>Use htmlRaw to avoid this:<br>${htmlRaw(this.article.text)}</p>
                <p>Use htmlEncode to force this:<br>${htmlRaw(htmlEncode(this.article.text))}</p>
                <p>In other words, htmlEncode turns this:</p>
                <pre>${htmlEncode(this.article.text)}</pre>
                <p>Into this:</p>
                <pre>${htmlEncode(String(htmlEncode(this.article.text)))}</pre>
            </main>
        `;
    }
    
    footerTemplate() {
        return html`<footer>Just a footer.</footer>`;
    }
    
    connectedCallback() {
        this.innerHTML = html`
            ${this.headerTemplate()}
            ${this.articleTemplate()}
            ${this.footerTemplate()}
        `;
    }
});
