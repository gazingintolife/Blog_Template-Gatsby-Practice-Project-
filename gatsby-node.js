const path = require('path')

// module.exports.onCreate = ({node, actions}) => {
//     const { createNodeField } = actions;

//     if(node.internal.type == 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }

// }
// above is the setup for using markdown files , in contentful, slugs are already generated

// What did we do here?
// we used onCreatePage to create a new field 
// for all markdown files, we created a slug,

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                        }
                    }
                }
            }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => 
    (createPage({
        component: blogTemplate,  // not actual react component, just the path to the component should be created
        path: `/blog/${edge.node.slug}`, // path where the newly created page should live
        context:{
            slug: edge.node.slug   // context provides the data that is further needed by the page
        }
    }))
    );
}



// what we do here?
// get path to Template
// get markdown data
// create new page