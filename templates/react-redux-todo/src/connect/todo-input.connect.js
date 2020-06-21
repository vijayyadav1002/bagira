import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.actions';
import { TodoInput } from '../components/todo-input/todo-input';

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoInput);