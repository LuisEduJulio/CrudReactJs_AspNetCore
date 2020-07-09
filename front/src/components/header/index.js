import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function Header() {
    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='Inicio'
                />
                <Menu.Item
                    name='Cadastro'
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

