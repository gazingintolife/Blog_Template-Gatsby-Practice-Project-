import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = (props) => (
    <div className="">
        <div>
            <Header/>
            <div className="block text-center">
                {props.children}
            </div>
        </div>
        <Footer/>
    </div>
) 

export default Layout;