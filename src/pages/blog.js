import React from 'react';
import Layout from '../components/layout';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Head from '../components/head';

const BlogPage =() => {
    
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            )   {
                edges{
                    node{
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                        }
                    }
                }
        }
        
    `)
    console.log(data);

    return (
        <div>
            <Layout>
                <Head title="Blog"/>
                <h1>Blog</h1>
                <ol >
                    {
                        data.allContentfulBlogPost.edges.map((post) => (
                        <li >
                        <Link to={`/blog/${post.node.slug}`}>
                            <h2>
                                {post.node.title}
                            </h2>
                            <p>
                                {post.node.publishedDate}
                            </p>
                        </Link>
                        </li>
                    ))}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage;