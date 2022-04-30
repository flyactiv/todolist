import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const CreateRecipePage=()=>{

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show,setShow]=useState(false);

    const createRecipe = (data) => {
        console.log(data)

        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
        console.log(token)


        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(data)

        }

        fetch('/recipe/recipes', requestOptions)
            .then(res => res.json())
            .then(data => {
                reset()
            })
            .catch(err => console.log(err))

    }


    return(
        <div className="container">
           
        <h1>Create A Todo</h1>
        <form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                    {...register('title', { required: true, maxLength: 50 })}
                />
            </Form.Group>
            {errors.title && <p style={{ color: 'red' }}><small>Title is required</small></p>}
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5}
                    {...register('description', { required: true, maxLength: 255 })}
                />
            </Form.Group>
            {errors.description && <p style={{ color: 'red' }}><small>Description is required</small></p>}
            <br></br>
            <Form.Group>
                <Button variant="primary" onClick={handleSubmit(createRecipe)}>
                    Save
                </Button>
            </Form.Group>
        </form>
    </div>
    )
}

export default CreateRecipePage