export default function Form() {
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="inputName"
        id="inputName"
        placeholder="Type a name"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
