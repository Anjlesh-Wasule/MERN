import "./App.css";
import Accordion from "./components/Accordion";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const [value, setValue] = useState(""); // This is the state that we want to share between the two input components
  const [post, setPost] = useState(null);


  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    setPost(result);
  }

  // if we do not call fetchPosts inside use effect every time the component is
  // rerendered fetch posts will be called, state will be set which
  // will trigger a new render - it will become an infinite loop
  useEffect(() => {
    fetchPosts();
  }, []); // dependency array empty - it means the callback will be called only on
  // the initial render
  // if no dependency array is provided then it will run on every render

  return <Post post={post} />;


  // lifting the state up
  return (
    <>
      <Accordion title="Accordion Title" />
      <Input value={value} onChange={setValue} /> // This is the first input
      component that will update the value state when the user types something
      in it
      <Input value={value} onChange={setValue} />
    </>
  );
}

export default App;
