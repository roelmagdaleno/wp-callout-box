import {
    RichText,
    useBlockProps
} from '@wordpress/block-editor';

import Icon from "./Icon";

const save = ( { attributes } ) => {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps }>
            <div className={`wp-coutb-callout-box ${ attributes.type }`}>
                <div className="wp-coutb-callout-box__icon">
                    <Icon icon={ attributes.icon } />
                </div>

                <RichText.Content
                    tagName="p"
                    value={ attributes.content }
                />
            </div>
        </div>
    );
};

export default save;
