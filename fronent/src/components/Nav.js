import React from 'react';

function Nav(props) {
    return (
            <nav className="navbar has-background-danger is-fixed-top" >
                <div className="navbar-brand">
                    <a className="navbar-item" href="www.google.com">
                        <img style={{width:"35px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt=""/>
                        <label className="is-size-5 is-bold" style={{color:"#fff"}}>Pokedex</label>
                   </a>
                </div>
            </nav>
    );
}

export default Nav;
