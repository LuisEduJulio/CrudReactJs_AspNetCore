import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './styles.css';

function RegisterUser() {
    return (
        <div className='Register'>
            <Form className='attached fluid segment'>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Nome'
                        placeholder='Nome'
                        type='text'
                    />
                    <Form.Input
                        fluid
                        label='Sobrenome'
                        placeholder='Sobrenome'
                        type='text'
                    />
                </Form.Group>
                <Form.Input label='Email' placeholder='Email' type='text' />
                <Form.Input label='Senha' type='password' />
                <Form.Checkbox inline label='I agree to the terms and conditions' />
                <Button color='blue'>Submit</Button>
            </Form>           
        </div>
    )
}

export default RegisterUser;