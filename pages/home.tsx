import React from "react";
import Layout from "../components/MyLayout";
// import Hero from "../components/Home/Hero/Hero";
import { Animal, Dog, /*Cow,*/ Goat } from '../components/utils/musicTaskRunner'

const Home = () => {
  React.useEffect(() => {
    const defaultAnimal = new Animal()
    const dog = new Dog({
      name: 'Spot',
      age: 5,
    })
    const goat = new Goat({
      name: 'Grammer', 
      age: 30,
    })
    const anotherGoat = new Goat({
      name: 'Another Grammer', 
      age: 31,
      announceYourself: () => { console.log("Nah I'm different") },
      writeCode: () => console.log('we are now writing code...'),
    })

    defaultAnimal.announceYourself()
    dog.announceYourself()
    goat.announceYourself()
    anotherGoat.announceYourself()

    console.log('=======================================')

    goat.writeCode()
    anotherGoat.writeCode()

  }, [])

  return (
    <Layout>

      {/* <Hero /> */}
      <form action="http://localhost:8080/api/v1/upload" encType="multipart/form-data" method="post">
        <input type="file" name="uploadFiles" />
        <input type="submit" value="Upload file..." />
      </form>
    </Layout>
  );
};

export default Home;
