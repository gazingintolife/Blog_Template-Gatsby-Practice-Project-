import React from "react";
import Layout from "../components/layout";
import Head from '../components/head';
import {graphql} from 'gatsby';
import Img from 'gatsby-image'

export const query = graphql`
query{
	gatsbyImage: file(relativePath: {eq: "posts/list5.jpg"}){
    id
    childImageSharp{
      fluid(maxWidth: 2000){
        ...GatsbyImageSharpFluid
      }
    }
  }
} 
`

const IndexPage = ({data}) => {
  return (
    <div className="mb-12 bg-gray-300 block z-10">
      <Layout>
        <Head title = "Home"/>
        <div className=" md:flex sm:block flex-column rounded justify-between px-24 py-24 bg-blue-300 mx-16 my-16">
          
          <div className="lg:flex-initial flex-shrink-0 mx-auto min-w-0 bg-red-200 w-1/3 rounded-full mb-16 border-4 border-red-800">
            <Img fluid={data.gatsbyImage.childImageSharp.fluid} className="w-auto p-10 rounded-full" alt="Image" />
          </div>

          <div className="flex-shrink-0 mx-auto min-w-0 text-center w-1/3 py-10 mx-12 px-0 mb-16 border-red-800 border-4">
            <h1 className="my-2 mx-0 heading bg-blue-400 font-xl rounded-lg py-4 ">Hey! I am Avinash.</h1>
            <p className=" my-2 break-words mx-0 bg-blue-400 rounded px-2 py-3">I believe in bulding beautiful solutions that solve real life problems through skills I acquired and technology that's available</p>
          </div>          
        
        </div>

        <div className="h-screen">
          <div className="border-4 border-green-800 grid grid-cols-1 grid-rows-4 px-12 py-8 bg-indigo-500 h-full mx-16 my-16 rounded-lg ">
            
            <div className="flex row-span-1 w-full justify-center items-center py-4 border-4 border-green-800">
              <h1 className="text-3xl">
                skills
              </h1>
            </div>

            <div className=" grid grid-cols-4 gap-4  row-span-3 w-full py-8 px-4 border-4 border-green-800">
              
              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

              <div className="bg-red-400">
                Hi
              </div>

            </div>

          </div>
        </div>
        
      </Layout>
    </div>
  )
}
 export default IndexPage