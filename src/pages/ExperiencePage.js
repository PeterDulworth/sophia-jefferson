import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer'

const ExperiencePage = ({ src, title, paragraphs }) => {
    return (
        <div className="ExperiencePage">
            <Nav links={[ { label: 'About Me', href: '/' }, { label: 'Work', href: '/work'} ]} active="" />
            <div className="ExperiencePage__content">
                <div className="ExperiencePage__card">
                    <img src={src} alt="logo" />
                </div>
                <h2>{title}</h2>
                {paragraphs.map(x => <p>{x}</p>)}
            </div>
            <Footer/>
        </div>
    );
};

export default ExperiencePage;
