import 'document-register-element'

const validateSelector = (selector: string) => {
  if (selector.indexOf('-') <= 0) {
      throw new Error('You need at least 1 dash in the custom element name!');
  }
};

export const CustomElement = (config:any) => (cls:any) => {
  validateSelector(config.selector);
  if(typeof customElements === "undefined"){
    console.log(`customElements not defined in browser, ${config.selector} will not be defined`)
  } else {
    customElements.define(config.selector, cls)
  }
}