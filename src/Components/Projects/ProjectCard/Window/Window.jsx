import React from 'react';

import './macWindow.css';

const Window = ({children}) => {
        return (
            <div className="container">
                <div className="row">
                        <span className="dot" style={{background:'#ED594A',}}></span>
                        <span className="dot" style={{background:'#FDD800'}}></span>
                        <span className="dot" style={{background:'#5AC05A'}}></span>
                </div> 
                <div className="content">
                    {children}
                </div>
            </div>
        );
};

export default Window;
