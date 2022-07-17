# 💲 Crypto Listing Application

---

![image](https://user-images.githubusercontent.com/35108041/179427661-42059060-9b15-4787-9bb0-ae517f681bfb.png)

---

## 🔧 Tech Stack
  * [Next.js](https://nextjs.org/) - Frontend Framework
  * [Tailwind CSS](https://tailwindcss.com/) - Utility CSS Framework

### 🔩 Sub Dependencies
  * [Chart.js](https://www.chartjs.org/) - Charting Tool
  * [Next-Thems](https://next-themes-example.vercel.app/) - Dark Theme
  * [Heroicons](https://heroicons.com/) - Icon Library
  
---

## 🔬 How to reproduce?
Clone the repo and run locally
```js
$ npm install
$ npm run dev
```

---

## 📚 Overview and Structure
* This project consists of two screens, first one displaying multiple crypto coin data fetched from a certain `json` endpoint, while the other screen displays the line graph between `coin value` and `datetime` of a coin along with `coinID` which is being passed from screen 1 to screen 2.
* `[slug].js` is used to create dynamic routes for displaying Line Chart and different Coin IDs based upon user selection.
* Using `getServerSideProps` (in `slug` route) & `getStaticProps` (in `/` route) methods provided by [Next.js](https://nextjs.org/), asynchronous calls to the endpoint are being made for better efficiency of the website.
* Coin Name & Coin ID are being passed to screen 2 (`slug` route) via props in components.
* Screen 1 lists only 10 coins per page, and pagination (`components/Pagination.js`) is implemented.
* A simple search bar for filtering only those Coins per page. 