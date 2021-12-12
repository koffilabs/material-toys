import {Button} from "./button";
const tokens = {
    MdSysColorShadow: "red",
    MdSysColorPrimary: "white",
    MdSysColorPrimaryDark: "black",
    MdSysColorSurface: "white",
    MdSysColorSurfaceDark: "black",
    MdSysColorOnSurface: "white",
    MdSysColorOnSurfaceDark: "black",

}
describe("button style isolated unit tests suite", () => {
    test("should apply MdSysTypescaleLabelLargeLineHeight", () => {
        const value = Math.random();
        expect(Button({...tokens,
            MdSysTypescaleLabelLargeLineHeight: value,
        }, {}).lineHeight).toBe(value);
    });
    test("should apply MdSysTypescaleLabelLargeSize", () => {
        const value = Math.random();
        expect(Button({...tokens,
            MdSysTypescaleLabelLargeSize: value,
        }, {}).fontSize).toBe(value);
    });
    test("should apply MdSysTypescaleLabelLargeWeight", () => {
        const value = Math.random();
        expect(Button({...tokens,
            MdSysTypescaleLabelLargeWeight: value,
        }, {}).fontWeight).toBe(value);
    });
    test("should apply MdSysTypescaleLabelLargeFont", () => {
        const value = "customFont";
        expect(Button({...tokens,
            MdSysTypescaleLabelLargeFont: value,
        }, {}).fontFamily).toBe(value);
    });
    test("should apply MdSysTypescaleLabelLargeTracking", () => {
        const value = Math.random();
        expect(Button({...tokens,
            MdSysTypescaleLabelLargeTracking: value,
        }, {}).letterSpacing).toBe(value);
    });
    test("should apply MdSysColorPrimary - Light variation", () => {
        const value = "white";
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&>.state"].backgroundColor).toBe(value);

        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"].color).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"].fill).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.filled"].background).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.outlined"].color).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.outlined"].fill).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"][".ripple"].backgroundColor).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"]["&:active"]["&>.state"].backgroundColor).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"]["&>.state"].backgroundColor).toBe(value);
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"]["&:disabled"].color).toBe("rgba(255, 255, 255, 0.38)");
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"]["&:disabled"].fill).toBe("rgba(255, 255, 255, 0.38)");
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.filled"]["&:disabled"].backgroundColor).toBe("rgba(255, 255, 255, 0.12)");
        expect(Button({...tokens,
            MdSysColorPrimary: value,
        }, {})["&.elevated"]["&:disabled"].background).toBe("rgba(255, 255, 255, 0.12)");
    });
})