import React from 'react';
import Layout from '../components/layout';
import {graphql, Link, useStaticQuery} from 'gatsby';

const BlogPage =() => {
    
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(data);

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol>
                    {
                        data.allMarkdownRemark.edges.map((post) => (
                        <li>
                            <h2>
                                <Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link>
                            </h2>
                            <p>
                                {post.node.frontmatter.date}
                            </p>
                        </li>
                    ))}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage;