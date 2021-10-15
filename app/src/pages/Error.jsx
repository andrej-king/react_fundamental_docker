import React from 'react';
import ChangePageTitle from '../components/ChangePageTitle'

const Error = () => {
    return (
        <div className="App">
            <ChangePageTitle titleName="404"/>
            <h1 style={{color: 'red'}}>
                404 Страница не найдена
            </h1>
        </div>
    );
};

export default Error;
