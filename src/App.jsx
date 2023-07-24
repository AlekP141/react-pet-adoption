import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Finn",
//       breed: "Short Hair Tabby",
//     }),
//     React.createElement(Pet, {
//       animal: "Fish",
//       name: "Nemo",
//       breed: "Clownfish",
//     })
//   );
// };


const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Finn" animal="Cat" breed="Short Hair Tabby" />
    <Pet name="Nemo" animal="Fish" breed="Clownfish" />
  </div>
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
