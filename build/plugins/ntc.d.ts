declare const ntc: {
    init: () => void;
    name: (color: string) => (string | boolean)[];
    hsl: (color: string) => number[];
    rgb: (color: string) => number[];
    shadeRgb: (shadename: string) => string;
    shades: string[][];
    names: string[][];
};
export default ntc;
