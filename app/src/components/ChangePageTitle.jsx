import React from 'react';
import {Helmet} from 'react-helmet'

const ChangePageTitle = ({titleName}) => {
    return (
        <Helmet>
            <title>{titleName}</title>
        </Helmet>
    );
};

export default ChangePageTitle;
