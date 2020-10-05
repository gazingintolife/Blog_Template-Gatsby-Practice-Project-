import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage =() => (
    <div>
        <Layout>
            <Head title="About Me"/>
            <h1>About</h1>
            <p>This is about page.</p>
            <Link to="/contact"> Contact Me!</Link>
        </Layout>
    </div>
)

export default AboutPage;