import React from "react";

class MyComponent extends React.Component {
    state = {
        count: 0,
        date: new Date(),
    };

    componentDidMount() {

        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        // keep setInterval method to a variable to dispose at the time of unmount
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    addClick = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    }

    tick = () => {
        console.log('Clock ticking');
        this.setState({
            date: new Date()
        });
    }

    render() {
        const{date} = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        );
    }

}

export default MyComponent;