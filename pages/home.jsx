import React from "react";
import Layout from "../components/MyLayout";
import Hero from "../components/Home/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <form action="http://localhost:8080/api/v1/upload" encType="multipart/form-data" method="post">
        <input type="file" name="uploadFiles" />
        <input type="submit" value="Upload file..." />
      </form>
    </Layout>
  );
};

export default Home;
