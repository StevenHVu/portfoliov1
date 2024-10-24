
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/portfolio.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/big2nafish/Desktop/Project/portfolio/src/pages/resume.js"))
}

