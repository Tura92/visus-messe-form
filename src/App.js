import "./App.scss";
import logo from "./resources/visus_logo.jpg";

function App() {
  return (
    <div className="container row" align="center">
      <div>
        <img src={logo} alt="Girl in a jacket" />
      </div>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe5pXbgUFO_XoXY84kTFZopUfMziiUB7yE4YUA0t0P1Rtwz6Q/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          //scrolling="no"
          title="Visus Form"
        >
          Wird geladen…
        </iframe>
      </div>
    </div>
  );
}

export default App;