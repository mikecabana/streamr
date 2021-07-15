import Head from 'next/head';

import React from 'react';
import { Layout } from '../components/Layout';

// import styles from '../styles/Home.module.scss';

export default function Home() {

    return (<Layout>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="mb-4">
            <h1 className="text-center text-5xl">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="text-center mt-4">
                Get started by editing <code className="p-1 bg-gray-200 text-gray-600 text-sm rounded">pages/index.tsx</code>
            </p>

        </div>

        <div className="grid med:grid-cols-1 lg:grid-cols-2 gap-6">
            <a href="https://nextjs.org/docs" className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
                <h3 className="text-2xl">Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
                <h3 className="text-2xl">Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
                <h3 className="text-2xl">Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
                <h3 className="text-2xl" >Deploy &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
        </div>

    </Layout>);
}
