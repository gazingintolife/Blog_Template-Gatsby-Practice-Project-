import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage =() => (
    <div>
        <Layout>
            <h1>Contact Us!</h1>
            <p>Contact details will be shown here</p>
            <p>Twitter: <Link to="https://twitter.com/gazingintolife">@gazingintolife</Link></p>
        </Layout>
    </div>
)

export default ContactPage;