import {useState, useEffect} from 'react'
import Post from '../../../Lect 72 Lifting State Up State Patterns/src/components/Post';

const PostSelector = () => {

  const [post, setPost] = useState(null);
  const  [postId, setPostId] = useState(1);

  const fetchPosts = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const result = await response.json();
    setPost(result);
  }

  useEffect(() => {
    fetchPosts(postId);
  }, [postId])


  const updateId = (buttonType) => {
    if(buttonType === 'next'){
      setPostId(postId+1);
    }else{
      setPostId(postId-1);
    }
  }

  return (
    <div>
      <Post post={post}/>
      <button onClick={() => updateId("next")}>Next</button>
      <button onClick={() => updateId("previous")}>Previous</button>
    </div>
  )
}

export default PostSelector