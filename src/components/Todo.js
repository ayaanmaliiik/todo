import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setcurrentTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.ceil(Math.random() * 10000),
      title: currentTask,
    };

    setTasks([...tasks, newTask]);
    setcurrentTask('');
  };

  const handleDelete = (id) => {
    const newcreatedTask = tasks.filter((task) => task.id !== id);
    setTasks(newcreatedTask);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">My Todo App</h1>

      <Row>
        {/* Todo Form */}
        <Col md={6} sm={12} className="mb-3 mb-md-0">
          <Card className="custom-card">
            <Card.Body>
              <h2 className="mb-4">Create Task</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  value={currentTask}
                  onChange={(e) => setcurrentTask(e.target.value)}
                  required
                  placeholder="Enter task"
                  className="custom-input"
                />
                <Button type="submit" variant="secondary" className="mt-3 custom-button">
                  Create Task
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Todo List */}
        <Col md={6} sm={12}>
          <Card className="custom-card">
            <Card.Body>
              <h2 className="mb-4">Todo List</h2>
              <TransitionGroup className="custom-list">
                {tasks.map((task) => (
                  <CSSTransition key={task.id} timeout={500} classNames="fade">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center custom-list-item"
                    >
                      {task.title}
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="btn btn-danger custom-delete-button"
                      >
                        Delete
                      </button>
                    </li>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
