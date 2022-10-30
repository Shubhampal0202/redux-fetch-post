import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/postAction'
function PostContainer() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log("state ", state)
    const { loading, posts, error } = state;
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{textTransform:"uppercase",fontFamily:"-moz-initial"}}>post Header</h2>
            <hr />
            <button onClick={() => dispatch(fetchPosts())} style={{
                width: "100px", padding: "10px 0px", border: "none",
                borderRadius: "6px", cursor: "pointer",backgroundColor:"#087f5b",color:"white",fontSize:"16px",marginTop:"10px"
            }}>fetch post</button>
            {
                loading ? <h2>Loading...</h2> :
                    error ? <h2>{error}</h2> :
                        posts &&
                        posts.map((post) => {
                            return (
                                <div key={post.id} style={{
                                    width: "50%",
                                    margin: "20px auto", textAlign: "center", padding: "16px", letterSpacing: "1px",
                                    boxShadow: "0px 2px 8px #666", borderRadius: "6px", fontSize: "20px"
                                }}>
                                    <div> <strong>Title</strong>
                                        <div>{post.title}</div></div>
                                    <div style={{ marginTop: "10px" }}>  <strong>Body</strong>
                                        <div>{post.body}</div></div>

                                </div>
                            )
                        })
            }

        </div>
    )
}

export default PostContainer