const {Init, ChangeText, TestShape} = require("../lib/svg");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';

      const newSvg = new Init('300')
      expect(newSvg.render()).toEqual(expectedSvg);
  });

  it("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';

      const newSvg = new ChangeText(`white">A</text></svg>`)
      expect(newSvg.render()).toEqual(expectedSvg);
  });

  it("should set text message and color", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';

      const newSvg = new ChangeText(`#333">SVG</text></svg>`)
      expect(newSvg.render()).toEqual(expectedSvg);
  });

  // An exception test checks for code that should throw an error.
  it("should throw if text exceeds 3 characters", () => {
    const expectedError = new Error("Text must not exceed 3 characters.");


  });

  it("should include a shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';

    const newSvg = new TestShape(`rect`)
    expect(newSvg.render()).toEqual(expectedSvg);
  });

});

