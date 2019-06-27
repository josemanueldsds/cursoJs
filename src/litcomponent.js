import { LitElement } from "lit-element";

export class LitComponent extends LitElement {

    constructor() {
        super();
    }

    initialize() { 
        super.initialize()
    }

    static styles = css
        `span {
            color:green;
        }`;
}

customElements.define('my-litcomponent', LitComponent)
