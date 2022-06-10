import React from 'react'

export type PostProps = {
  title: string;
  body: string;
  userId: number,
  id: number;
}

type postsState = {
  posts: PostProps[];
}
class Posts extends React.Component {

  state: postsState = {
    posts: []
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({posts: data}));
  }
  render() {
    const postItems = this.state.posts.map((post: PostProps) => {
      return(
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    });
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;
