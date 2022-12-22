---
layout: ../../layouts/project.astro
title: Yoloshop
client: Self
publishDate: 2022-12-03 00:00:00
imgPreview: /assets/shopProject.jpg
img: /assets/yoloshop.png
featured: true
urlPage: https://yoloshop.up.railway.app/
description: |
  Full-stack shopping app.
---

## Overview

Yoloshop is a full-stack shopping app. Users after creating their accounts receive an email to verify their email address then they can comment a product , like or dislike a comment and add a product to their favorite list. They can add products to cart and checkout to buy them. They can see the status of that order in orders page of their profile. they can also see all of their comments and all of their favorites.
Admin can see all orders and set the status of that order to delivered. Admin can see all of comments and delete them, all products and delete or edit them, all users and delete them or make them admin and create a product.

## Tech Stack

This project is full-stack:

### Front-End

In font-end part of the app I used React with typescript. For styling I used tailwindcss. I used react-query which is really great library and it's handling data fetching and caching in my app.I used axios in combination with react-query to fetch data from the api.React-router helped me to handle routing and react-hook-form for form handlings.

### Back-End

In back-end I used express and typescript to create a server. Mongodb and mongoose for database. bcrypt and JWT for authentication and node-mailer for sending verification email.

## Repo and Live Website

Here is a link to Yoloshop's repo: [Yoloshop-repo](https://github.com/morezam/yoloshop) and its live web : [Live](https://yoloshop.up.railway.app/)
