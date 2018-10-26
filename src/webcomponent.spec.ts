import {WebComponent} from "./webcomponent";
describe("Test Web Compoment", () => {
    describe("simple teste", () => {
        let webComponent = new WebComponent();

        it("should  print a paragraph on html", () => {
          webComponent.connectedCallback();
          expect(webComponent.innerHTML).toEqual('<p> Web Compoenent Says Hello! </p>');
        });
    });
});
