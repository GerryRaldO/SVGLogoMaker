class SVG {
    constructor(svgCode){
        this.svgCode = svgCode;
    }
}
class Init extends SVG {
    constructor(svgCode) {
        super(svgCode)
    }
    render() {
        return `<svg version="1.1" width="${this.svgCode}" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    }
}
class ChangeText extends SVG {
    constructor(svgCode) {
        super(svgCode)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.svgCode}`
    }
}
class TestShape extends SVG {
    constructor(svgCode) {
        super(svgCode)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.svgCode} x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>`
    }
}


module.exports = {Init, ChangeText, TestShape};
