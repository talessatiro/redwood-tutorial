import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

type ArticleProps = {
  article: Post
  summary: boolean
}

const Article = ({ article, summary }: ArticleProps) => {
  return (
    <div className="bg-gray-200 p-2">
      <article>
        <header>
          <h2>
            <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          </h2>
        </header>
        <div>{article.body}</div>
        <div>Posted at: {article.createdAt}</div>
        {summary && <CommentsCell />}
      </article>
    </div>
  )
}

export default Article
