import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { Note, NoteData, Tag } from "../App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTag, setSelectedTag] = useState<Tag[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tags">
                <Form.Label>tags</Form.Label>
                <CreatableReactSelect
                  isMulti
                  value={selectedTag.map((tag) => {
                    return { label: tag.label, value: tag.id };
                  })}
                  onChange={(tags) => {
                    setSelectedTag(
                      tags.map((tag) => {
                        return { label: tag.label, id: tag.value };
                      })
                    );
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="markdown">
            <Form.Label>markdown</Form.Label>
            <Form.Control ref={markdownRef} required as="textarea" rows={10} />
          </Form.Group>
        </Stack>

        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-end my-3"
        >
          <Button type="submit" variant="primary">
            save
          </Button>

          <Link to="..">
            <Button type="button" variant="outline-secondary">
              cancel
            </Button>
          </Link>
        </Stack>
      </Form>

      <h1>NoteForm</h1>
    </>
  );
};

export default NoteForm;
