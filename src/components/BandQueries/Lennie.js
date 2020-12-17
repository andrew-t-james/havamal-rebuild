import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Lennie = () => {
  const data = useStaticQuery(graphql`
    query {
      LennieSpetze: file(relativePath: { eq: "band-photos/lennie.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.LennieSpetze.childImageSharp.fluid} />
}

export default Lennie