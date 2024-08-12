import "./single.css"
import Sidebar from "../../compopnets/sidebar/Sidebar"
import SinglePost from "../../compopnets/singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
        {/*post*/}
        <SinglePost />
        <Sidebar />
    </div>
  )
}
