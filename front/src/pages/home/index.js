import React from 'react';
import Header from '../../components/header';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import ima from '../../assets/12.jpg'
import './styles.css';

function Home() {
   return (
        <div>
            <Header />
            <div className='Table'>
                <Item.Group divided>
                    <Item>
                        <Image src={ima} className='Folder'/>
                        <Item.Content>
                            <Item.Header as='a'>12 Years a Slave</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>Union Square 14</span>
                            </Item.Meta>
                            <Item.Description>{<Image src={ima} className='FolderPng'/>}</Item.Description>
                            <Item.Extra>
                                <Label>IMAX</Label>
                                <Label icon='globe' content='Additional Languages' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        </div>
    );
}
export default Home;