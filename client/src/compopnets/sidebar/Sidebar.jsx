import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const getCats = async ()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data)
        }
        getCats();
    }, []);

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
             src="https://img.freepik.com/free-photo/young-woman-with-gladiolus-nature_23-2149441811.jpg?ga=GA1.1.1599029380.1721139850&semt=ais_user" 
             width= "275px" height= "175px"
             alt=""
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link  to={`/?cat=${c.name}`} className="link">
                                             
                        <><li key={cats.id}>{cats.name}</li><li className="sidebarListItem">
                            {c.name}
                        </li></>
                        </Link>
                    ))}
                    
                </ul>
        </div>
        <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
        </div>
    </div>
  );
}
