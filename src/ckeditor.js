/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';

export default class ClassicEditor extends ClassicEditorBase {}

import './styles.css';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  Heading,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
  Strikethrough,
  FontSize,
  FontColor,
  Highlight
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  pasteFromWordRemoveStyles: true,
  pasteFromWordRemoveFontStyles: true,
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
	  'redo'
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
		color: 'var(--charcoal-text, var(--charcoal-text, #393b3f))',
		label: 'Default'
	  },
	  {
		color: '#9a2802',
		label: 'Orange'
	  },
	  {
		color: 'var(--forest-500-text, var(--green-4-text, #286230))',
		label: 'Green'
	  },
	  {
		color: 'var(--royal-500-text, var(--blue-4-text, #1b3273))',
		label: 'Blue'
	  },
	  {
		color: 'var(--lavendar-500-text, var(--purple-3-text, #57418e))',
		label: 'Purple'
	  },

	  // ...
	]
  },
  table: {
	contentToolbar: [
	  'tableColumn',
	  'tableRow',
	  'mergeTableCells'
	]
  },
  link: {
	// Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
	addTargetToExternalLinks: true,
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};
