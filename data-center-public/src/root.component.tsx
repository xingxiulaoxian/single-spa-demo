import { RouterInstance } from "./Route";

export default function Root(props) {
  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <RouterInstance />
    </section>
  );
}
