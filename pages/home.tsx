import React from "react";
import Layout from "../components/MyLayout";

const Home = () => {
  return (
    <Layout>
      <form
        action="http://localhost:8080/api/v1/upload"
        encType="multipart/form-data"
        method="post"
      >
        <input type="file" name="uploadFiles" />
        <input type="submit" value="Upload file..." />
      </form>
    </Layout>
  )
}

export default Home
