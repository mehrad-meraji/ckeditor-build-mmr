import { FontColor, Plugin } from "ckeditor5";
export declare class RemoveStaticColors extends Plugin {
    static get requires(): (typeof FontColor)[];
    init(): void;
}
