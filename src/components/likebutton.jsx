import { useState } from "react";

function LikeButton(){

    const [like, setLike] = useState(false);

    return (
        <>
            <button style={{
                background: like ? "black" : "crimson",
                color: "white"
            }} onClick={() => {setLike(!like)}}>
                {like ? "Like This Post ❤️" : "Liked the post"}
            </button>
        </>
    )
}

export default LikeButton;