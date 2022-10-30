---
title: Do you really know these HTTP Status Codes? - 1xx
description: 1xx status codes stand for "informational responses". Rather than indicating the end of a complete round of interaction, they usually serve as the middleman of other major requests.
publishedAt: 2022/10/29
---

1xx status codes stand for **"informational responses"**. Rather than indicating the end of a complete round of interaction, they usually serve as the assistants of other major requests.

They were not introduced until HTTP/1.1, which may lead to compatibility issues. As such, server, client and proxy should adhere to a set of principles:

- Server: **Must not** send 1xx responses to HTTP/1.0 clients.
- Client: **Must** be able to parse 1xx responses before the final response, even if they are unexpected.
- Proxy: **Must** forward 1xx responses, except those requested by the proxy itself.

## 100 Continue

Everything so far is OK. The client should go on with its initial request.

This is usually seen in two scenarios:

### Scenario 1

1. The client does not ask for a "100 Continue".
2. The server, however, decides to send this additional message, for whatever reason.
3. The client can safely discard this response.

![100 Continue Scenario 1](https://s2.loli.net/2022/10/30/ApkMZXyeIUwFPCa.png)

### Scenario 2

1. The client is unsure about whether the server is willing to receive a certain entity.
2. The client sends a preflight request, whose headers contain `Expect: 100-continue`, and some information about the entity.
3. The server checks the headers, and thinks that the entity is acceptable.
4. The server sends "100 Continue" as approval.
5. The client can now safely send that entity.

![100 Continue Scenario 2](https://s2.loli.net/2022/10/30/gtXJmRPvUKHWlFe.png)

Explained further in detail:

#### Client

The client wants to send an entity to the server. To avoid circumstances like "the entity is too big for the server to process", the client should send a preflight request to ask the server's opinion, and set `Expect: 100-continue` in the headers, indicating it is expecting to receive a response with "100 Continue".

`Expect: 100-continue` should **never** be set, if there is no entity to send. Otherwise, it would confuse the server into thinking that it's going to receive an entity.

For historical reasons, the client cannot wait forever for a "100 Continue". If the server times out, the client should directly send the entity anyway.

If "100 Continue" is received after the entity is sent, it should be ignored.

#### Server

After receiving a request with header `Expect: 100-continue`, the server can either return "100 Continue" as approval, or return "417 Expectation Failed" as rejection.

The server **must not** send "100 Continue", if the headers do not contain `Expect: 100-continue`.

It is worth noting that, the server may receive that entity before it can respond to the preflight request, if the client can't wait any longer and directly send the entity, as described above. In this case, the server can omit "100 Continue", and send final response directly - either "200 OK" on success, or "413 Payload Too Large" on failure.

#### Proxy

Proxy is in the middle of clients and servers, so it needs to take compatibility issues of both sides into consideration.

- When receiving a request with `Expect: 100-continue` from a client:
  - If the proxy knows the server uses HTTP/1.0 or below, return "417 Expectation Failed".
  - Otherwise, forward this request along with `Expect: 100-continue`.
- When receiving a "100 Continue" response from a server:
  - If `Expect: 100-continue` was added by the proxy on behalf of the client, it **must not** forward this response to the client. It should decide what to do with the response on its own.
  - Otherwise, it **must** forward this response to the client, even if the client is HTTP/1.0 or below.

## 101 Switching Protocols

The server agrees to upgrade the protocol to the client's demand, e.g. from HTTP/1.1 to HTTP/2.0 or WebSocket. See [MDN: Protocol upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism) for more details.

![101 Switching Protocols](https://s2.loli.net/2022/10/30/CpxjZcsK7r43gJm.png)

**HTTP/1.1 only.**

Response headers must contain `Connection: upgrade`, and specify the target protocol in `Upgrade` field, e.g. `Upgrade: websocket`.

The most common scenario using "101 Switching Protocols" is WebSocket. In fact, when we are trying to establish a WebSocket connection via:

```js
const connection = new WebSocket("ws://foo.bar");
```

The constructor `Websocket()` has already done all the work for us, including:

- Send initial HTTP/1.1 request.
- Handshake.
- Upgrade protocol to websocket.

---

_Originally posted on [mrcai.dev](http://localhost:3000/blog/posts/do-you-really-know-these-http-status-codes-1xx)._
