import React from 'react'
import {ListGroup, ListGroupItem,CustomInput, Button} from 'reactstrap'
import Todos from '../todos'
import PropTypes from 'prop-types'

//List Item Component 
const ListItem =({todo,toggleSelsect,toggleComplete})=>{

    return(
        <ListGroupItem className="d-flex align-items-center">

            <CustomInput
                type= 'checkbox'
                id={Todos.id}
                checked = {todo.isSelect}
                onChange={()=>toggleSelsect(todo.id)}

            />
                <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
                </div>

                <Button 
                    className='ml-auto' color={ todo.isCompleate ? 'danger':'success' } onClick={()=> toggleComplete(todo.id)}>
                    {todo.isCompleate ? 'Competed': 'Running'}
                </Button>

        </ListGroupItem>
    )
}

ListItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelsect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}

const ListView = ({todos, toggleSelsect,toggleComplete}) =>{
    return ( 
        <ListGroup>
               {todos.map(todo =>(
                   <ListItem 
                    key = {todo.id}
                    todo = {todo}
                    toggleSelsect={toggleSelsect}
                    toggleComplete = {toggleComplete}
            />
                )
                 )} 
        </ListGroup>
    )
} 
ListView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelsect: PropTypes.func.isRequired,
    toggleComplete : PropTypes.func.isRequired,
}

export default ListView