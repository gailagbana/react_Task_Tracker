import { useState } from "react";

const AddTask = ({ onAdd, showAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <input
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add the date and time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Would you like to set a reminder for your task? </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" onClick={onSubmit} />
    </form>
  );
};

export default AddTask;
