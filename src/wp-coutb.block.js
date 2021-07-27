import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';
import save from './save';

registerBlockType( metadata, {
    edit,
    save
} );

function WP_COUTB_fixSVGAttributes( element, blockType, attributes ) {
    console.log(element)
    console.log(attributes)
    console.log(blockType)


    if ( blockType.name !== 'roelmagdaleno/wp-callout-box' ) {
        return element;
    }

    return element;
}

wp.hooks.addFilter( 'blocks.getSaveElement', 'roelmagdaleno/wp-callout-box', WP_COUTB_fixSVGAttributes );
