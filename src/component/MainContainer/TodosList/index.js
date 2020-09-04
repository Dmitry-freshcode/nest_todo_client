import React, { Component } from 'react'
import API from '../../../api/index';
import Todo from './Todo';
import styles from './Todos.module.scss';

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {            
          token: this.props.token,
          username:this.props.username,
          todos:[],
          isLoad:false,

        };
      }

      async componentDidMount(){
        this.loadTodos();
      }

      loadTodos = async() =>{
        const todos = await API.get('/todo/',{
            headers: {'Authorization': `Bearer ${this.state.token}`}      
          });
          this.setState({todos : todos.data, isLoad:true});
      }

      deleteTodo = async(id) =>{
          
        await API.delete('/todo/',{
            _id:id
        },
        {
            headers: {'Authorization': `Bearer ${this.state.token}`}      
          });
      }

      mapTodos = (todo) =>{          
          return <Todo key={todo._id} todo={todo} token={this.state.token} callBackDelete={this.deleteTodo}/>  
          
      }

    render() {
        const { todos } = this.state;
        return (<>
        <div className={styles.title}>Todo List</div>
            <div className={styles.todosList}>                
                {todos.map(this.mapTodos)}
            </div>
            <div className={styles.add}>add todo</div>
            </>
        )
    }
}
