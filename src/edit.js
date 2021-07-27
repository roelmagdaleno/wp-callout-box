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
import types from './types.json';
import Icon from './Icon';

const edit = ( { attributes, setAttributes } ) => {
    const {
        icon,
        type
    } = attributes;

    const onChangeIcon = icon => {
        setAttributes( { icon } );
    };

    const onChangeType = type => {
        setAttributes( { type } );
    };

    return (
        <>
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <p>Preview icons in <a href="https://heroicons.com" target={'_blank'}>HeroIcons</a>.</p>

                        <PanelRow className = { 'wp-coutb-icon__panel-row' }>
                            <div className = { 'wp-coutb-icon__container' }>
                                <SelectControl
                                    label = { 'Icon' }
                                    value = { icon }
                                    options = { icons }
                                    onChange = { onChangeIcon }
                                />

                                <Icon icon = { icon } />
                            </div>
                        </PanelRow>

                        <PanelRow>
                            <SelectControl
                                label = { 'Type' }
                                value = { type }
                                options = { types }
                                onChange = { onChangeType }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        </>
    );
};

export default edit;
