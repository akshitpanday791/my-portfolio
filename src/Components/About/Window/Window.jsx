import React from 'react';

import './Window.css';

const Window = ({children}) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="column left">
                        <span className="dot" style={{background:'#ED594A',}}></span>
                        <span className="dot" style={{background:'#FDD800'}}></span>
                        <span className="dot" style={{background:'#5AC05A'}}></span>
                    </div>
                
                    <div className="column right">
                        <div style={{float:'right'}}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div> 
                <div className="content">
                    {children}
                </div>
            </div>
        );
};

export default Window;
