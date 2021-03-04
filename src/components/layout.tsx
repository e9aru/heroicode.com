/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../images/logo.inline.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section className="text flex flex-row flex-wrap h-screen">
      <div className="my-auto w-full bg-yellow-50">
        <div className="max-w-md mx-auto py-8 px-1">
          <header className="flex items-center mt-auto mb-0">
            <Logo className="w-20 border-4 border-gray-900 rounded-md p-1 mr-1" />
            <h1 className="text-6xl">{data.site.siteMetadata.title}</h1>
          </header>
          <main className="max-w-md mx-auto space-y-2 mb-auto mt-6">
            {children}
          </main>
        </div>
      </div>
    </section>
  )
}

export default Layout
