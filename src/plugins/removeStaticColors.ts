import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {FontColor} from "@ckeditor/ckeditor5-font";
import ntc from "./ntc";
import {htmlColors, mmrColors} from "./colorConvert";

export class RemoveStaticColors extends Plugin {
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
        value: (viewElement: any) => {
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
        const initialValue: string = modelValue ? modelValue : 'black'
        if (/var\(--\w+?[-\w]+-?\w+,? ?[#\w]+\)?/.test(modelValue)) {
          return viewWriter.createAttributeElement( 'span', {
            style: `color:${ modelValue }`
          } );
        }
        const shade = (initialValue.split('#').length > 1) ?
          (ntc.name(initialValue)[3] as string).toLowerCase() :
          htmlColors[initialValue] ? htmlColors[initialValue].shade : mmrColors['DEFAULT'];
        return viewWriter.createAttributeElement( 'span', {
          style: `color:${ mmrColors[shade] ? mmrColors[shade] : mmrColors['DEFAULT'] }`
        } );
      },
      converterPriority: 'high'
    } );
  }
}
