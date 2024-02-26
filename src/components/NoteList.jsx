export default function NoteList({ state, label, time, name, onClick }) {
  return (
    <li>
      <div className="note">
        <div>
          {state ? (
            <del>
              <strong>{label}: </strong>
              {time}
            </del>
          ) : (
            <>
              <strong>{label}: </strong>
              {time}
            </>
          )}
        </div>
        <div className="note">
          {state && <div className="loader"></div>}
          <button name={name} onClick={onClick}>
            {state ? "Not Done" : "Done"}
          </button>
        </div>
      </div>
    </li>
  );
}
