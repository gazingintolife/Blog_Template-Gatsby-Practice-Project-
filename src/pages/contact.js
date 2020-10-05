import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage =() => (
    <div>
        <Layout>
            <Head title="Contact Us"/>
            <h1>Contact Us!</h1>
            <p>Contact details will be shown here</p>
            <p>Twitter: <Link to="https://twitter.com/gazingintolife">@gazingintolife</Link></p>
        </Layout>
    </div>
)

export default ContactPage;