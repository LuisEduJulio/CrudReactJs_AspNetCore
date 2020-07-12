import React, { useState } from 'react';
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Input,
    Segment,
    Form
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/actions/AuthActions';
import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();

        dispatch(signInRequest(email, password));
    }
    return (
        <div className='LoginContainer'>
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>ou</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Form onSubmit={handleLogin} className='IconLogin'>
                            <label>Email</label>
                            <Input
                                placeholder='Email'
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label>Senha</label>
                            <Input
                                placeholder='Senha'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button primary type='submit'>Entrar</Button>
                        </Form>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='world' />
                                    Registre-se
                                </Header>
                            <Button primary>Registro</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}
export default Login;