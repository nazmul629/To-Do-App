import React from 'react'
import PropTypes from 'prop-types'
import {CustomInput, Button,Table} from 'reactstrap'


const RowItem = ({todo,toggleSelsect,toggleComplete})=>{
    return(

    <tr>
        <td scope='row'>
            <CustomInput  
                type= 'checkbox'
                id= {todo.id}
                checked = { todo.isSelect}
                onChange={()=> toggleSelsect(todo.id)}
                />
        </td>
        <td>{todo.time.toDateString()}</td>
        <td>{todo.text}</td>
        <td>
        <Button  color={todo.isCompleate ? 'danger':'success' } onClick={()=> toggleComplete(todo.id)} >
                    {todo.isCompleate ? 'Competed': 'Running'}
                </Button>

        </td>
    </tr>
    )

}

RowItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelsect: PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired,
}
const TableView = ({todos, toggleSelsect,toggleComplete}) =>{
    return(

    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            {todos.map(todo =>(
                <RowItem
                key = {todo.id}
                todo = {todo}
                toggleSelsect = {toggleSelsect}
                toggleComplete = {toggleComplete}
                />
            ))}
        </tbody>
    </Table>
    )
}

TableView.propTypes={
    todos: PropTypes.object.isRequired,
    toggleSelsect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}

export default TableView