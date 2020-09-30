import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

const AboutPage =() => (
    <div>
        <Layout>
            <h1>About</h1>
            <p>This is about page.</p>
            <Link to="/contact"> Contact Me!</Link>
        </Layout>
    </div>
)

export default AboutPage;