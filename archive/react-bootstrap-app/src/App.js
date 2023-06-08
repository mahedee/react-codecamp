import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigational from "./components/Navigational";
import { Button, Stack } from "react-bootstrap";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example1 from "./components/Example1";
import AlertDismissible from "./components/AlertDismissible";
import ColorSchemesExample from "./components/ColorSchemesExample";

function App() {
  return (
    <div className="App">
      {/* <Router>
            <Navigational />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/about' component={Contact}/>
            </Switch>
        </Router> */}
      
      <ColorSchemesExample></ColorSchemesExample>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>

      <Example></Example>
      <Example1></Example1>
      <Example2></Example2>
      <AlertDismissible></AlertDismissible>
    </div>
  );
}

export default App;
