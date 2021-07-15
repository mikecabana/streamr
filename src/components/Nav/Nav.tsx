import React from 'react'
import Link from 'next/link'
import { GlobeIcon } from '@heroicons/react/outline';

import { signIn, signOut, useSession } from 'next-auth/client';

// import styles from './Nav.module.scss';

export type NavProps = {}

export function Nav({ }: NavProps) {
    const [session, loading] = useSession();
    return (
        <div className="bg-white sticky top-0">
            <div className="container mx-auto border-b border-gray-200 flex justify-between items-center p-4 mb-8">

                <div className="flex-grow flex items-center">
                    <Link href="/">
                        <a className="mr-4">
                            <GlobeIcon className="h-10 w-10 text-indigo-700" />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="mr-4 hover:underline">
                            Home
                        </a>
                    </Link>

                    <Link href="/about">
                        <a className="mr-4 hover:underline">
                            About
                        </a>
                    </Link>
                </div>

                <div className="flex items-center">
                    {!session && <>
                        <a className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-1 hover:underline" href={`/api/auth/signin`} onClick={(e) => { e.preventDefault(); signIn(); }}>Sign in</a>
                    </>}
                    {session && <>

                        <a className="mr-4 hover:underline" href={`/api/auth/signout`} onClick={(e) => { e.preventDefault(); signOut(); }}>Sign out</a>
                        <span className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-1">{session.user.name}</span>
                    </>}
                </div>


            </div>
        </div>
    );
}