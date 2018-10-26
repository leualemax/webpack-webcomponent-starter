import {CustomElement} from "./custom-element";

@CustomElement({
  selector: 'web-component'
})
export class WebComponent extends HTMLElement{

  constructor() {
    super();
  }

  public connectedCallback(){
    this.innerHTML = `<p> Web Compoenent Says Hello! </p>`;
  }
}
