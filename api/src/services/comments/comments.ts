import type {
  QueryResolvers,
  CommentRelationResolvers,
  MutationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = () => {
  return db.comment.findMany()
}

export const createComment: MutationResolvers['createComment'] = ({
  input,
}) => {
  return db.comment.create({ data: input })
}

export const deleteComment: MutationResolvers['deleteComment'] = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
}
