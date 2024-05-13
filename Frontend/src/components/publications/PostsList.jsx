import { Card } from "./CardPosts";

export const PostList = ({ posts }) => {
    console.log("Datos de posts:", posts); // Imprimir posts en la consola

    return (
        <div>
            {posts.map((post) => {
                if (!post._id) {
                    console.error("ID del post no definido:", post);
                    return null; // O puedes manejarlo de otra manera
                }
                return (
                    <Card
                        key={post._id} // Usar post._id en lugar de post.id
                        id={post._id} // También puedes pasar post._id a través de props si es necesario
                        title={post.title}
                        img={post.img}
                        description={post.description}
                        author={post.author}
                        url={post.url}
                        comments={post.comments}
                    />
                );
            })}
        </div>
    );
};