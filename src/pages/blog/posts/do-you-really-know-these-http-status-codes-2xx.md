---
title: Do you really know these HTTP Status Codes? - 2xx
description: 2xx status codes stand for "successful responses". They indicate a request has been successfully (sometimes partially) completed.
publishedAt: 2022/10/30
---

2xx status codes stand for "successful responses". They indicate a request has been successfully (sometimes partially) completed.

## 200 OK

The most common status code. Successful and delightful. The server understands the client, and responds with the content that the client wants. What a wonderful world!

Cacheable by default.

Used for **GET, HEAD and TRACE**.

![200 OK](https://s2.loli.net/2022/10/30/SacmH2jMKq3oDsC.png)

## 201 Created

The server has successfully created a new resource. The response body will carry the resource's url, or the resource itself, or a `Location` field in headers pointing to the resource's url.

Used for **POST**.

![201 Created](https://s2.loli.net/2022/10/30/XKaBUFDJqr7AOEf.png)

## 202 Accepted

This code is somewhat "irresponsible": The server does accept the requests, but so far there is no action taken, no guarantee of success, and no reply whatever the result.

In most cases, the request is handed over to another process or server.

The server should describe the status of the request in the response body. Better with an
estimation time of completion.

![202 Accepted](https://s2.loli.net/2022/10/30/LYgaKM2FfI5cUS3.png)

## 203 Non-Authoritative Information

The successful response does not all come from the source server.

Cacheable by default.

It is usually the proxy who will change status codes to "203 Non-Authoritative Information" as a hint to the client, after it has modified the original response.

![203 Non-Authoritative Information](https://s2.loli.net/2022/10/30/qr9eBo7TXfajN8J.png)

## 204 No Content

The request succeeds with no response body.

Cacheable by default.

Used for **PUT, PATCH and DELETE, or the client only wants the headers.**

![204 No Content](https://s2.loli.net/2022/10/30/y7tA96rkHZCqQBG.png)

## 205 Reset Content

The server instructs the client to reset the document view, e.g. clear the form, reset the canvas, or refresh the whole page.

**No response body allowed.**

![205 Reset Content](https://s2.loli.net/2022/10/30/A1OCpXmceVg3RJf.png)

## 206 Partial Content

The response body carries the partial data specified in the `Range` field of the request headers.

Cacheable by default.

If a single part is being transferred, the response headers **must** contain `Content-Type` field to specify the MIME type of the content, and `Content-Range` field to specify the content range being transferred.

If multiple parts are being transferred, the response headers **must** contain `Content-Type: multipart/byteranges; boundary=SEP`, where "SEP" is the seperator of different ranges. Then the body goes like:

```
--SEP
Content-Type: application/pdf
Content-Range: bytes 234-639/8000
...
--SEP
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000
...
--SEP--
```

![206 Partial Content](https://s2.loli.net/2022/10/30/Nj8tbcUaZsPqJl7.png)

---

_Originally posted on [mrcai.dev](http://localhost:3000/blog/posts/do-you-really-know-these-http-status-codes-2xx)._
