const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(0);

    return(
        <div>
            <h1 id = "display">{counter}</h1>
            <div>
                <button id = "button" onClick = { () => setCounter(counter + 1)}>Increment + </button>
            </div>
        </div>
    );
};

ReactDOM.render(
    <div className = "container">
        <Increment/>
    </div>,

    domContainer
);