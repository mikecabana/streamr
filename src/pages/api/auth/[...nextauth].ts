import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import PrismaClient from '../../../lib/data/prisma-client-provider';

const options: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        Providers.Twitch({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
            // scope: process.env.TWITCH_SCOPES,

        }),
        Providers.Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            scope: process.env.SPOTIFY_SCOPES,
        }),
        // ...add more providers here
    ],

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    adapter: PrismaAdapter(PrismaClient),

    // callbacks: {
    //     async jwt(token, user, account, profile, isNewUser) {
    //         // Add access_token to the token right after signin like when integrating with third party provider
    //         // if (account?.accessToken) {
    //         // 	token.accessToken = account.accessToken
    //         // }

    //         console.log('USER');
    //         console.log(user);

    //         console.log('ACCOUNT');
    //         console.log(account);
            
	// 		console.log('PROFILE');
    //         console.log(profile);

    //         return token;
    //     },

    //     async session(session, token) {
    //         // if (token.accessToke) {
    //         // 	session.accessToken = token.accessToken
    //         // }

    //         console.log('SESSION');
    //         console.log(session);

    //         return session;
    //     },
    // },

    // A database is optional, but required to persist accounts in a database
    // database: {
    // 	type: 'postgres',
    // 	host: process.env.DB_HOST,
    // 	port: parseInt(process.env.DB_PORT),
    // 	username: process.env.DB_USER,
    // 	password: process.env.DB_PASS,
    // 	database: process.env.DB,
    // 	synchronize: true,
    // },

    // debug: true,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
