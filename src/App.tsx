import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { useState } from "react";

export type Note = {
  id: string;
} & NoteData;

export type RowNote = {
  id: string;
};

export type RowNoteData = {
  title: string;
  markdown: string;
  tagId: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = useLocalStorage<RowNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  return (
    <>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<h2>سلام</h2>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1>index</h1>} />
            <Route path="edit" element={<h1>edit</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
