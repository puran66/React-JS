import React, { useRef } from 'react';
import axios from 'axios';
import { BASE_URL, POST_DATA } from '../constant';

const Comment = () => {
  const commentData = useRef();

  const handlePost = () => {
    const data = {
      comment: commentData.current.value
    }
    if (data) {
      axios.post(BASE_URL + POST_DATA, data)

      commentData.current.value = ""
    }
    else {
      console.warn("Data Not Fount")
    }
  }
  return (
    <>
      <center style={{ marginTop: "80px", marginBottom: "30px" }}>
        <h1>Post Your Comment Here</h1>
      </center>
      <div className="comment-box" style={{ display: "flex", justifyContent: "center" }}>
        <>
          <div class="form-floating" style={{ width: "800px" }}>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} ref={commentData}></textarea>
            <label for="floatingTextarea2">Comments</label>
            <center>
              <button type="button" class="btn btn-primary" style={{ width: "80px", fontSize: "18px", marginTop: "20px" }} onClick={handlePost}>Post</button>
            </center>
          </div>
        </>
      </div>
    </>
  )
}

export default Comment;
