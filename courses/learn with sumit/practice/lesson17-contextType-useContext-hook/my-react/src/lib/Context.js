class Context {
    constructor(value){
        this.value = value;
    }

    // just save the value to context value and 
    // return same child
    Provider = ({children, value}) => {
        this.value = value;
        return children;
    }

    // Consumer also an anonymous function
    // return childeren with value
    Consumer = ({children}) => children(this.value);

}

// Create a context using a function component 
function createContext(value = null){
    const context = new Context(value);
    return{
        Provider: context.Provider,
        Consumer: context.Consumer
    };
}

export default createContext;