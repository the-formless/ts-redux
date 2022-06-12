import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export type PostProps = {
  title: string;
  body: string;
  userId: number,
  id: number;
}

type propTypes = {
  posts: PostProps[];
  fetchPosts: Function;
  newPost: PostProps;
}
class Posts extends React.Component<propTypes> {
  componentDidMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps:any) {
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map((post: PostProps) => {
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

const mapStateToProps = (state:any) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
