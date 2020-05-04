import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import pokeball from './pokeball.png'

class Home extends Component{
    state={
        posts : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }

    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post =>{
                return(
                    <div style={{overflow: 'hidden', paddingLeft: '80px'}} className="post card" key={post.id}>
                    <img style={{position: 'absolute', top: '20px', left:'-100px',opacity:'0.6'}} src={pokeball} alt ="a pokeball regfered"></img>
                        <div className="card-content">
                        <Link to={'/'+post.id}>
                            <span className="card-title">
                                {post.title}
                            </span>
                        </Link>
                            <p>
                                {post.body}
                            </p>
                        </div>

                    </div>
                )
            })
        ) : (
            <div className="center">Loading data...</div>
        )
        return(
            <div className="container home">
                <h4 className = "center">Home </h4>
                {postList}
            </div>
        )
    }
}
export default Home;