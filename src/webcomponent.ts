import {CustomElement} from "./custom-element";

@CustomElement({
  selector: 'web-component'
})
export class WebComponent extends HTMLElement{

  constructor() {
    super();
  }

  public connectedCallback(){
    this.innerHTML = `<h1>A Simple Web Component</h1><p> build with webpack and love! </p>`;
  }
}
