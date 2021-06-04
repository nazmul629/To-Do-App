import React, { Component } from 'react'
import {Form, FormGroup, Label ,Input, Button} from 'reactstrap'
import PropTypes from 'prop-types'

class CreateTodoForm extends Component {
    state = {
        text:'',
        decriptios:''
    }

    handleChange =  e =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    handleSubmit = e =>{
        e.preventDefault()
        this.props.createTodo(this.state)
        e.target.reset()
        this.setState( {text:'',decriptios:''} )
    }

    render() {
        return (
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label> Enter Task </Label>
                    <Input 
                        placeholder='Do some Code '
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label> Discribe Task </Label>
                    <Input 
                        type='textarea'
                        placeholder='write some short description about this task '
                        name='decriptios'
                        value={this.state.decriptios}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'> Create Task</Button>

            </Form>
        )
    }
}
CreateTodoForm.propTypes={
    createTodo: PropTypes.func.isRequired
}
export default CreateTodoForm