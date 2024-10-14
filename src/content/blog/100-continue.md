---
title: Everything You Need To Know About 100 Continue
description: The HTTP status code "100 Continue" indicates that the server feels good about the initial part of a request, and the client can go on with it.
---

The HTTP status code "100 Continue" indicates that the server feels good about the initial part of a request, and the client can go on with it.

## 📌 Purpose

> It’s intended to optimize the case where an HTTP client application has an entity body to send to a server but wants to check that the server will accept the entity before it sends it.
>
> _—— HTTP: The Definitive Guide_

From the description above, we can see that "100 Continue" is mainly used as a way of optimization.

In most cases where "100 Continue" is applied, the client is about to send a LARGE entity. Let's imagine that if the client decides to directly send this entity without asking the server's opinion, an awkward situation is very likely to happen: the server refuses to accept that entity, because it's too large for it to process.

In some other cases, a user may be unauthorized to upload an image, video, etc, or simply has used PUT instead of POST due to carelessness.

These scenarios can all lead to a huge waste of time and network resources.

![Scenario without 100 Continue](https://user-images.githubusercontent.com/78269445/212549192-29cd0fc5-02a9-4662-8823-38049f42dd45.png)

As such, both the server and the client need a way to reach consensus before sending a large entity. And that's where "100 Continue" comes in handy!

## 🪄 How It Works

The client can hold the entity for a while, and send the headers first, carrying information about the entity, e.g. `Content-Length`. If it receives "100 Continue" afterwards, that means the server is willing to accept the entity. Great, we can move on to send the entity now!

![Scenario with 100 Continue](https://user-images.githubusercontent.com/78269445/212549341-65f0ec6a-3201-43a1-9966-70a0c7bdad13.png)

... or the server can reject the request. But now the entity won't be sent either, saving a pointless delivery. That's much better!

![Scenario with 100 Continue but server rejects](https://user-images.githubusercontent.com/78269445/212549472-eb1cd1da-06f7-4892-bd3b-70fa5411658e.png)

Now that we've already had a rough idea of how "100 Continue" works, let's take a closer look, from the server, the client and the proxy's perspective respectively.

## 🔍 Client Behaviors

1. If the client is expecting to receive a "100 Continue" response, it **must** set `Expect: 100-continue` in its request headers.
2. If there is no entity to send, the client **must not** set `Expect: 100-continue`. Otherwise, it will confuse the server into thinking that it's going to receive an entity.
3. For historical reasons, the client **should not** wait forever for "100 Continue".
4. If the server times out, the client **may** directly send the entity.
5. After sending the entity, the client **should** ignore every "100 Continue".
6. A common misbelief is that: "417 Expectation Failed" means that the server refuses to receive the entity. This is not the case. "417 Expectation Failed" merely indicates that the response chain does not support `Expect` header, e.g. an HTTP/1.0 server or proxy. In such cases, the client **should** simply repeat that request, but this time without `Expect: 100-continue`.

## 🔍 Server Behaviors

1. The server **must** ignore `Expect: 100-continue` in an HTTP/1.0 request.
2. If the request headers do not contain `Expect: 100-continue`, the server **must not** send "100 Continue".
3. If the entity is received before the server can check and respond to the headers, it **may** omit "100 Continue", and directly send final resopnse.
4. Upon receiving a request with `Expect: 100-continue`:
   - If the entity is acceptable, the server **must** respond with "100 Continue" to encourge the client to send the entity.
   - Otherwise, the server **must** respond with an appropriate status code as the final response, e.g. "401 Unauthorized" if an unknown user attempts to upload files, or "413 Payload Too Large" if the entity is too large to process.

## 🔍 Proxy Behaviors

1. When receiving a request with `Expect: 100-continue` from a client:
   - If the proxy knows the server only supports HTTP/1.0 or below, it **must** return either "100 Continue" or "417 Expectation Failed".
   - Otherwise, the proxy **must** forward this request along with `Expect: 100-continue`.
2. When receiving a "100 Continue" response from a server:
   - If `Expect: 100-continue` was added by the proxy itself on behalf of the client, it **must not** forward this response to the client. It should decide what to do with the response on its own.
   - Otherwise, it **must** forward this response to the client, even if the client only supports HTTP/1.0 or below.

## 🛠️ Compatibility Issues

All 1xx status codes share some compatibility issues, since they were not introduced until HTTP/1.1. As such, the server, the client and the proxy should adhere to a set of principles:

- Server: **Must not** send 1xx responses to HTTP/1.0 clients.
- Client: **Must** be able to parse 1xx responses before the final response, even if they are unexpected.
- Proxy: **Must** forward 1xx responses, except those requested by the proxy itself.

## 📚 References

1. [RFC 9110 - 15.2.1. 100 Continue](https://www.rfc-editor.org/rfc/rfc9110#section-15.2.1)
2. HTTP: The Definitive Guide - 100-199: Informational Status Codes
