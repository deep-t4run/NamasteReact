const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "greeting",
  },
  "Welcome to Namaste React!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
