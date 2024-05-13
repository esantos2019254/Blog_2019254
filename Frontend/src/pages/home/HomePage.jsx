import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/dashboardPage/Content";
import { usePublication } from "../../shared/usePublication";
import { LoadSpinner } from "../../components/LoadSpinner";
import '../style.css';

export const HomePage = () => {
    const { getPosts, allPosts, isFetching } = usePublication();
  
    useEffect(() =>{
        getPosts();
    }, []);
  
    if(isFetching){
      return <LoadSpinner/>;
    }
  
    return (
      <div>
        <Navbar/>
        <Content posts={allPosts} getPosts={getPosts}/>
      </div>
    );
};