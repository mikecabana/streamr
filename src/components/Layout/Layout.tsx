import React from 'react';
import { Banner } from '../Banner';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
// import styles from './Layout.module.scss';

export function Layout({ children }) {

    return (
        <>
            <div className="">
                <Banner message={'Hello world'} />
                <Nav />
                <main className="container mx-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}