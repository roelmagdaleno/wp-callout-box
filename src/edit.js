import {
    Panel,
    PanelBody,
    PanelRow,
    SelectControl,
    ColorPicker,
    ColorIndicator,
    Dropdown,
    Button
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
        bgColor,
        iconColor,
        borderColor,
        textColor
    } = attributes;

    const onChangePreset = event => {
        const preset      = event.target.value;
        const foundPreset = presets.find( thePreset => thePreset.value === preset );

        setAttributes( {
            preset,
            icon: foundPreset.icon,
            type: foundPreset.type,
            method: 'solid',
            bgColor: '',
            iconColor: '',
            borderColor: '',
            textColor: ''
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
                                        onChange = { icon => setAttributes( { icon } ) }
                                    />

                                    <Icon icon={ icon } method={ method } />
                                </div>
                            </PanelRow>

                            <PanelRow>
                                <SelectControl
                                    label = { 'Type' }
                                    value = { type }
                                    options = { types }
                                    onChange = { type => setAttributes( { type } ) }
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
                                    onChange = { method => setAttributes( { method } ) }
                                />
                            </PanelRow>
                        </PanelBody>
                    </Panel>

                    <Panel>
                        <PanelBody title="Colors" initialOpen={ true }>
                            <PanelRow>
                                <div>
                                    <Dropdown
                                        position="bottom right"
                                        renderToggle = {
                                            ( { isOpen, onToggle } ) => (
                                                <div className="wp-coutb-buttons-container">
                                                    <div className="wp-coutb-btn__container">
                                                        <Button
                                                            isLink
                                                            onClick = { onToggle }
                                                            aria-expanded={ isOpen }
                                                        >
                                                            Icon Color
                                                        </Button>
                                                    </div>

                                                    <ColorIndicator colorValue={ iconColor } />

                                                    <Button
                                                        isSecondary
                                                        isSmall
                                                        onClick = { () => setAttributes( { iconColor: '' } ) }
                                                    >
                                                        Clear
                                                    </Button>
                                                </div>
                                            )
                                        }
                                        renderContent = {
                                            () => (
                                                <ColorPicker
                                                    color = { iconColor }
                                                    disableAlpha = { true }
                                                    onChangeComplete = { color => setAttributes( { iconColor: color.hex } ) }
                                                />
                                            )
                                        }
                                    />
                                </div>
                            </PanelRow>

                            <PanelRow>
                                <div>
                                    <Dropdown
                                        position="bottom right"
                                        renderToggle = {
                                            ( { isOpen, onToggle } ) => (
                                                <div className="wp-coutb-buttons-container">
                                                    <div className="wp-coutb-btn__container">
                                                        <Button
                                                            isLink
                                                            onClick = { onToggle }
                                                            aria-expanded={ isOpen }
                                                        >
                                                            Background Color
                                                        </Button>
                                                    </div>

                                                    <ColorIndicator colorValue={ bgColor } />

                                                    <Button
                                                        isSecondary
                                                        isSmall
                                                        onClick = { () => setAttributes( { bgColor: '' } ) }
                                                    >
                                                        Clear
                                                    </Button>
                                                </div>
                                            )
                                        }
                                        renderContent = {
                                            () => (
                                                <ColorPicker
                                                    color = { bgColor }
                                                    disableAlpha = { true }
                                                    onChangeComplete = { color => setAttributes( { bgColor: color.hex } ) }
                                                />
                                            )
                                        }
                                    />
                                </div>
                            </PanelRow>

                            <PanelRow>
                                <div>
                                    <Dropdown
                                        position="bottom right"
                                        renderToggle = {
                                            ( { isOpen, onToggle } ) => (
                                                <div className="wp-coutb-buttons-container">
                                                    <div className="wp-coutb-btn__container">
                                                        <Button
                                                            isLink
                                                            onClick = { onToggle }
                                                            aria-expanded={ isOpen }
                                                        >
                                                            Border Color
                                                        </Button>
                                                    </div>

                                                    <ColorIndicator colorValue={ borderColor } />

                                                    <Button
                                                        isSecondary
                                                        isSmall
                                                        onClick = { () => setAttributes( { borderColor: '' } ) }
                                                    >
                                                        Clear
                                                    </Button>
                                                </div>
                                            )
                                        }
                                        renderContent = {
                                            () => (
                                                <ColorPicker
                                                    color = { borderColor }
                                                    disableAlpha = { true }
                                                    onChangeComplete = { color => setAttributes( { borderColor: color.hex } ) }
                                                />
                                            )
                                        }
                                    />
                                </div>
                            </PanelRow>

                            <PanelRow>
                                <div>
                                    <Dropdown
                                        position="bottom right"
                                        renderToggle = {
                                            ( { isOpen, onToggle } ) => (
                                                <div className="wp-coutb-buttons-container">
                                                    <div className="wp-coutb-btn__container">
                                                        <Button
                                                            isLink
                                                            onClick = { onToggle }
                                                            aria-expanded={ isOpen }
                                                        >
                                                            Text Color
                                                        </Button>
                                                    </div>

                                                    <ColorIndicator colorValue={ textColor } />

                                                    <Button
                                                        isSecondary
                                                        isSmall
                                                        onClick = { () => setAttributes( { textColor: '' } ) }
                                                    >
                                                        Clear
                                                    </Button>
                                                </div>
                                            )
                                        }
                                        renderContent = {
                                            () => (
                                                <ColorPicker
                                                    color = { textColor }
                                                    disableAlpha = { true }
                                                    onChangeComplete = { color => setAttributes( { textColor: color.hex } ) }
                                                />
                                            )
                                        }
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </InspectorControls>

                <div { ...useBlockProps() }>
                    {
                        <BlockControls />
                    }

                    <div className={`wp-coutb-callout-box ${ type }`}
                         style={{ backgroundColor: bgColor, borderColor: borderColor }}
                    >
                        <div className={`wp-coutb-callout-box__icon ${ method }`}
                             style={{ color: iconColor }}
                        >
                            <Icon icon={ icon } method={ method } />
                        </div>

                        <RichText
                            tagName="p"
                            onChange={ content => setAttributes( { content } ) }
                            value={ content }
                            style={{ color: textColor }}
                            placeholder="Type a callout text"
                        />
                    </div>
                </div>
            </Fragment>
        </>
    );
};

export default edit;
