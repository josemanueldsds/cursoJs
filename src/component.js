export class Component extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.template = document.querySelector('template');
    }

    connectedCallback() {
        let templateNode = document.importNode(this.template.content, true);
        this.shadowRoot.appendChild(templateNode);
    }
}
customElements.define('my-component', Component);