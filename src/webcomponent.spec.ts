import {WebComponent} from "./webcomponent";
describe("Test Web Compoment", () => {
    describe("simple teste", () => {
        let webComponent = new WebComponent();

        it("should  print a paragraph on html", () => {
          webComponent.connectedCallback();
          expect(webComponent.innerHTML).toEqual('<h1>A Simple Web Component</h1><p> build with webpack and love! </p>');
        });
    });
});
