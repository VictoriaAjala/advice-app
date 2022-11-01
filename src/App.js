import axios from "axios";

import "./App.css";

class App  {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const random = Math.trunc(Math.random() * 300);
    axios
      .get(`https://api.adviceslip.com/advice/${random}`)
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(random);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
