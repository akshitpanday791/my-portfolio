import React from 'react';

import './Window.css';

const Window = ({children}) => {
        return (
            <div className="container">
                <div className="row">
                    <div class="column left">
                        <span class="dot" style={{background:'#ED594A',}}></span>
                        <span class="dot" style={{background:'#FDD800'}}></span>
                        <span class="dot" style={{background:'#5AC05A'}}></span>
                    </div>
                
                    <div class="column right">
                        <div style={{float:'right'}}>
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </div> 
                <div class="content">
                    {children}
                </div>
            </div>
        );
};

export default Window;
