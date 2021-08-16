import {
    Panel,
    PanelBody,
    PanelRow,
    SelectControl,
    RadioControl,
    __experimentalRadio as Radio
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
import presets from "./presets.json";

const edit = ( { attributes, setAttributes } ) => {
    const {
        icon,
        type,
        method,
        content,
        preset
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

    const onChangePreset = event => {
        const preset      = event.target.value;
        const foundPreset = presets.find( thePreset => thePreset.value === preset );

        setAttributes( {
            preset,
            icon: foundPreset.icon,
            type: foundPreset.type
        } );
    };

    return (
        <>
            <Fragment>
                <InspectorControls>
                    <Panel>
                        <PanelBody title="Presets" initialOpen={ true }>
                            <PanelRow>
                                <div className="wp-coutb-presets">
                                    {
                                        presets.map( ( preset, index ) => (
                                            <label className={`wp-coutb-preset ${ preset.value }`}
                                                   htmlFor={ preset.value }
                                                   key={`${preset}-${index}`}
                                            >
                                                <input type="radio"
                                                       id={ preset.value }
                                                       value={ preset.value }
                                                       name="wp-coutb-preset"
                                                       onChange={ onChangePreset }
                                                />
                                                <Icon icon={ preset.icon } method="solid" />
                                                <span>{ preset.label }</span>
                                            </label>
                                        ) )
                                    }
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>

                    <Panel>
                        <PanelBody title="Settings" initialOpen={ true }>
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
                    </Panel>
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
