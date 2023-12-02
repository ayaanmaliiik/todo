import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  NavLink,
  ListGroup,
} from "react-bootstrap";

const Todo = () => {
  const [tasks, setTasks] = useState([]); //empty array
  const [currentTask, setcurrentTask] = useState(""); // empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.ceil(Math.random() * 10000), // random id for the new task
      title: currentTask, // new task name
    };

    setTasks([...tasks, newTask]); // list all the new task

    setcurrentTask(""); // set the current state to empty string for the new task to be added
  };

  const handleDelete = (id) => {
    const newcreatedTask = tasks.filter((task) => task.id !== id);
    setTasks(newcreatedTask);
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">Create your task here </h1>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    value={currentTask}
                    onChange={(e) => setcurrentTask(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="secondary" className="mt-3">
                    Create Task
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title>Todo List</Card.Title>

                <ul className="list-group">
                  {tasks.map((task) => (
                    <li
                      key={task.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {task.title}
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Todo;
