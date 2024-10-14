---
title: Optimize Your Web App - Images Performance
description: Images are the leading cause of web performance issues. Learn how to optimize images for better performance.
createdAt: 2024-09-21
---

We love high-resolution images. A clear and vivid image makes a website visually more appealing, leaves a stronger impression on customers, and helps to better convey personal insight or business vision.

However, according to [HTTP Archive: Page Weight](https://httparchive.org/reports/page-weight), image is also one of the leading causes of web performance issues, with a staggering average page weight of ~1000 KB.

[Average page weight of images (2020 - 2024)](https://media.licdn.com/dms/image/v2/D4E12AQHknmcoHWEh_A/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1726843039957?e=1734566400&v=beta&t=Ve8auTh370wq12S3V9mWJh3gc0Q-7Z2dD6AyTrtjDIk)

This number is quite alerting, given that it far exceeds the size of HTML, CSS and JavaScript combined, and is still ever-growing. And as we all know, a heavier page weight usually means a slower loading time, and consequently a lower user retention.

[Average total page weight (2020 - 2024)](https://media.licdn.com/dms/image/v2/D4E12AQFPJdWTYFZtkQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1726843801162?e=1734566400&v=beta&t=RnI73fnyIoZbu7S6_t4ikX-00gpJo3lfykfMEiyR8Cs)

As a web developer, we are thus confronted with a dilemma - we want to deliver high-quality images to our customers; but meanwhile, we also want to reduce the page weight.

Luckily, there are numerous ways to optimize our images. Let's take a look!

## 🔽 Reduce Image Quality Undetected

Brute force solutions are always simple and intuitive. The less information an image contains, the easier it is to be compressed, thus the better the performance is.

- **Blurring:** If we only need to focus on the foreground of an image, we can safely blur the background, which reduces the total amount of information, but also keeps the important part.
- **Zooming:** This is a neat trick I learned from somewhere else before. Zoom out to 87% of the original image, and then zoom back in to 115%. At the end of the day, the size itself stays roughly the same, but many pixels vanish during the process.
- **Tools:** Leverage tools like [Squoosh](https://squoosh.app/), [Sharp](https://sharp.pixelplumbing.com/) or [Imagemin](https://github.com/imagemin/imagemin) to further compress images.

These steps applied, the size of an image could well be reduced to ~3% of the original, with humans barely noticing the difference.

[My wallpaper is compressed to 0.6% of original size by Sharp](https://media.licdn.com/dms/image/v2/D4E12AQGuhSo2XOG3zQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1726848022824?e=1734566400&v=beta&t=ofnP7bqo2Df_Zbguo4SR5Py_St10cxlCgNvsqcxIz00)

## 🎞️ Choose the Right Format

If you have tried out [Squoosh](https://squoosh.app/) before, you know what I am saying. Simply convert a PNG file to WEBP, and the image size could shrink to ~15%.

Yes, WEBP is super awesome, but it is not always the go-to choice. I list some considerations below.

- For ordinary images, choose WEBP or JPEG.
- For complex graphics, choose PNG or JPEG.
- For images with transparency, use PNG or WEBP.
- For icons, use SVG. And remove all useless shapes in it, if possible.
- For dynamic images, use videos. GIF might not be a good idea!

I feel like compression and converting tools should always be integrated into the build process, which is something Next.js and Astro are already doing.

Or we could even take a step further to offer compression and conversion in a dynamic and programmatic way, e.g. the Unsplash image API, which, given different query parameters "w" and "h", returns images of different sizes.

## 🚀 Faster Delivery over Network

Now that there is not much left to do with the original images, let's shift our focus onto the network.

- **CDN:** Cache the images closer to your customers, so that when requested, they are already within reach.
- **HTTP/2.0:** Make use of its powerful multiplexing, header compression and much more. And you probably don't need to worry about compatibility issues - HTTP/2.0 has been around [for almost 10 years](https://en.wikipedia.org/wiki/HTTP/2) at the time of writing, and all current major browsers [has long been providing support](https://caniuse.com/http2) for it. Actually, they have even been [supporting HTTP/3.0 for quite a few years](https://caniuse.com/http3).
- **HTTP caching:** Check out my other post to learn more about it. But simply put, we could set "Cache-Control: max-age" header for hashed resources, e.g. "foo-[hash].webp"; or "Last-Modified" and "ETag" headers for truly static resources, e.g. "bar.svg".

[HTTP/2.0 is widely available across major browsers](https://media.licdn.com/dms/image/v2/D4E12AQEXor25sS5T4A/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1726848148274?e=1734566400&v=beta&t=nRynChTrH1NeRn-JsY-QGF3UEiHRbmRPR6tw5KkzRa8)

## 🖼️ Responsive Images

And that's pretty much I can think of on network perspective. Let's now go and check what we can do with the actual code.

Suppose we offer a 1920 pixels wide image. For laptops, it works like a charm; but for mobile devices, they also receive that same 1920 pixels wide image, which is obviously out of their bounds and unnecessary.

"srcset" is a native attribute of `<img>`, which allows us to provide images of different sizes for devices of different widths. The "size" attribute could then be utilized to run media query based on these images.

["srcset" and "size" attribute of a responsive image](https://media.licdn.com/dms/image/v2/D4E12AQEzN8Bbw1XZ7A/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1726848742948?e=1734566400&v=beta&t=mcB21M272SrsxJGykxEu0kuJ9dtD2jqqIHCm6mzX6gc)

Typically, 3-4 alternative images would suffice. Going too far is as bad as not going far enough.

## 🛏️ Lazy Loading

Well... This could also be a brute force way of thinking. If the user can't see it, then just don't load it. And yes, lazy loading is all about delaying the loading of images, until the user really scrolls near them.

### Native Attribute

The `<img>` element provides a "loading" attribute out of the box, which defaults to "eager", but could also be set to "lazy" for native lazy loading. It's neat, clean and efficient - just type a few letters, and you get a huge performance boost.

[loading="lazy"](https://media.licdn.com/dms/image/v2/D4E12AQFyLEhh-2zooQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1726848944877?e=1734566400&v=beta&t=RzCyntbE82sgxS2GCv9Z-9uL0_7dzPNBzWJ8qpo1bKY)

By the way, many people literally know nothing about it, which confuses me quite a lot. Many interviewees are completely at a loss when I ask them about it, and most of them would instead say they implemented lazy loading by listening to scroll events. Please... don't do this unless you are smarter than the browser, and you know how to debounce, throttle, etc.

Also, it is worth noting that lazy loading is not a perfect fit for [LCP](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint). It would instead hurt the performance.

### Intersection Observer

If you want to gain more granular control over lazy loading, you may want to use [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), a native browser API. (Please don't imperatively listen to scroll events again!)

This is often used for use cases like infinite scrolling, where a user would scroll all the way down to the bottom, and a new batch of images are automatically fetched and shown.

## 📌 Conclusion

I have supposed several ways to optimize the performance of images on web applications, ranging from tweaking the image itself, to network optimization, and also explicit code control.

If I miss out anything important, please do let me know in the comment section. Any idea or suggestion is appreciated!
