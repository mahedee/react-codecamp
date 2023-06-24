import React from "react";

export default class Emoji extends React.Component{

    // Use tick sign instead of double quatation
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    // render function takes an argument
    // its optional
    render(override){
        let text = "I am the Emoji component";
        if(override) text = override;
        return <div>{text}</div>;
    }
}