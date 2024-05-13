import { useState } from "react";
import toast from "react-hot-toast";
import { getPosts as getPostsRequest } from "../services/api";

export const usePublication = () => {
    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        const postsData = await getPostsRequest();
        
        if (postsData.error) {
            return toast.error(
                postsData.e?.response?.data || 'Ocurrió un error al leer los canales'
            );
        }

        setPosts(postsData.data.posts);
    };

    return {
        getPosts,
        isFetching: !Boolean(posts),
        allPosts: posts,
    };
};