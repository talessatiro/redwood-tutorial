import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from 'src/components/Comment'

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> =
  gql`
    query CommentsQuery($postId: Int!) {
      comments(postId: $postId) {
        id
        name
        body
        postId
        createdAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="text-center text-gray-500">No comments yet...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<CommentsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  comments,
}: CellSuccessProps<CommentsQuery, CommentsQueryVariables>) => {
  return (
    <div className="flex flex-col gap-8">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
