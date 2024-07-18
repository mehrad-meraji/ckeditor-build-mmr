/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor, Alignment, Autoformat, Autosave, Bold, Italic, Strikethrough, Underline, BlockQuote, Essentials, EditorConfig, FindAndReplace, FontColor, FontSize, Heading, Highlight, Indent, AutoLink, Link, List, Paragraph, PasteFromOffice, RemoveFormat, Table, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Undo, EditorWatchdog, WordCount, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, LinkImage } from 'ckeditor5';
import { RemoveStaticColors } from "./plugins/remove-static-colors/removeStaticColors";
import 'ckeditor5/ckeditor5.css';
import "./styles.css";
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof RemoveStaticColors | typeof FontColor | typeof Alignment | typeof AutoLink | typeof Autoformat | typeof Autosave | typeof BlockQuote | typeof Bold | typeof Essentials | typeof FindAndReplace | typeof FontSize | typeof Heading | typeof Highlight | typeof Indent | typeof Italic | typeof Link | typeof List | typeof Paragraph | typeof PasteFromOffice | typeof RemoveFormat | typeof Strikethrough | typeof Table | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof TextTransformation | typeof Underline | typeof Undo | typeof WordCount | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof LinkImage)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
export { EditorWatchdog };
