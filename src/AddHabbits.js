const AddHabits = () => {
  return (
    <div class="add-habbits_container">
      <h1 class="Add-habbit-heading">
        Add <span class="create-task-heading-subpart">Habbit</span>
      </h1>
      <div>
        <label> Habbit Name: </label>
        <input
          type="text"
          id="habbitNameInput"
          class="habbit-name-input"
          placeholder="add your habbit"
        />
      </div>
      <div>
        <label> Frequency: </label>
        <input
          type="text"
          id="habbitFrequencyInput"
          class="habbit-frequency-input"
          placeholder="add your habbit"
        />
      </div>
      <button class="button" id="addHabbitButton">
        Add
      </button>
    </div>
  );
};

export default AddHabits;
