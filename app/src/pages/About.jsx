import React from 'react';
import ChangePageTitle from '../components/ChangePageTitle'

const About = () => {
    return (
        <div className="App">
            <ChangePageTitle titleName="About"/>
            <h1>
                Это страница About
            </h1>
        </div>
    );
};

export default About;
