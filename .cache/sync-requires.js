const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-template-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/src/templates/project-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/src/pages/contact.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/src/pages/home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/portfolio/src/pages/index.js")))
}

