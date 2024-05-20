import { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (description !== "") {
        const body = { description };
        //fetch() function is a modern web API for making HTTP requests
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" }, //indicates that req body contains JSON data
          body: JSON.stringify(body),
        });

        //refreshes the page and show the changes
        window.location = "/";
      } else {
        alert("Please enter a description");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
