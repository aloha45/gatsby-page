import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import styles from "./index.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title}/>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className={styles.postTitle}>
            {node.frontmatter.title}
          </h3>
          <p className={styles.byline}><small>
            Written by: {node.frontmatter.author} on {node.frontmatter.date}
          </small></p>
          <p>{node.frontmatter.description}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query myQuery{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            description
            title
          }
        }
      }
      totalCount
    }
  }
`