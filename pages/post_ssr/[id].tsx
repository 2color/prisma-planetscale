import { GetServerSideProps } from 'next'
import PostComponent from 'components/post'
import {
  deletePost,
  incrementLikes,
  incrementViews,
  submitComment,
} from 'lib/api'
import prisma from 'lib/prisma'
import { FEComment, FEPost } from 'lib/types'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const matchedPost = await prisma.post.findUnique({
    where: {
      id: Number(params?.id),
    },
    select: {
      id: true,
      title: true,
      excerpt: true,
      likes: true,
      views: true,
      content: true,
      comments: {
        orderBy: {
          id: 'asc',
        },
      },
    },
  })
  return {
    props: {
      post: matchedPost,
    },
  }
}
type PostPageProps = {
  post: FEPost & {
    comments: FEComment[]
  }
}

const PostPage: React.FC<PostPageProps> = (props) => {
  return (
    <PostComponent
      post={props.post}
      onDeletePost={deletePost}
      onSubmitComment={submitComment}
      onLikePost={incrementLikes}
      onViewPost={incrementViews}
    />
  )
}

export default PostPage
