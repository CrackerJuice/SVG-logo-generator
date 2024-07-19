const { triangle, circle, square } = require("./lib/shapes");

describe("circle", () => {
    test("should render svg for a circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80"/>';
  
    });
    });

describe("triangle", () => {
  test("should render svg for a polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" />';

  });
  });

describe("square", ()=> {
    test("Should render svg for a rect element", ()=> {
        const expectedSvg = '<rect x="50" y="50" width="100" height="100"/>';
    })
});
