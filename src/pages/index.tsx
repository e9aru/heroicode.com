import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage: React.FC = () => (
  <Layout>
    <SEO />
    <p>
      Hi!{" "}
      <Link
        to="https://twitter.com/e9aru"
        className="border-b-2 border-gray-900 border-opacity-60"
      >
        Marcin
      </Link>{" "}
      here, I'm making web and games.
      <br /> Drop me an email at contact[at]heroicode.com
    </p>
  </Layout>
)

export default HomePage
