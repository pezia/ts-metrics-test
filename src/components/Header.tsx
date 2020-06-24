import React, { FC } from 'react';
import Page2 from '../pages/Page2/Page2';

export interface Props {
   name: string
};

const Header: FC<Props> = (props) => {
    return <h1>
        {props.name}
        <Page2></Page2>
    </h1>
};

export default Header;
