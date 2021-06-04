import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ListView from '../listview'
import TableView from '../tableview'
import CreateTodoForm from '../create-todo-form'
import Controller from '../controllers/'
import shortid from 'shortid'

import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class Todos extends Component {
    state = {
        todos:[
            {
                it: 'asdasda',
                text: 'main todo text',
                description: 'Simple Decription',
                time: 'adasasd',
                time: new Date(),
                isCompleate: false,
                isSelect: false
            },
            {
                it: 'asdasda',
                text: 'todo text',
                description: 'Simple Decription',
                time: 'adasasd',
                time: new Date(),
                isCompleate: false,
                isSelect: false
            },

        ], 
        isOpenTodoForm: false,
        searchTerm: '',
        view:'list',
        filter: 'all'
    }
//Here is few Problem
    toggleSelsect =  todoId =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t =>t.id === todoId)
        todo.isSelect = !todo.isSelect
        this.setState({todos})
    }   
// Its Dosn't Work 
toggleComplete =  todoId =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isCompleate = !todo.isCompleate
        this.setState({todos})
    }
    createTodo = (todo) =>{
        todo.id = shortid.generate
        todo.time = new Date()
        todo.isCompleate = false
        todo.isSelect = false
        const todos = [todo, ...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }

    toggleForm = () =>{
        this.setState({
            isOpenTodoForm : !this.state.isOpenTodoForm
        })
    }
    handleSearch = (value) =>{
        this.setState({
            searchTerm: value
        })
    }
    performSearch=()=>{
        return this.state.todos.filter(todo => 
            todo.text.toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
            )
    }

    handleFilter = (filter)=>{
        this.setState({
            filter
        })
    }
    performFilter = (todos) =>{
        const {filter} = this.state
        if (filter === 'completed'){
            return todos.filter(todo=> todo.isCompleate)
        }else if(filter === 'running'){
            return todos.filter(todo=> !todo.isCompleate)
        }
        else{
            return todos
        }
    }

    changeView=(e)=>{
        this.setState({
            view: e.target.value
        })
    }

    clearSelected=()=>{
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})
    }
    clearCompleted=()=>{
        const todos = this.state.todos.filter(todo => !todo.isCompleate)
        this.setState({todos})
    }
    reset =()=>{
        this.setState({
            filter:'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false
        })
    }


    getview = ()=> {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list'?(
            <ListView todos ={todos} toggleSelsect ={this.toggleSelsect} toggleComplete={this.toggleComplete} />
        ):(
            <TableView todos ={todos} toggleSelsect ={this.toggleSelsect} toggleComplete={this.toggleComplete}/>

        )
    }


    render() {
        return (
            <div>
                <h1 className ='display-4 text-center mb-5'>My To-Do App</h1>

                <Controller 

                    term={this.state.searchTerm}
                    view={this.state.view}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter = {this.handleFilter}
                    changeView = {this.changeView}
                    clearSelected= {this.clearSelected}
                    clearCompleted = {this.clearCompleted}
                    reset = {this.reset}

                /> 

                <div>
                    {this.getview()}
                </div>
    
                <Modal 
                    isOpen={this.state.isOpenTodoForm}
                    toggle= {this.toggleForm}

                    >
                    <ModalHeader toggle = {this.toggleForm}>
                        Ceate  New Todo Items 
                    </ModalHeader>
                    <ModalBody> 
                       <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}
export default Todos 

