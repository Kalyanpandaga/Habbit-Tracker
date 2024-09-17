import "./styles.css";
import AddHabits from "./AddHabbits";

export default function App() {
  return (
    <div className="App">
      <div class="habbits-bg-container">
        <h1 class="todos-heading"> Habbits Tracker </h1>
        <AddHabits />
      </div>
    </div>
  );
}
