export default function TodoForm() {
  async function create(formData: FormData) {
    "use server";

    const payload: { [key: string]: string } = {};

    formData.forEach((value: FormDataEntryValue, key: string) => {
      if (
        typeof value === "string" &&
        (key === "title" || key === "description")
      ) {
        payload[key] = value;
      }
    });

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
