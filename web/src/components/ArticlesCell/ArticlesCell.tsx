import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> =
  gql`
    query ArticlesQuery {
      articles: posts {
        id
        title
        body
        createdAt
        updatedAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<ArticlesQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  articles,
}: CellSuccessProps<ArticlesQuery, ArticlesQueryVariables>) => {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <Article key={article.id} article={article} summary />
      ))}
    </div>
  )
}
