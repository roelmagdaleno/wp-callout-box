import {
    RichText,
    useBlockProps
} from '@wordpress/block-editor';

import Icon from "./Icon";

const save = ( { attributes } ) => {
    const blockProps = useBlockProps.save();
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

    return (
        <div { ...blockProps }>
            <div className={`wp-coutb-callout-box ${ type }`}
                 style={{ backgroundColor: bgColor, borderColor: borderColor }}
            >
                <div className={`wp-coutb-callout-box__icon ${ method }`}
                     style={{ color: iconColor }}
                >
                    <Icon icon={ icon } method={ method } />
                </div>

                <RichText.Content
                    tagName="p"
                    value={ content }
                    style={{ color: textColor }}
                />
            </div>
        </div>
    );
};

export default save;
