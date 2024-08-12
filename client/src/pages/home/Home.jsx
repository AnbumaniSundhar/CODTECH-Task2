
import "./home.css";
import Header from '../../compopnets/header/Header'; 
import Sidebar from '../../compopnets/sidebar/Sidebar'; 
import { useLocation } from "react-router";
import Posts from "../../compopnets/posts/Posts"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
