import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';
import upperCamelCase from 'uppercamelcase';

function Icon( props ) {
    const methods = {
        solid: SolidIcons,
        outline: OutlineIcons
    };

    const Component = `${ upperCamelCase( props.icon ) }Icon`;
    const Icon      = methods[ props.method ][ Component ];

    return (
        <Icon className={'wp-coutb-icon'} />
    );
}

export default Icon;
