// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

type ArticleProps = {
  id: number
}

const ArticlePage = ({ id }: ArticleProps) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
