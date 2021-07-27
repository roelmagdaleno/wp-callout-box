import {
    PanelBody,
    PanelRow,
    SelectControl
} from '@wordpress/components';

import {
    Fragment
} from '@wordpress/element';

import {
    InspectorControls
} from '@wordpress/block-editor';

import icons from './icons.json';
import Icon from './Icon';

const edit = ( { attributes, setAttributes } ) => {
    const {
        icon
    } = attributes;

    const onChangeIcon = icon => {
        setAttributes( { icon } );
    };

    return (
        <>
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <PanelRow className = { 'wp-coutb-icon__container' }>
                            <SelectControl
                                label = { 'Icon' }
                                value = { icon }
                                options = { icons }
                                onChange = { onChangeIcon }
                            />

                            <Icon icon={icon} />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        </>
    );
};

export default edit;
