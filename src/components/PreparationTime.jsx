import { useMemo, useReducer } from "react";
import NoteList from "./NoteList";

const initState = {
  note1: false,
  note2: false,
  note3: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "note":
      return { ...state, [action.name]: action.value };
    case "reset":
      return initState;
    default:
      return state;
  }
};

export default function PreparationTime() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleNoteDone = (e) => {
    const name = e.target.name;
    dispatch({ type: "note", name, value: !state[name] });
  };
  const handelReset = () => {
    dispatch({ type: "reset" });
  };
  const handleTrue = useMemo(() => {
    let i = 1;
    while (i < 500000000) i++;
    return state.note1;
  }, [state.note1]);

  return (
    <section className="m-y-2 preparation">
      <h3>Preparation time</h3>
      <ul>
        <NoteList
          name="note1"
          label="Total"
          time="Approximately 10 minutes"
          state={handleTrue}
          onClick={handleNoteDone}
        />
        <NoteList
          name="note2"
          label="Preparation"
          time="5 minutes"
          state={state.note2}
          onClick={handleNoteDone}
        />
        <NoteList
          name="note3"
          label="Cooking"
          time="5 minutes"
          state={state.note3}
          onClick={handleNoteDone}
        />
      </ul>
      <button className="reset-btn" onClick={handelReset}>
        reset
      </button>
    </section>
  );
}
