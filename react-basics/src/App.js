import logo from "./logo.svg";
import "./App.css";
import HellowWorld from "./HellowWorld";
import HellowWorld1 from "./HellowWorld1";
import NoJsx from "./NoJsx";
import {Export} from "./Export";
import Wish from "./Wish";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to React JS.</p>
                {/* <HellowWorld />
                <HellowWorld1 />
                <NoJsx /> */}
                {/* <DefaultExport /> */}
                {/* <Export /> */}
                <Wish name={"Ravi"} aka={"Kakani"} />
                <Wish name={"Mydhili"} aka={"Kakani"}>
                    Has childeren
                </Wish>
                <Wish name={"Harsha"} aka={"Kotturu"} />
                <Wish name={"David"} />
            </header>
        </div>
    );
}

export default App;
