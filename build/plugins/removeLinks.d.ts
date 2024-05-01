import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { Link } from "@ckeditor/ckeditor5-link";
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
export declare class RemoveLinks extends Plugin {
    static get requires(): (typeof Link | typeof Widget)[];
    init(): void;
}
