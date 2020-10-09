import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import "../styles/index.css";

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className="container-w-full z-20 block bg-red-300 w-100">
            <nav className="rounded-b" >
                <ul className="flex flex-row justify-center bg-red-500 pt-4">
                    <li className="btn mx-4 mb-4"><Link  to = "/">Home</Link></li>
                    <li className="btn mx-4 mb-4"><Link  to = "/blog">Blog</Link></li>
                    <li className="btn mx-4 mb-4"><Link  to = "/about">About</Link></li>
                    <li className="btn mx-4 mb-4"><Link  to = "/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;