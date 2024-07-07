/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor, Alignment, Autoformat, Autosave, Bold, Italic, Strikethrough, Underline, BlockQuote, Essentials, EditorConfig, FindAndReplace, FontColor, FontSize, Heading, Highlight, Indent, AutoLink, Link, List, Paragraph, PasteFromOffice, RemoveFormat, Table, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Undo, EditorWatchdog, WordCount } from 'ckeditor5';

import { RemoveStaticColors } from "./plugins/remove-static-colors/removeStaticColors";
import 'ckeditor5/ckeditor5.css';
import "./styles.css";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    Alignment,
    AutoLink,
    Autoformat,
    Autosave,
    BlockQuote,
    Bold,
    Essentials,
    FindAndReplace,
    FontColor,
    FontSize,
    Heading,
    Highlight,
    Indent,
    Italic,
    Link,
    List,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    Strikethrough,
    Table,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline,
    Undo,
    WordCount,
    RemoveStaticColors,
    // RemoveLinks
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'fontSize',
        'fontColor',
        'highlight',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'insertTable',
        'undo',
        'redo',
      ]
    },
    highlight: {
      options: [
        {
          model: 'pinkMarker',
          class: 'marker-pink',
          title: 'Pink marker',
          color: 'var(--hipink-400-fill, #FF6BF0)',
          type: 'marker'
        },
        {
          model: 'yellowMarker',
          class: 'marker-yellow',
          title: 'Yellow marker',
          color: 'var(--hiyellow-400-fill, #FEFF00)',
          type: 'marker'
        },
        {
          model: 'greenMarker',
          class: 'marker-green',
          title: 'Green marker',
          color: 'var(--higreen-400-fill, #00FF00)',
          type: 'marker'
        },
        {
          model: 'blueMarker',
          class: 'marker-blue',
          title: 'Blue marker',
          color: 'var(--hiblue-400-fill, #03FFFF)',
          type: 'marker'
        }
      ]
    },
    fontColor: {
      documentColors: 0,
      colors: [
        {
          color: 'var(--charcoal-text, #393b3f)',
          label: 'Default'
        },
        {
          color: 'var(--orange-500-background, #9a2802)',
          label: 'Orange'
        },
        {
          color: 'var(--forest-500-background, #286230)',
          label: 'Green'
        },
        {
          color: 'var(--royal-500-background, #1b3273)',
          label: 'Blue'
        },
        {
          color: 'var(--lavendar-500-background, #57418e)',
          label: 'Purple'
        },

        // ...
      ]
    },
    language: 'en',
    link: {
      // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
      addTargetToExternalLinks: true,
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
  };
}

export default Editor;

export {EditorWatchdog};

