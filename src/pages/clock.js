import React from 'react';
import Header from '../components/header'
import Layout from '../components/layout'

export default function Clock() {
    return (
    <Layout>
        <Header headerText='What time is it?'/>
        <h1>There's gonna be a clock here.</h1>
    </Layout>
    )
}