[![Web3forms](https://web3forms.com/img/logo-light.svg)](https://web3forms.com/)

# Web3forms React Plugin

Recieve form submissions directly to your inbox without any backend or server. Powered by Web3Forms. Easily Integrates with Next.js & plugins like `react-hook-form` and other form libraries!

[![NPM](https://img.shields.io/npm/v/@web3forms/react.svg)](https://www.npmjs.com/package/@webforms/react)
![Downloads](https://badgen.net/npm/dw/@web3forms/react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Size without zipping](https://badgen.net/bundlephobia/min/@web3forms/react)
![Size with zipping](https://badgen.net/bundlephobia/minzip/@web3forms/react)
![Zero dependencies](https://badgen.net/bundlephobia/dependency-count/@web3forms/react)
![License](https://badgen.net/npm/license/@web3forms/react)
![Types included](https://badgen.net/npm/types/@web3forms/react)

## Features ✨

- ✅ Super lightweight
- ✅ Zero dependencies
- ✅ Full Typescript support
- ✅ Easy to use and a simple Access key
- ✅ Works with any form libraries
- ✅ Examples provided
- ✅ No configuration required (except for the Access key)
- ✅ Works in [Node.js](https://github.com/web3forms/web3forms-react/tree/main/examples/with-node.js) (non-browser) environment too ✌️

## Demo

<https://web3forms.com/examples>

For other examples please look into the [examples](https://github.com/web3forms/web3forms-react/tree/main/examples/) directory.

## Installation

First, create your Web3forms Access Key from [web3forms.com](https://web3forms.com/#start).

```bash
npm i @web3forms/react
# or
yarn add @web3forms/react
```

> Note: Web3forms Access key can be shared in public code.

## Usage 📖

### Javascript

```js
// Import Plugin
import useWeb3Forms from '@web3forms/react';

// Add inside your function
const accessKey = 'YOUR_ACCESS_KEY_HERE';
const { submit } = useWeb3Forms({
  access_key: accessKey,
  settings: {
    from_name: 'Acme Inc',
    subject: 'New Contact Message from your Website',
  },
  onSuccess: (message, data) => {
    console.log(message);
  },
  onError: (message, data) => {
    console.log(message);
  },
});
```

then just provide the data to be submitted to `submit` function

```jsx {3-6}
<button
  onClick={(e) => {
    submit({
      name: 'John',
      email: 'john@email.com',
      message: 'Message Content',
    });
  }}>
  Submit form
</button>
```

or using the React Hook Form

```jsx
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
//
export default function Form() {
const {register, handleSubmit} = useForm();
//
const { submit: onSubmit } = useWeb3Forms({
  access_key: apiKey,
  settings: {
    from_name: 'Acme Inc',
    subject: 'New Contact Message from your Website',
  },
  onSuccess: (message, data) => {
    console.log(message);
  },
  onError: (message, data) => {
    console.log(message);
  },
});
//
  return (
<form onSubmit={handleSubmit(submit)}>
  <input
    type='text'
    {...register('name', {
      required: 'Full name is required',
      maxLength: 80,
    })}
  />
  <input
    type='email'
    {...register('email', {
      required: 'Enter your email',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Please enter a valid email',
      },
    })}
  />
  <textarea
    {...register('message', {
      required: 'Enter your Message',
    })}
  />
  <button type='submit'>Submit Form</button>
</form>;
  )
}
```

---

### Typescript

```js
interface FormData {
  name: string;
  checkbox: boolean;
}

const { submit } =
  useWeb3forms <
  FormData >
  {
    access_key: 'YOUR_ACCESS_KEY_HERE',
    onSuccess: (successMessage, data) => {
      console.log(successMessage, data);
    },
    onError: (errorMessage, data) => {
      console.log(errorMessage, data);
    },
  };
```

> Make sure you provide a json with atleast one key-value pair to `submit`

---

## FAQ

#### Should I have a Web3forms account to use this library?

Yes. You should create your Access key from [Web3forms](https://web3forms.com/).

#### How many form submissions can I make?

Web3forms has a generous free plan. You can view the latest pricing [here](https://web3forms.com/#pricing)

## Run Locally

Clone the project

```bash
git clone https://github.com/web3forms/web3forms-react.git
```

Go to the project directory

```bash
cd web3forms-react
```

Install dependencies

```bash
yarn
```

Start the server

```bash
yarn dev
```

`yarn dev` first builds the project so that the type definitions are emitted to `dist` and then `microbundle` starts watching for file changes.

## Credits

This plugin is originally created by our community member [Lalit2005](https://github.com/Lalit2005). We sincerely thank them for their contributions.
