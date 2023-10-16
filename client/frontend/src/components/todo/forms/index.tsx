export default function TodoForm() {
  async function create(formData: FormData) {
    "use server";
    const payload = JSON.stringify(formData);
    console.log(payload);
  }
  return (
    <form action={create}>
      <label htmlFor="title">title</label>
      <input id="todo-title" name="title" type="text" />
      <label htmlFor="description"></label>
      <input id="todo-description" type="text" name="description" />
      <input type="checkbox" />
      <input type="submit" value="submit" />
    </form>
  );
}
