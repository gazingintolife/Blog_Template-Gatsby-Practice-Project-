import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>hello</h1>
        <h2> This is some text </h2>
        <p>Need a Developer? <Link to="/contact">Contact Me.</Link></p>
      </Layout>
    </div>
  )
}
 export default IndexPage