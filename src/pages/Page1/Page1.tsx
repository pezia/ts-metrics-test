import React, { FC } from 'react';
import Header from '../../components/Header';

const Page1: FC<{}> = () => {
    return <>
        <Header name="Foo"/>
        <h2>Bar</h2>
    </>
};

export default Page1;