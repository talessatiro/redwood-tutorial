// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      __typename: 'Comments' as const,
      id: 42,
    },
    {
      __typename: 'Comments' as const,
      id: 43,
    },
    {
      __typename: 'Comments' as const,
      id: 44,
    },
  ],
})
