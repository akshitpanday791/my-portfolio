import React from 'react';

import './Window.css';

const Window = ({children}) => {
        return (
            <div className="about__container">
                <div className="about__row">
                    <div className="about__column left">
                        <span className="about__dot" style={{background:'#ED594A',}}></span>
                        <span className="about__dot" style={{background:'#FDD800'}}></span>
                        <span className="about__dot" style={{background:'#5AC05A'}}></span>
                    </div>
                </div> 
                <div className="about__content">
                    {children}
                </div>
            </div>
        );
};

export default Window;
