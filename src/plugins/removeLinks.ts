import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {Link} from "@ckeditor/ckeditor5-link";
import {toWidget} from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

export class RemoveLinks extends Plugin {
  static get requires() {
    return [ Link, Widget ];
  }

  init() {
    const editor = this.editor;

    editor.model.schema.register( 'removeLink', {
      isObject: true,
      allowWhere: '$text'
    });

    editor.conversion.for( 'upcast' ).elementToElement( {
      view: {
        name: 'a',
        attributes: {
          href: true
        }
      },
      model: 'removeLink'
    });

    editor.conversion.for( 'dataDowncast' ).elementToElement( {
      model: 'removeLink',
      view: {
        name: 'span'
      }
    });

    editor.conversion.for( 'editingDowncast' ).elementToElement( {
      model: 'removeLink',
      view: ( modelItem, downcastConversionApi) => {
        const viewWriter = downcastConversionApi.writer;

        const widgetElement = viewWriter.createContainerElement( 'span' );
        return toWidget( widgetElement, viewWriter );
      }
    });
  }
}
