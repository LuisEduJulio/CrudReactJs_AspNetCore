import React, { useState, useEffect } from 'react';
import { API_PRODUTO } from '../../services/api';
import { Grid, Image, Pagination, Menu, Table, List, Item } from 'semantic-ui-react';
import './styles.css';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function RequestProduct() {
            const response = await API_PRODUTO.get('produtos');
            console.log(response)
            if (response !== null) {
                setData(response.data);
            } else {
                setData([])
            }
        }
        RequestProduct();
    }, [])


    return (
        <div className='Table'>
            <Grid columns={3} divided>
                <Grid.Row>
                    {data.map((Items, key) =>
                        <Grid.Column>
                            <Item.Group className='Grid'>
                                <Item>
                                    <Item.Image size='tiny' src={Items.imagemUrl} />
                                    <Item.Content>
                                        <Item.Header as='a'>Código: {Items.produtoId}</Item.Header>
                                        <Item.Meta>Produto: {Items.nome}</Item.Meta>
                                        <Item.Extra>Descrição: {Items.descricao}</Item.Extra>
                                        <Item.Extra>Estoque: {Items.estoque}</Item.Extra>
                                        <Item.Extra>Preço: R$ {Items.preco}</Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>          
        </div>
    );
}
export default Home;