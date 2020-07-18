import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';
import History from '../../services/history';
import { useDispatch } from 'react-redux';
import { singOutResquest } from '../../store/modules/actions/AuthActions';
import './styles.css';

export default function Header() {
    const dispatch = useDispatch();

    function handleHome() {
        History.push('/home')
    }
    function handleAdd() {
        History.push('/cadastro')
    }
    function handleLogout() {
        dispatch(singOutResquest());
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
                    <Menu.Item>
                        <Button icon='sign-out' onClick={() => handleLogout()} />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

