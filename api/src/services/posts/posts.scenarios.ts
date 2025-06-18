import type { Prisma, Post } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2025-06-18T17:54:17.890Z',
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2025-06-18T17:54:17.890Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
