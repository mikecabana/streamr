import { GetServerSideProps } from 'next';
import { getSession, signin, signout } from 'next-auth/client';
import { FunctionComponent } from 'react';
import PrismaClient from '../lib/data/prisma-client-provider';

import { Layout } from '../components';
import { Account } from '.prisma/client';

export interface WidgetsProps {
    widgets: { type: string; description: string; enabled: boolean }[];
}

const Widgets: FunctionComponent<WidgetsProps> = ({ widgets }) => {
    const handleUnlink = () => {
        const answer = confirm('Are you sure?');
        if (answer) {
            alert('Done!');
        }
    };
    return (
        <Layout>
            <div className='grid grid-cols-3 gap-4'>
                {widgets.map((w) => (
                    <div className='bg-indigo-50 p-4 rounded shadow border border-indigo-200'>
                        <h4 className='text-lg mb-2'>{w.type}</h4>
                        <p className='mb-2'>{w.description}</p>
                        <div className='flex justify-end'>
                            {w.enabled ? (
                                <button
                                    className='bg-indigo-600 text-white hover:bg-indigo-700 rounded px-4 py-2'
                                    onClick={() => handleUnlink()}>
                                    Disable
                                </button>
                            ) : (
                                <button
                                    className='bg-indigo-600 text-white hover:bg-indigo-700 rounded px-4 py-2'
                                    onClick={() => signin('spotify')}>
                                    Enable
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
export default Widgets;

export const getServerSideProps: GetServerSideProps<WidgetsProps> = async ({ req }) => {
    const { user } = await getSession({ req });
    const accounts = await PrismaClient.account.findMany({ where: { user: { email: user.email } } });

    const accountFound = (providerId: string): boolean => {
        return !!accounts.find((a) => a.providerId === 'spotify');
    };

    return {
        props: {
            widgets: [
                {
                    type: 'spotify',
                    description: 'Show your curently playing song from spootify.',
                    enabled: accountFound('spotify'),
                },
            ],
        },
    };
};
