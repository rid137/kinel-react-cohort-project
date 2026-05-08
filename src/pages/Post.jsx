import { useEffect, useState } from "react"
import { baseUrl } from "../utils"

const Post = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
        
            try {
                const response = await fetch(`${baseUrl}/posts`)
                console.log("response", response)
                if(!response.ok) throw new Error ("Posts are not found");

                const data = await response.json(); // It converts our reponse to normal object(parse)
                console.log("data", data)
                setPosts(data)
                setIsLoading(false);
            } catch(error) {
                console.log("error", error.message)
                setIsLoading(false);
            }
        }

        fetchPost();
    }, [])

    // Early return
    if(isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-y-6 gap-x-4 p-10">
            {
                posts?.map((post) => (
                    <article className="bg-blue-400 text-white  rounded-lg p-4 space-y-6">
                        <p>PostId: {post?.id}</p>
                        <h3>{post?.title}</h3>
                        <p>{post?.body}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default Post
