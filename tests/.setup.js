// config for mocha

// use of ESM (Ecmascript modules = import/export)
require("@babel/register")();

// ingore the import of css files
require("ignore-styles");

// config for enzyme => react components tests
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });