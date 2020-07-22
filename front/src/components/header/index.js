import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import History from '../../services/history';
import { useDispatch } from 'react-redux';
import { singOutResquest } from '../../store/modules/actions/AuthActions';
import './styles.css';

function Header() {
    const dispatch = useDispatch();

    function handleHome() {
        History.push('/home')
    }
    function handleAdd() {
        History.push('/cadastro')
    }
    function handleCategory() {
        History.push('/registrarcategoria')
    }
    function handleLogout() {
        dispatch(singOutResquest());
    }
    return (
        <div>
            <Menu attached='top'>
                <Dropdown item icon='list layout' simple>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => handleHome()}
                        >
                            <Icon name='home' />
                            Início
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Icon name='add circle' />
                            <span className='text'>Cadastro</span>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                     onClick={() => handleCategory()}
                                >
                                    <Icon name='clipboard list' />
                                    Categoria
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => handleAdd()}
                                >
                                    <Icon name='cube' />
                                    Produto
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            disabled
                        >
                            <Icon name='users' />
                            Perfil
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleLogout()}
                        >
                            <Icon name='sign-out' />
                            Sair
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input'>
                            <input
                                className='prompt'
                                type='text'
                                placeholder='Search animals...'
                            />
                            <i className='search link icon' />
                        </div>
                        <div className='results' />
                    </div>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Header;