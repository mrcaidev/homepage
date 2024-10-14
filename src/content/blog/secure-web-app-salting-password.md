---
title: Secure Your Web App - Salting Passwords
description: Salting makes it harder for hackers to decode passwords, thus securing your database.
createdAt: 2024-09-22
---

Bad developers store passwords in cleartext. Ordinary developers store them in hashes. Good developers, on the other hand, utilize a technique called "salting", which adds another layer of security to their databases.

I will show you how and why.

## 🌊 Basic Flow

Salting is used during a user's registration and login process.

### Registration

![Basic flow of registration](https://media.licdn.com/dms/image/v2/D4E12AQExexj_QO5I8w/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1726997531434?e=1734566400&v=beta&t=NpnsT3TdO8igkh2gghNM_ne6HeYiINAXMYhEgGvL4YQ)

1. A new user registers his/her account with a username and a password.
2. Frontend performs a basic validation on the username and the password, and sends them to backend.
3. Backend performs a comprehensive validation on the username and the password.
4. Backend generates a random string called salt, appends it to the end of the password, and applies a hash function to the concatenated result, most likely in SHA256.
5. Backend persists the generated salt and the computed hash side by side, along with the username.

### Login

![Basic flow of login](https://media.licdn.com/dms/image/v2/D4E12AQGjRHZ0aRy6Ng/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1727012902197?e=1734566400&v=beta&t=eUNa8DeIp3D4yiC8i_Ag-HeNEao6IWbPxnQRlSBV1G8)

1. A registered user logs in to his/her account with the username and a new password. When I say new, I actually mean unknown or suspicious, because this password might be incorrect and thus different from the previous real one.
2. Frontend performs a basic validation on the username and the new password, and sends them to backend.
3. Backend performs a comprehensive validation on the username and the new password.
4. Backend retrieves the salt and hash previously stored in database, re-computes a new hash based on the new password, and compares it to the stored hash.
5. If equal, the password is successfully verified. Otherwise, the password is incorrect.

## ❓ FAQ

You might already have a bunch of questions in your mind. And I will try to answer them.

### 🤔 No Protection on Frontend?

You might have noticed that the hashing and salting are all performed on the backend side. The password itself still gets transferred between frontend and backend, un-hashed and naked.

You are half correct. It can indeed be naked, if we use HTTP without TLS, i.e. no HTTPS. The username and password will then be sent over the network in cleartext, which renders everything useless. After all, if the hacker could directly see our passwords, how could any protection help?

And that's exactly one reason why we should use HTTPS. Credentials like username and password are encrypted, so that hackers wouldn't be able to interpret. And it's free from replay attacks, thanks to the client random and server random generated during TLS handshake.

In other words, it is safe to send cleartext password over HTTPS. But feel free to add another layer of security if you want to, which will not be covered in this article, though. And when you do, be aware of the performance and bundle size issues, because now the browser might need to download some additional cryptography libraries, and hashing is not a cheap move.

Also, we can derive from above that salting is exclusively for database security. It is there to protect the password even if the database has already been compromised and breached.

### 🤔 How Is It Different from Just Hashing?

Hashing has already done a pretty good job at securing database information, because hackers cannot see the cleartext password directly.

But hackers have their siege cars. For example, with a rainbow table, the hacker already has a pre-computed map of different cleartexts to their corresponding hash values. If the hacker succeeds in finding a matched hash value, he/she can then deduce the cleartext password.

![Hacker knows Bob's password is 123456](https://media.licdn.com/dms/image/v2/D4E12AQHYbDzB0UesOA/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1727001490965?e=1734566400&v=beta&t=rRBGE6OBDbIA7Kr8LmwuabF1-moN_SmrE-eiPZ6RNVI)

But if we append a salt to the password, the hacker can no longer find a match.

![Hacker can't find a match](https://media.licdn.com/dms/image/v2/D4E12AQEk-bqA3Ea8TQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1727009958571?e=1734566400&v=beta&t=4-H2Zfco3HsVjJ80EsFJZCkqB74UelDLOBuXFcLgS6M)

### 😡 There Is Really Not Much Difference!

I know what you are thinking. If the rainbow table happens to record a mapping from "123456j#" to "873c545b", the hacker can still deduce Bob's password!

And you are right, to some extent. Because if someone has an almighty rainbow table that contains every cleartext in the universe, then every password we have ever used is surely also contained in it, so the hacker can always find a match.

But there is no such thing as "almighty", and neither is there any way to traverse every ever-existing password. Salting does not wipe out attacks entirely, but it makes the cleartext less predictable, and thus less prone to attacks.

> Wikipedia: Salting helps defend against attacks that use precomputed tables (e.g. rainbow tables), by vastly growing the size of table needed for a successful attack.

What if the developer applies the same salt to every password? I'll let you figure that out by yourself! If you come up with an answer, feel free to post it in the comment section.

### 🤔 Any Requirement on the Salt?

Not really. Wikipedia claims that any string longer than 16B should suffice.

However, the salt should be unpredictable enough. Otherwise, the hacker can append the potential salt to the rainbow table, and perform the attack once again. This time we won't be so lucky!

### 📌 Conclusion

Honestly, salting is nothing new, but many people do it wrong. So, in this article, I tried to document the flow and reason of salting in detail.

Key takeaway:

```
password_hash = SHA256(password + salt).
```
