## Getting started with Next.js and Banana

This is a [Next.js](https://nextjs.org/) template project that's preconfigured to work with Banana's API.

You can use this as a quick jumping-off point to build a web app using Banana's API

## Noteworthy files

- [pages/index.js](pages/index.js) - The React frontend that renders the home page in the browser
- [pages/api/banana.js](pages/api/banana.js) - The backend API endpoint that calls Banana's API to create a prediction

## Usage

Install dependencies(npm install):

```console
npm i
```

Add your model's [Banana API keys](https://banana.dev) to `.env.local`:

```
BANANA_API_KEY = <your_api_key_here>
BANANA_MODEL_KEY = <your_model_key_here>
```

Run the development server:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

<img src="https://user-images.githubusercontent.com/2289/208017930-a39ca4d5-2410-4049-bce0-20718480c73b.png" alt="app screenshot">
