---
title: How to Use Axios Interceptor in TypeScript
description: It's a common practice to retrieve res.data in an Axios response interceptor, but TypeScript knows nothing about it. How can we inform the type system?
publishedAt: 2022/11/15
---

It's a common practice to retrieve res.data in an Axios response interceptor, but TypeScript knows nothing about it. How can we inform the type system?

## 🤔 Problem

If we don't add a response interceptor, Axios will return such an object rather than the actual data:

```json
{
  "data": {
    // Actual data
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    // Response headers
  },
  "config": {
    // Axios configuration
  },
  "request": {
    // Request details
  }
}
```

So it's a common practice to add a response interceptor:

```ts
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use((res) => res.data);
const res = await axiosInstance.get("/api");
```

Thus, the `res` variable on the final line will be the actual data, saving the trouble of retrieving `res.data` every time.

But the problem is that TypeScript is not able to detect this interception. In the example above, although we actually get `res` of type `T`, TypeScript still assumes `res` to be of type `AxiosResponse<T, any>`.

## 💡 Solution

Coming from [Axios repository's issues #1510](https://github.com/axios/axios/issues/1510#issuecomment-525382535).

We can override Axios' native type declaration by manually creating a `.d.ts` file:

```ts
// src/types/index.d.ts
import axios from "axios";

declare module "axios" {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}
```

And notify TypeScript of this change in `tsconfig.json`:

```json
// tsconfig.json
{
  // ...
  "typeRoots": ["node_modules/@types", "src/types"]
}
```

We can find [the definition of `typeRoots`](https://www.typescriptlang.org/tsconfig#typeRoots) on their official documentation, which is a list of the directories containing all type declarations. In this example, we specify two directories, so TypeScript will look for the definitions of unknown types under these two directories.

The first directory, `node_modules/@types` comes from [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped), which contains common types like `@types/node`.

The second one is our custom type directory. So the next time TypeScript comes across Axios API, it will first find declarations here. Now, TypeScript knows `res` is of type `T`.
