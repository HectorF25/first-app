import React from "react";
import FooterComponent from "../components/modules/footerComponent";
import HeaderComponent from "../components/modules/headerComponent";
import PostsContent from "../components/posts/postLists";
import TitlePage from "../components/titleView";
import "../assets/css/home.css";

const PostsView = () => {
  return (
    <>
      <HeaderComponent />
      <TitlePage name="Posts-api" />
      <div className="contenedor">
        <PostsContent />
      </div>
      <FooterComponent />
    </>
  );
};

export default PostsView;