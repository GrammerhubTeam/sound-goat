import React, { useState } from "react";
import Layout from "../components/MyLayout";
import Hero from "../components/Home/Hero/Hero";

import { authenticate, loadClient, execute } from '../pages/scripts/youtube';


const Home = () => {

const [youtube, setYoutube] = useState ([]);

useEffect(()=>{
  // fetching the YT endpoint
  //Need to write the fetch statement here
  // fetch('')

}[])
  const buttonHandler = () => {
    console.log('Hey this works!!!')
    authenticate();
  }

  return (
    <Layout>
      <Hero />
        <button onClick={buttonHandler} >Music</button>
      {/* <form action="http://localhost:8080/api/v1/upload" encType="multipart/form-data" method="post">
        <input type="file" name="uploadFiles" />
        <input type="submit" value="Upload file..." />
      </form> */}
    </Layout>
  );
};

export default Home;
