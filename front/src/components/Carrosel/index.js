import React from 'react';
import Slider from 'infinite-react-carousel';
import { Image } from 'semantic-ui-react'
import Img from '../../assets/12.jpg';
import './styles.css';

export const Carrosel = () => (
    <Slider dots className='teste'>
        <div>
            <Image src={Img} className='Im'/>
        </div>
        <div>
            <Image src={Img} />
        </div>
        <div>
            <Image src={Img} />
        </div>
        <div>
            <Image src={Img} />
        </div>
    </Slider>
);
