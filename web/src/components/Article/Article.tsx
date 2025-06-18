import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

type ArticleProps = {
  article: Post
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
