export type ColorShade = 'red' | 'yellow' | 'green' | 'blue' | 'violet' | 'white' | 'black' | 'brown';
export type Color = {
    shade: ColorShade;
};
export type HtmlColors = {
    [key: string]: Color;
};
export type MmrColors = {
    [key: string]: string;
};
export declare const mmrColors: MmrColors;
export declare const htmlColors: HtmlColors;
