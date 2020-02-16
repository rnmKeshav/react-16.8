const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { what: "the hell" }, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havaneese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "some breed"
    })
  ]);
};
