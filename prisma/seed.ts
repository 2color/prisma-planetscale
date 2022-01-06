import { PrismaClient } from '@prisma/client'
import { seedPosts } from '../lib/posts'

const prisma = new PrismaClient()

async function main() {
  const postsTxs = []

  for (const post of seedPosts) {
    postsTxs.push(
      prisma.post.create({
        data: {
          title: post.title,
          excerpt: post.excerpt,
          comments: {
            create: post.comments.map((comment) => ({ comment })),
          },
        },
      }),
    )
  }
  const posts = await prisma.$transaction(postsTxs)

  console.log(`Created ${posts.length} posts`)
}

main().finally(async () => await prisma.$disconnect())
