import React from "react";

export default class Emoji extends React.Component{
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    // return the childrend addEmoji function
    render(){
        return this.props.children({addEmoji: this.addEmoji});
    }
}