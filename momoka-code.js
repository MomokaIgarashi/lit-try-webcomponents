import {LitElement, html} from 'lit';

export class MomomokaCode extends LitElement {

    static properties = {
      message: {},
    };
    
    constructor() {
      super();
      this.message = 'Hello again.';
    }

    render() {
      return html`
        <p>${this.message}</p>
      `;
    }
}
customElements.define('momoka-code', MomomokaCode);
  