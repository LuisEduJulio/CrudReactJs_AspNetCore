import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import History from '../../services/history'
import './styles.css';

export default function Header() {
    function handleHome(){
        History.push('/home')
    }
    function handleAdd(){
        History.push('/cadastro')
    }
    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='Inicio'
                    onClick={() => handleHome()}
                />
                <Menu.Item
                    name='Cadastro'
                    onClick={() => handleAdd()}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

