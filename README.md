
[![Web3forms](https://web3forms.com/img/web3forms-logo.svg)](https://web3forms.com/)
# Web3forms react hook 📦

Recieve form submissions directly to your inbox without any configuration. Powered by Web3forms. Integrates with react-hook-form and other form libraries too!

[![NPM](https://img.shields.io/npm/v/use-web3forms.svg)](https://www.npmjs.com/package/use-web3forms)
![Downloads](https://badgen.net/npm/dw/use-web3forms)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Size without zipping](https://badgen.net/bundlephobia/min/use-web3forms)
![Size with zipping](https://badgen.net/bundlephobia/minzip/use-web3forms)
![Zero dependencies](https://badgen.net/bundlephobia/dependency-count/use-web3forms)
![License](https://badgen.net/npm/license/use-web3forms)
![Types included](https://badgen.net/npm/types/use-web3forms)
## Features ✨

✅  Super lightweight  
✅  Zero dependencies  
✅  Full Typescript support  
✅  Easy to use and a simple Access key  
✅  Works with any form libraries  
✅  Examples provided  
✅  No configuration required (except for the Access key)  
✅  Works in [Node.js](https://github.com/Lalit2005/use-web3forms/tree/master/examples/with-node.js) (non-browser) environment too ✌️

## Demo

Coming soon!

## Installation

First get your Web3forms access from [here](https://web3forms.com/#start). And then👇

```bash
npm i @web3forms/react
```
And for yarn users👇
```bash
yarn add @web3forms/react
```
> Also please do note that the Web3forms Access key can be shared in public (just like the firebase keys).

## Usage 📖

### Javascript

```js
const { submit } = useWeb3forms({
  apikey: "YOUR_ACCESS_KEY_HERE",
  onSuccess: (successMessage, data) => {
    console.log(successMessage, data)
  },
 onError: (errorMessage, data) => {
    console.log(errorMessage, data)
  },
});
```
then just provide the data to be submitted to `submit` function

```jsx {3-6}
<button
  onClick={(e) => {
    submit({
      hello: "world",
      isWorking: "Yesss!!!",
    });
  }}>
    Submit form
</button>
```
---  

### Typescript

```js
interface FormData {
    hello: string;
    isWorking: boolean | "Probably";
}

const { submit } = useWeb3forms<FormData>({
    apikey: "YOUR_ACCESS_KEY_HERE",
    onSuccess: (successMessage, data) => {
      console.log(successMessage, data)
    },
    onError: (errorMessage, data) => {
      console.log(errorMessage, data)
    },
});
```

```jsx
<button
  onClick={(e) => {
    submit({
      hello: "world",
      isWorking: "Yesss!!!",
  });
}}>
  Submit form
</button>
```

> Make sure you provide a json with atleast one key-value pair to `submit`

For other examples please look into the [examples](https://github.com/Lalit2005/use-web3forms/tree/master/examples/) directory. If you cannot find your favourite library/framework, just open a issue or just make a tiny contribution 😉

---
## FAQ ❓

#### Should I have a Web3forms account to use this library?  
You should get your Access key from [Web3forms](https://web3forms.com/) which requires your email.

#### How many form submissions can I make?  
Web3forms has a generous free plan. You can view the latest pricing [here](https://web3forms.com/#pricing)
## Run Locally

Clone the project

```bash
git clone https://github.com/Lalit2005/use-web3forms.git
```

Go to the project directory

```bash
cd use-web3forms
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



  
