import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { timeTag } from 'src/lib/formatters'

type ArticleProps = {
  article: Post
  summary: boolean
}

const Article = ({ article, summary }: ArticleProps) => {
  return (
    <article>
      <div className="text-xs">
        <time className="text-gray-500">{timeTag(article.createdAt)}</time>
      </div>
      <div className="flex flex-col gap-1">
        <Link
          className="mt-3 text-lg font-semibold text-gray-900 hover:underline"
          to={routes.article({ id: article.id })}
        >
          {article.title}
        </Link>
        <p className="text-sm text-gray-600">{article.body}</p>
      </div>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id} />
          <div className="mt-12">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
