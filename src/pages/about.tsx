import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/Layout';

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2 className="text-2xl">About</h2>
        </Layout>
    );
}