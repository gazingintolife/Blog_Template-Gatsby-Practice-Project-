import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    author
                }
            }
        }
    `)
    
    return (
        <footer className=" px-12 py-8 my-12 bg-green-600 text-center block font-semibold justify-center relative  ">
            <p> Created By {data.site.siteMetadata.author}, Copyright 2020 </p>
        </footer>
    );
}

export default Footer;