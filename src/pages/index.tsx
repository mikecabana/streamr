import { useSession } from 'next-auth/client';
import Head from 'next/head';

import React from 'react';
import { Layout } from '../components/Layout';

// import styles from '../styles/Home.module.scss';

export default function Home() {
    const [session, loading] = useSession();
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </Layout>
    );
}
