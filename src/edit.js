import {
    PanelBody,
    PanelRow,
    SelectControl
} from '@wordpress/components';

import {
    Fragment
} from '@wordpress/element';

import {
    InspectorControls,
    RichText,
    BlockControls,
    useBlockProps
} from '@wordpress/block-editor';

import icons from './icons.json';
import types from './types.json';
import Icon from './Icon';

const edit = ( { attributes, setAttributes } ) => {
    const {
        icon,
        type,
        method,
        content
    } = attributes;

    const onChangeIcon = icon => {
        setAttributes( { icon } );
    };

    const onChangeType = type => {
        setAttributes( { type } );
    };

    const onChangeMethod = method => {
        setAttributes( { method } );
    };

    const onChangeContent = content => {
        setAttributes( { content } );
    };

    return (
        <>
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <p>For a better icon preview visit <a href="https://heroicons.com" target={'_blank'}>HeroIcons</a>.</p>

                        <PanelRow className = { 'wp-coutb-icon__panel-row' }>
                            <div className = { 'wp-coutb-icon__container' }>
                                <SelectControl
                                    label = { 'Icon' }
                                    value = { icon }
                                    options = { icons }
                                    onChange = { onChangeIcon }
                                />

                                <Icon icon={ icon } method={ method } />
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

                        <PanelRow>
                            <SelectControl
                                label = { 'Method' }
                                value = { method }
                                options = { [
                                    {
                                        "label": "Solid",
                                        "value": "solid"
                                    },
                                    {
                                        "label": "Outline",
                                        "value": "outline"
                                    }
                                ] }
                                onChange = { onChangeMethod }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <div { ...useBlockProps() }>
                    {
                        <BlockControls />
                    }

                    <div className={`wp-coutb-callout-box ${ type }`}>
                        <div className={`wp-coutb-callout-box__icon ${ method }`}>
                            <Icon icon={ icon } method={ method } />
                        </div>

                        <RichText
                            tagName="p"
                            onChange={ onChangeContent }
                            value={ content }
                            placeholder="Type a callout text"
                        />
                    </div>
                </div>
            </Fragment>
        </>
    );
};

export default edit;
