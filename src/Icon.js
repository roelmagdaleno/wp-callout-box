import * as SolidIcons from '@heroicons/react/solid';
import upperCamelCase from 'uppercamelcase';

function Icon( props ) {
    const Component = `${ upperCamelCase( props.icon ) }Icon`;
    const Icon      = SolidIcons[ Component ];

    return (
        <Icon className={'wp-coutb-icon'} />
    );
}

export default Icon;
