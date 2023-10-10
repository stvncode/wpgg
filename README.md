# 🚀 FullStack Auth Starter Repo

Welcome to a FullStack Auth Starter Repo - your one-stop solution to kickstart robust, scalable, and seamlessly connected backend and frontend applications with user authentication implemented right out of the box!

## 🎯 Purpose

This repository provides a comprehensive starter kit for developers looking to build applications that require user authentication. It's engineered with some of the best technologies in the JavaScript/TypeScript ecosystem, ensuring a smooth development experience and a high-quality application structure.

### 🏗️ Stack Used

#### Server

- **tRPC**: End-to-end typesafe APIs made easy.
- **Prisma**: Next-gen ORM for Node.js and TypeScript.
- **Fastify**: Efficient and low overhead web framework, for high-performance applications.
- **Pino**: Super fast, all natural json logger.
- **jsonwebtoken**: A robust library to work with JSON Web Tokens.

#### Client

- **React**: A JavaScript library for building user interfaces.
- **tRPC-client**: A client for trpc.
- **Radix UI**: Low-level UI primitives to build high-quality, accessible design systems without sacrificing style.
- **Stitches**: Modern CSS-in-JS with near-zero runtime.
- **React-query**: A powerful server-runtime for React to create APIs.
- **React Hook Form**: Manage your forms state efficiently.
- **Zod**: Schema declaration and validation.
- **Framer Motion**: A production-ready motion library for React.
- **ts-pattern**: Pattern matching library for TypeScript.

... and many more awesome technologies!

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) - If not installed, install it using `npm install -g pnpm`
- [Supabase](https://supabase.com/) - Need to create a db (otherwise use the one from prisma)

## 🏁 Getting Started

Clone the repository to your local machine to get started with robust full-stack development.

## 🌍 Environment Variables

Environment variables are crucial for running this application securely and correctly. Create a `.env` file in your `server` directory and adjust the variables according to your development/production environments.

Here's a template of what your `apps/server/.env` file should look like:

```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

NODE_ENV='development'
SECRET_KEY='your-secret-key-here' # e.g., q3tOxZnPwKfZQzlHj7aLy6VNyJkUbB9zVuDn1Lx2pEiX8jHkUd
JWT_EXPIRES_IN='7d'
APP_PORT=5991
API_PREFIX=trpc
SUPABASE_API_KEY='your-supabase-api-key-here' # e.g., eyJpYXQiOjE2MTkx...
DATABASE_URL='your-database-url-here' # e.g., postgresql://user:password@your-database-url:5432/your-db-name
```

For the client side, you need to configure the environment variables to ensure that it can communicate effectively with the server.

Navigate to your `apps/client` directory and create a `.env` file with the following structure:

```env
VITE_API_URL="http://localhost:YOUR_APP_PORT/API_PREFIX"
```

## 🛠️ Installation and commands

Run the following commands:

```shell
pnpm install
```

### Server

You'll need to init prisma:

```shell
pnpm migrate
```

Finally, you can start the server:

```shell
pnpm install
```

### Client

Simply run:

```shell
pnpm dev
```

## 🎉 Congratulations!

The client app should now be running at http://localhost:2310 (or your specified port).
You have successfully set up both the server and client locally! Feel free to explore, develop, and contribute to the FullStack Auth Starter.

## 🤝 Contributing

Contributions are welcomed! This project is far from optimal, don't hesitate to add cool stuff!

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👥 Authors & Acknowledgment

👤 **[Steven Travers](https://portfolio-ruddy-seven-88.vercel.app/)**

## Notes:

- Make sure the real secrets and sensitive data are securely stored and shared through secure channels.
- Instruct collaborators and users to create their secrets for API keys, JWT secrets, and any other sensitive data.
- You might want to explore using different `.env` files for different environments (e.g., `.env.development`, `.env.production`), and utilize tools/libraries that manage environment variables for different NODE_ENV values.
