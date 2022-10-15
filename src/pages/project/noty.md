---
layout: ../../layouts/project.astro
title: NOTY
client: Self
publishDate: 2020-03-04 00:00:00
imgPreview: /assets/noteProject.jpg
img: /assets/Noty.JPG
featured: true
urlPage: https://noty-app.vercel.app/
description: |
  An app that helps users to take their notes and todos.
---

## Overview

Noty is a Full-Stack application for managing notes and todos. Users can use an email to create their accounts and use that email to login and see their notes and todos, update them or delete them.

## Tech Stack

This project is full-stack so it contains a backend and a frontend:

### Front-End

In font-end part of the app I used NextJS. I used react-query which is really great library and it's handling data fetching and caching in my app. My backend is a graphql server so I used graphql-request library in combination with react-query to fetch data from that server. For styling I used styled-components and for modifying notes lexical was my rich text editor.

### Back-End

In server-side part of this app api/ folder in NextJs is used to create an api. It uses a apollo-server to utilize a server. MongoDB and mongoose library are used for managing the database logic. Jsonwebtoken and bcrypt helping the authentication part of the app.

## Repo and Live Website

Here is a link to Noty's repo: [Noty-Repo](https://github.com/morezam/next-noty) and its live web : [Live](https://noty-app.vercel.app/)
