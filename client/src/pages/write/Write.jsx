import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import {Context} from "../../context/Context"

export default function Write() {
    const  [title,setTitle] = useState("");
    const  [desc,setdesc] = useState("");
    const  [file,setFile] = useState(null);
    //const [uploadedFilePath, setUploadedFilePath] = useState("");
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try {
                 await axios.post("/upload", data
               );
                
            } catch(err){
                console.error('Upload error:', err);
            }
        }
        try{
          const res = await axios.post("/posts", newPost);
          window.location.replace("/post/"+ res.data._id);
        } catch (err){
            console.error('Post error:', err);
        }
        
    };

  return (
    <div className="write">
        {file && (
        <img className="writeImg"
            //src={uploadedFilePath ? `/images/${uploadedFilePath}` : URL.createObjectURL(file)}
            src={URL.createObjectURL(file)}
            //src={`/images/${file.name}`}
            alt="" 
        />
        )}   
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" autoFocus={true} onChange={e=>setdesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit"  type="submit" >Publish</button>
        </form>
    </div>
  )
}
