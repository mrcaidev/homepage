---
title: HTTP Caching - Fresh, Stale and Revalidation
description: HTTP caching is critical to the performance of a website. Resources can be reused for a set period of time, and then revalidated to keep their freshness.
publishedAt: 2022/11/1
---

HTTP caching is critical to the performance of a website. Resources can be reused for a set period of time, and then revalidated to keep their freshness.

It can save the client the time waiting for responses and relieve the server of the burden of handling requests.

## 🍎 Fresh and Stale

Let's do this together:

1. Open your DevTools Network tab.
2. Refresh the page, and inspect the headers of any incoming response.
3. You may well find such a field: `Cache-Control: max-age=AGE`.

This is where the magic happens! The value of age indicates how long the resource will remain **fresh**, i.e. reusable. During this period, the client no longer needs to query the server for this resource, but can instead reuse the cached version of it.

Prior to HTTP/1.1, `Expires` header was adopted, but it was later deprecated due to its drawbacks. See [MDN: Expires or max-age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#expires_or_max-age).

![http-caching-fresh-stale.png](https://s2.loli.net/2022/11/01/r7gkDqwnlZzcYiW.png)

The benefit is self-evident: **No request issued, no response awaited, and a foreseeable boost in performance.**

That's awesome, but it also comes at a price, since **the server has completely lost control over the client, on that specific URL.** This places a high demand on the setting of age. A long age makes it easier for the client to see an outdated version of resource, whereas a short age makes caching nearly useless.

When the magic fades, the resource becomes **stale**. Oops! That's definitely not what we want, as we cannot enjoy the blazing fast local cache any more.

One intuitive approach would be to fetch that resource again, right? And the magic can be replayed once again. This is adequate, but not optimal.

Revalidation is a better way to replay that magic.

## 🛏️ Revalidation

We'll still have to try to fetch that resource eventually. But this time, we will include some credentials with the request that will inform the server about the current state of our local resource.

After the server validates the credentials, it will inform us whether or not our resource has become obsolete. If not, the stale resource will be refreshed, and the client will be able to reuse it for another period of time. Now the magic is back, but the server no longer needs to send that resource!

![http-caching-revalidation.png](https://s2.loli.net/2022/11/01/6AOxd3h2NleLjJU.png)

Next, we'll talk about the credentials.

### ⏱️ Revalidation Based on Time

One of the credentials is the last modified time of the resource. The basic idea is straightforward: **If a resource has not been touched since it was requested, then it's safe for the cache to be reused.**

1. When the response first arrives, the server notifies the client of the last modified time via `Last-Modified` header, e.g. `Last-Modified: Tue, 01 Nov 2022 22:00:00 GMT`.
2. When the client tries to revalidate the resource, include this particular time in the `If-Modified-Since` header.
3. The server checks whether the resource has been modified since this time, e.g. by calling `fs.stat()` in Node.js.
4. If the resource has not been modified, the server returns "304 Not Modified" or "200 OK" and the new resource otherwise.

Isn't it easy? However, it has numerous drawbacks:

- The datetime format is difficult to parse.
- The datetime can be accurate only to the second.
- The file system will consider it a modification, if the server touches the resource, but without modifying it.

And another approach is ready to come out, once those drawbacks are identified.

### 🏷️ Revalidation Based on Content

The server generates a unique tag based on the current content of the resource, such as a hash value or version number. After that, **we can reuse the resource if the tag remains the same**.

1. When the response first arrives, the server notifies the client of the tag via `ETag` header, e.g. `ETag: W/"ccd3a8bea48cdd6151d60b9fcd70fea1"`.
2. When the client tries to revalidate the resource, include this particular tag in the `If-None-Match` header.
3. The server checks whether the tag is identical to the one owned by the server.
4. if the tags are identical, the server returns "304 Not Modified", or "200 OK" and the new resource otherwise.

### 🤝 Combination of Last-Modified and ETag

Whenever these two credentials appears together, `ETag` is preferred.

Ideally, `ETag` alone would suffice for revalidation. However, `Last-Modified` is also valuable in CMS and web crawlers, so we'll often see these two credentials go hand in hand.

## 🤔 Related Cache-Control Directives

### 🚫 no-cache

Force the client to revalidate the resource every time.

**The resource will still get stored, but it turns stale immediately upon arrival**. If you are wondering how is it different from `max-age=0`: 👇

> It is often stated that the combination of `max-age=0` and `must-revalidate` has the same meaning as `no-cache`.
>
> ...
>
> But now that HTTP/1.1-conformant servers are widely deployed, there's no reason to ever use that `max-age=0` and `must-revalidate` combination — you should instead just use no-cache.
>
> —— [MDN: Force Revalidation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#force_revalidation)

### 🚫 no-store

Not storing the resource at all.

In most cases in practice, `no-cache` or `private` is often a better solution to `no-store`, while achieving the same goal.

> You may think adding `no-store` would be the right way to opt-out of caching.
>
> However, it's not recommended to grant `no-store` liberally, because you lose many advantages that HTTP and browsers have, including the browser's back/forward cache.
>
> Therefore, to get the advantages of the full feature set of the web platform, prefer the use of `no-cache` in combination with `private`.
>
> —— [MDN: What's lost by no-store](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#whats_lost_by_no-store)

### 👀 private/public

- Private caches: Typically a browser cache. User-specific. Can be used to store private user information.
- Shared caches: Shared among users.
  - Proxy caches: A proxy can cache responses, but usually only plays the role of a tunnel under HTTPS.
  - Managed caches: Like reversed proxies and CDN. Managed by developers.

![http-caching-visibility.drawio.png](https://s2.loli.net/2022/11/02/MNrg6Qu3lUwXZ9i.png)

## 📚 References

- [MDN: HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
