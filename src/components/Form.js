export default function Form({ handleSubmitForm, handleOnChangeName }) {
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="inputName"
        id="inputName"
        placeholder="Type a name"
        onChange={handleOnChangeName}
      ></input>
    </form>
  );
}
