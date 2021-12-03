import Comics from "../comics/Comics";
import "./App.css";

class App {
  async render() {
    await Comics.render();
  }
}

export default new App();
