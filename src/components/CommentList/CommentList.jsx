import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => {

  return (
    <div className="CommentList">

      {post.comments.map(comment => (
         <CommentInfo key={comment.id} comment={comment} />
       ))}

    </div>
  );
};
