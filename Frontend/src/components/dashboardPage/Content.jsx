import { Route, Routes } from "react-router-dom";
import { PostList } from "../publications/PostsList";

export const Content = ({ posts, getPosts }) => {
    return (
        <div className="">
            <Routes>
                <Route path="/posts" element={<PostList posts={posts} />}/>
            </Routes>
        </div>
    );
};