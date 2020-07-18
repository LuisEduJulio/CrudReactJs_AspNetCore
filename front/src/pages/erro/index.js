import React from 'react';
import { Icon } from 'semantic-ui-react'
import './styles.css';

function Erro() {
    return (
        <div className='Erro'>
            <Icon.Group size='huge'>
                <Icon loading size='big' name='circle notch' />
                <Icon name='meh' />
            </Icon.Group>
            <h1>Página não existe!</h1>
        </div>
    )
}
export default Erro;