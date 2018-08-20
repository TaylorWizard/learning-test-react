import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/add-todo';
import VisibleTodoList from '../containers/visible-todo-list';

const App = () => (
    <div style={{'position': 'absolute','height': '500px', 'left': '50%', 'top': '30%'}}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;