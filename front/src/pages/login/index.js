import React, { useState } from 'react';
import {
    Button,
    Divider,
    Grid,
    Segment,
    Form
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/actions/AuthActions';
import History from '../../services/history';
import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();

        dispatch(signInRequest(email, password));
    }

    function handleRegister(){
        History.push('/registro')
    }
    return (
        <div className='LoginContainer'>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form onSubmit={handleLogin} >
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Email'
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Senha'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button content='Entrar' type='submit' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button content='Cadastre-se' icon='signup' size='big' onClick={() => handleRegister()} />
                    </Grid.Column>
                </Grid>
                <Divider vertical>OU</Divider>
            </Segment>
        </div>
    );
}
export default Login;