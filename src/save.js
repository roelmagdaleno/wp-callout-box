import {
    RichText,
    useBlockProps
} from '@wordpress/block-editor';

import Icon from "./Icon";

function getStyles(rawStyles) {
    let styles = {
        main: {},
        icon: {},
        text: {}
    };

    if (rawStyles.bgColor) {
        style.main.backgroundColor = rawStyles.bgColor;
    }

    if (rawStyles.borderColor) {
        style.main.borderColor = rawStyles.borderColor;
    }

    if (rawStyles.iconColor) {
        styles.icon.color = rawStyles.iconColor;
    }

    if (rawStyles.textColor) {
        styles.text.color = rawStyles.textColor;
    }

    console.log(styles)

    return styles;
}

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

    const styles = getStyles({
        bgColor,
        borderColor,
        iconColor,
        textColor
    });

    return (
        <div { ...blockProps }>
            <div className={`wp-coutb-callout-box ${ type }`}
                 style={ styles.main }
            >
                <div className={`wp-coutb-callout-box__icon ${ method }`}
                     style={ styles.icon }
                >
                    <Icon icon={ icon } method={ method } />
                </div>

                <RichText.Content
                    tagName="p"
                    value={ content }
                    style={ styles.text }
                />
            </div>
        </div>
    );
};

export default save;
