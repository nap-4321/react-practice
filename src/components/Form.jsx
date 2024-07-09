import React from "react";

const Form = () => {
  const [username, setUsername] = React.useState("");
  const [comments, setComment] = React.useState("");
  const [topic, setTopic] = React.useState("");

  const submitHandle = (e) => {
    console.log(username + comments + topic);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandle}>
      <div>
        <label>username</label>
        <input
          type="text"
          value={username}
          placeholder="enter username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="react">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
