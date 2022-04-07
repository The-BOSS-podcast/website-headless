/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

/**
 * Add preamble to allow functional code components in studio.
 *
 * See: https://docs.plasmic.app/learn/functional-code-components/
 */
const HeadComponents = [
  <script
    key="plasmic-preamble"
    src="https://static1.plasmic.app/preamble.js"
  />,
]

const isProduction = process.env.NODE_ENV === "production"

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  /**
   * We add the preamble tag script to all pages during development mode
   * because during development all pages are dynamically rendered based
   * on `/` route, during production we add it only in `/plasmic-host/`
   */
  if (!isProduction || pathname === "/plasmic-host/") {
    setHeadComponents(HeadComponents)
  }
}