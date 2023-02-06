/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

import './styles.css';
import ntc from './ntc';
import {htmlColors} from "./colorConvert";

const mmrColors = {
	'DEFAULT': 'var(--charcoal-text, #393b3f)',
	'red': '#9a2802',
	'orange': '#9a2802',
	'yellow': 'var(--sun-400-background, #ffb957)',
	'green': 'var(--forest-500-text, #286230)',
	'blue': 'var(--royal-500-text, #1b3273)',
	'violet': 'var(--lavendar-500-text, #57418e)',
	'brown': 'var(--charcoal-text, #393b3f)',
	'black': 'var(--charcoal-text, #393b3f)',
	'grey': 'var(--charcoal-text, #393b3f)',
	'white': 'var(--charcoal-text, #393b3f)',

	'var(--charcoal-text, #393b3f)': '#393b3f',
	'var(--lavendar-500-text, #57418e)': '#57418e',
	'var(--royal-500-text, #1b3273)': '#1b3273',
	'var(--forest-500-text, #286230)': '#286230',
	'var(--sun-400-background, #ffb957)': '#ffb957'
}
class RemoveStaticColors extends Plugin {
	static get requires() {
		return [ FontColor ];
	}

	init() {
		ntc.init();
		const editor = this.editor;
		editor.conversion.for( 'upcast' ).elementToAttribute( {
			view: {
				name: 'span',
				styles: {
					'color': /#?\w+/g
				}
			},
			model: {
				key: 'fontColor',
				value: viewElement => {
					return viewElement.getStyle('color');
				}
			},
			converterPriority: 'high'
		} );

		// Add a special converter for the font size feature to convert all (even the not configured)
		// model attribute values.
		editor.conversion.for( 'downcast' ).attributeToElement( {
			model: {
				key: 'fontColor'
			},
			view: ( modelValue, { writer: viewWriter } ) => {
				const initialValue = modelValue ? modelValue : 'black'
				if (/var\(--\w+?[-\w]+-?\w+,? ?[#\w]+\)?/.test(modelValue)) {
					return viewWriter.createAttributeElement( 'span', {
						style: `color:${ modelValue }`
					} );
				}
				const shade = (initialValue.split('#').length > 1) ?
					ntc.name(initialValue)[3].toLowerCase() :
					htmlColors[initialValue] ? htmlColors[initialValue].shade : mmrColors['DEFAULT'];
				return viewWriter.createAttributeElement( 'span', {
					style: `color:${ mmrColors[shade] ? mmrColors[shade] : mmrColors['DEFAULT'] }`
				} );
			},
			converterPriority: 'high'
		} );
	}
}

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Underline,
	Strikethrough,
	FontSize,
	FontColor,
	Highlight,
	RemoveStaticColors,
	Essentials,
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
				color: 'var(--charcoal-text, #393b3f)',
				label: 'Default'
			},
			{
				color: '#9a2802',
				label: 'Orange'
			},
			{
				color: 'var(--forest-500-text, #286230)',
				label: 'Green'
			},
			{
				color: 'var(--royal-500-text, #1b3273)',
				label: 'Blue'
			},
			{
				color: 'var(--lavendar-500-text, #57418e)',
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
