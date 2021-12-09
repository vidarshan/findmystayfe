<p align="center"><img src='https://user-images.githubusercontent.com/48169745/145329269-0fcf1ce2-ca6f-4ff6-8524-da36648af1c2.png'/></p>
<h1 align='center'>🏨 Findmystay</h1>
<h3 align='center'>Find the best hotels in California.</h3>
<h5 align='center'>https://findmystay.vercel.app/</h5>

## 🏁 Introduction

This website is about finding hotels in California. This is a mock website and no data in this website is actual. 

## ⚠️ Important

This project is a full-stack project. This repository is the frontend for this application which is deployed to Vercel, you can find the backend repository consisting of a Strapi application with this URL 👉🏻 [View Backend Repo](https://github.com/vidarshanadithya/findmystaybe)

## 👨‍💻 Technologies

  - Next JS
  - Tailwind CSS
  - Vercel (Deployment)

## ⚙️ Setup
Make sure that you have the [backend](https://github.com/vidarshanadithya/findmystaybe) setup first.

- Clone and install packages.

       npm install
       
- Get your backend URL, and replace the following line in config/index.js

      export const API_URL = process.env.NEXT_PUBLIC_API_URL || "<your_backend_url>";

- Start the project

       npm run dev
       
## 💣 Things to be noted

- The strapi backend may not contain data, if so remind to add data to the Strapi backend.

- Strapi `find` and `findOne` are private by default, edit those in the `roles` section's `Public` role Strapi admin.


## 🌩️ Deployment
Add the following line to the config/index.js before deploying.

       export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "<your_hosted_backend_url>";
       
   

   



