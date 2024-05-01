import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { FontColor } from "@ckeditor/ckeditor5-font";
export declare class RemoveStaticColors extends Plugin {
    static get requires(): (typeof FontColor)[];
    init(): void;
}
