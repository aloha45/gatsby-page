import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/header'

const MyPosts = ({ data }) =>  {
    return (
        <Layout>
        <Header headerText='Look at this table' />
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>UiD</th>
            <th>Directory</th>
            <th>mtime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
                <td>{node.name}</td>
                <td>{node.uid}</td>
                <td>{node.dir}</td>
                <td>{node.mtime}</td>
                </tr>
        ))}
        </tbody>
      </table>
        </Layout>
    )
    }
export const query = graphql`
  {
    allFile {
      edges {
        node {
          name
          uid
          dir
          mtime
        }
      }
    }
  }
`

export default MyPosts