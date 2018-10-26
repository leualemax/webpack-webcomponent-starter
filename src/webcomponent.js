require("../node_modules/@webcomponents/custom-elements/custom-elements.min.js")

require("style-loader!./webcomponent.scss");

window.WebComponentEnv = ENV;
window.WebComponent = require("./webcomponent.ts").default;
