import { Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tags">
                <Form.Label>tags</Form.Label>
                <CreatableReactSelect isMulti />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="markdown">
            <Form.Label>markdown</Form.Label>
            <Form.Control required as="textarea" rows={12} />
          </Form.Group>
        </Stack>

        <Stack>
            
        </Stack>
      </Form>

      <h1>NoteForm</h1>
    </>
  );
};

export default NoteForm;
