
import "./posts.css"
import Post from "../../compopnets/Post/Post"

export default function Posts({posts}) {
  return (
    <div className="posts">
        {posts.map(p => (
          <Post key={posts.id} post={p} />
        ))}
        
    </div>
  )
}


