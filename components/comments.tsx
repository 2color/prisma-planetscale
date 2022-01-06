import React from 'react'
import { FEComment } from 'lib/types'
import styles from '../styles/Main.module.css'

interface CommentsProps {
  comments: FEComment[]
}

const Comments: React.FC<CommentsProps> = (props) => {
  return (
    <div className={styles.comments}>
      <h2>Comments</h2>
      <ul>
        {props.comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
