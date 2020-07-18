import React, { useState, useEffect } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { API_PRODUTO } from '../../services/api';
import { useDispatch } from 'react-redux';
import { productAdd_Request } from '../../store/modules/actions/ProductActions';
import './styles.css';

function Add() {
    const date = new Date();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        nome: '',
        descricao: '',
        preco: '',
        imagemUrl: 'http://www.macoratti.net/Imagens/coca.jpg',
        estoque: '',
        dataCadastro: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
        categoria: null,
        categoriaId: ''
    })
    const [categoria, setCategoria] = useState([]);

    function handleAdd(e) {
        dispatch(productAdd_Request(data));
    }


    useEffect(() => {
        async function RequestProduct() {
            const response = await API_PRODUTO.get('categorias');
            console.log(response)
            if (response !== null) {
                setCategoria(response.data);
            } else {
                setCategoria([])
            }
        }
        RequestProduct();
    }, [])

    return (
        <div className='FormAdd'>
            <Form onSubmit={() => handleAdd()}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Nome do Produto'
                        placeholder='Produto'
                        value={data.nome}
                        onChange={(e) => setData({ ...data, nome: e.target.value })}
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Valor do Produto'
                        placeholder='R$ 20,00'
                        value={data.preco}
                        type='number'
                        onChange={(e) => setData({ ...data, preco: e.target.value })}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Estoque'
                        placeholder='20'
                        value={data.estoque}
                        onChange={(e) => setData({ ...data, estoque: e.target.value })}
                    />
                    <Form.Field
                        label='Categorias'
                        control='select'
                        onChange={e => setData({ ...data, categoriaId: e.target.value })}
                    >
                        <option value='male'>Selecione um tipo</option>
                        {categoria.map((Items, key) =>
                            <option key={key} value={Items.categoriaId}>{Items.nome}</option>
                        )}
                    </Form.Field>
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Descrição'
                    placeholder='Descreva sobre o produto'
                    value={data.descricao}
                    onChange={(e) => setData({ ...data, descricao: e.target.value })}
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirmar'
                    label='Cadastrar Produto'
                    type='submit'
                />
            </Form>
        </div>
    );
}
export default Add;