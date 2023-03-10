import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'rifa', id:1},
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'dian', id:2},
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'rifa', id:3},
    ]);

    const [name, setName] = useState('rifa');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <button onClick={() => setName('rifaaa')}> Change Name </button>
           <p> {name} </p>
        </div>
     );
}
 
export default Home;