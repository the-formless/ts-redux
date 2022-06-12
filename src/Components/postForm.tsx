import React from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

type FormProps = {
  createPost: Function;
}

class PostForm extends React.Component<FormProps, {title: string, body: string}> {
  constructor(props: any){
    super(props);
    this.state= {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    this.setState(() => {
      switch(e.target.name){
        case 'title':
          return {title: e.target.value, body: this.state.body};
        case 'body':
          return {title: this.state.title, body: e.target.value};
      }
    });
  }
  onSubmit(e: any){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type='text' name='title' onChange={this.onChange} value={this.state.title}/>
          </div><br />
          <div>
            <label>Body: </label><br/>
            <textarea name='body' onChange={this.onChange} value={this.state.body}/>
          </div><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {createPost})(PostForm)
