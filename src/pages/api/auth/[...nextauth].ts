import { NextApiRequest, NextApiResponse } from 'next';

import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		// Providers.Email({
		// 	server: {
		// 		host: process.env.EMAIL_SERVER_HOST,
		// 		port: parseInt(process.env.EMAIL_SERVER_PORT),
		// 		auth: {
		// 			user: process.env.EMAIL_SERVER_USER,
		// 			pass: process.env.EMAIL_SERVER_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.EMAIL_FROM,
		// }),
		Providers.IdentityServer4({
			id: 'demo-identityserver-io',
			name: 'demo.identityserver.io',
			scope: 'openid profile email api offline_access',
			domain: 'demo.identityserver.io',
			clientId: 'interactive.public',
			protection: 'pkce',
		}),
		// Providers.Google({
		// 	clientId: process.env.GOOGLE_ID,
		// 	clientSecret: process.env.GOOGLE_SECRET,
		// }),
		// ...add more providers here
	],

	// session: {
	// 	jwt: true,
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
