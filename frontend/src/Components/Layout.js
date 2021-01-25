import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Jumbo from './Jumbo';


function Layout(props){
    return(
            <div>
                <Navbar />
                    <Jumbo />
                    {props.children}
                <Footer />
            </div>
    )
}

export default Layout;