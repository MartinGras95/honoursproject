import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function Layout(props){
    return(
            <div className="pageWrapper">
                <header>
                    <Navbar isStaff={props.isStaff} changeUserToStudent={props.changeUserToStudent} changeUserToStaff={props.changeUserToStaff} />
                </header>
                <main>
                    {props.children}
                </main>
                <Footer />
            </div>
    )
}

export default Layout;