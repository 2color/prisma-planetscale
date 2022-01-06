import { Post, Comment } from '@prisma/client'

export type FEPost = Omit<Post, 'createdAt' | 'updatedAt'>
export type FEComment = Omit<Comment, 'createdAt' | 'updatedAt'>