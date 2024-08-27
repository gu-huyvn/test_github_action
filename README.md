# Getting Started

This project was bootstrapped with [Refine](https://github.com/refinedev/refine) project was generated with [create refine-app](https://github.com/refinedev/refine/tree/master/packages/create-refine-app).


# Installation
> First time environment setup when starting to work with the project.

Install dependencies with `brew`, `nvm`, `yarn`:

Supported Node version 20.*

```bash
brew install nvm
nvm install &  nvm use
brew install yarn
yarn install
```

# Development

## 1. Setting up HTTPS (optional)
```bash
brew install mkcert
cd ./certs && mkcert localhost && cd -
```

## 2. Environment variable
```
cp .env.example .env
```

## 3. Running the development server.

```bash
    yarn run dev
```

# Building

## Building for production.

```bash
    yarn run build
```

## Running the production server.

```bash
    yarn run start
```

## Learn More

To learn more about **Refine**, please check out the [Documentation](https://refine.dev/docs)

- **REST Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Material UI** [Docs](https://refine.dev/docs/ui-frameworks/mui/tutorial/)
- **Custom Auth Provider** [Docs](https://refine.dev/docs/core/providers/auth-provider/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
