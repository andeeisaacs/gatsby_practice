import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from '../components/head'


// export const query = graphql`
// query (
//     $slug: String!
//   ){
//     markdownRemark (
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }`
export const query = graphql `
query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw
      references {
        title
        description
        ... on ContentfulAsset {
          contentful_id
          __typename
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
}
`



const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
           <>
            {/* Render the JSON to better visualize the object
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            */}
             <img
              src={node.data.target.fixed.src}
              alt={node.data.target.description}
            />
          </>
        )
      },
    },
  }

    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
            {/*  OLD MARKUP FOR STATIC PAGES NOT USING CONTENTFUL
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
    )
}

export default Blog