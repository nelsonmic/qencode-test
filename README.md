This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Getting started by cloning the repo onto your machine.

> Make sure you're using node > v20

If you have NVM installed on your machine the `.nvmrc` would pick up the right version when you run:

```
nvm use
```

Other wise install the right node version.

Next, install dependencies by running yarn

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Details

Here are a few things to note about the current implemtation:

- By design the app is setup like a production app not a demo just to show my thought process.

- The password recovery process is simulated as stated in the assignment details. A request is sent to the endpoint with the intentional expectation of failure since no user account has been created. However, when the request fails, it is treated as if it were successful. This same approach is applied to the handling of the reset password endpoint.

- The login endpoint functions correctly, except for the fact that, due to the absence of a created user account, a successful request is managed by displaying a toast notification with a default message.

## Deployed to Netlify

- [Submission link](https://main--qencode-test-nelson-michael.netlify.app/) - Click the link to interact with this demo.
