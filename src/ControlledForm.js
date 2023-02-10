import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, sethairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      console.log("Name must be two or more characters");
    }
  }, [name]);

  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={age}
        onChange={(e) => sethairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
