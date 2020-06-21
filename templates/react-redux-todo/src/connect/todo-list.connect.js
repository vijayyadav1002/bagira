import { connect } from 'react-redux';
import { TodoList } from '../components/todo-list/todo-list';

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoList);