// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ArticlePage = () => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.tsx</code>
      </p>
      {/*
          My default route is named `article`, link to me with:
          `<Link to={routes.article()}>Article</Link>`
      */}
    </>
  )
}

export default ArticlePage
