import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { categoryAdd_Request } from '../../store/modules/actions/CategoryActions';
import './styles.css';

function RegisterCategory() {
    const [data, setData] = useState({
        nome: '',
        ImagemUrl: 'http://www.macoratti.net/Imagens/5.jpg'
    });
    const dispatch = useDispatch();

    function handleAdd(e) {
        dispatch(categoryAdd_Request(data))
    }

    return (
        <div className='FormAdd'>
            <Form onSubmit={() => handleAdd()}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Nome da categoria'
                        placeholder='Categoria'
                        value={data.nome}
                        onChange={(e) => setData({ ...data, nome: e.target.value })}

                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Foto'
                        placeholder=''
                        type='number'
                        disabled
                    />
                </Form.Group>
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirmar'
                    label='Cadastrar Categoria'
                    type='submit'
                />
            </Form>
        </div>
    )
}

export default RegisterCategory;