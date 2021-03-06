import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"></Avatar>
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox_imageInput" placeholder="Optional: Enter image URL" type="text" />
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
