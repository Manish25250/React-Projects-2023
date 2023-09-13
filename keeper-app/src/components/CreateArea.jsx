import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { Zoom } from "@mui/material";
import { Fab } from "@mui/material";

function CreateArea(props) {
  const [isexpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsExpanded(false);
    event.preventDefault();
  }

  return (
    <section>
      <form className="create-note">
        {isexpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => setIsExpanded(true)}
          value={note.content}
          placeholder="Take a note..."
          rows={isexpanded ? "3" : "2"}
        />

        <Zoom in={isexpanded}>
          <Fab onClick={submitNote}>
            <Add></Add>
          </Fab>
        </Zoom>
      </form>
    </section>
  );
}

export default CreateArea;
