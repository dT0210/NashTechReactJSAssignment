import { useEffect, useState } from "react";
import axios from 'axios'
import Pagination from "../components/Pagination";
const Posts = () => {
    const [posts, setPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    let postsPerPage = 10;
    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(()=>{
        const getPosts = async () => {
            await axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((result) => {
                    setPosts(result.data);
                })
                .catch(
                    console.log("Error retrieving posts from api")
                )
        };
        getPosts();
    }, []);
    return (
        <div className="p-[20px]">
            <table className="border border-black border-collapse">
                <thead>
                    <tr>
                        <th className="border border-black">Id</th>
                        <th className="border border-black">Title</th>
                        <th className="border border-black">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((post, index) => 
                        <tr className="border-b" key={index}>
                            <td className="text-center">{post.id}</td>
                            <td className="">{post.title}</td>
                            <td className="">{post.body}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination
                length={posts?.length}
                postsPerPage={postsPerPage}
                handlePagination={handlePagination}
            />
        </div>
    );
};

export default Posts;