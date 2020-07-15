import React, { useState, useEffect } from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import { API_PRODUTO } from '../../services/api';
import { useDispatch } from 'react-redux';
import { productAdd_Request } from '../../store/modules/actions/ProductActions';
import './styles.css';
import { useParams } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const date = new Date();
    const dispatch = useDispatch();
    const [categoria, setCategoria] = useState([]);
 const [product, setProduct] = useState('');

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
        async function RequestProduct() {
            const response = await API_PRODUTO.get(`produtos/${id}`);
            console.log(response)
            if (response !== null) {
                setProduct(response.data);
            } else {
                setProduct('')
            }
        }

        RequestProduct();
        RequestProduct();
    }, [])

    function handleAdd(e) {
        dispatch(productAdd_Request(data));
    }

     const [data, setData] = useState({
        produtoId: product.produtoId,
        nome: product.nome,
        descricao: product.descricao,
        preco: product.preco,
        imagemUrl: 'http://www.macoratti.net/Imagens/coca.jpg',
        estoque: '',
        dataCadastro: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
        categoria: 'Bebidas',
        categoriaId: 1
    })



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
                        control={Select}
                        options={categoria.map((Items) => [{ key: Items.categoriaId, text: Items.nome, value: Items.nome }])}
                        label={{ children: 'Categoria', htmlFor: 'form-select-control-gender' }}
                        placeholder='Categoria'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
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
export default EditProduct;