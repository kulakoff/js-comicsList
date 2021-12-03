import "regenerator-runtime/runtime";
import App from "./components/App/App";
import Comics from "./components/comics/Comics";

(async () => {
  await App.render();
  Comics.eventListener();
})();
