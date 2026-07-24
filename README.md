# GLAB 320H.8.1 - React Router App

## Crypto Prices

This project is a beginner React application built with **Vite** and **React Router**.

The application uses multiple routes to display different pages. It also allows a user to select a cryptocurrency and view its current USD exchange rate using the CoinAPI service.

---

## Learning Objectives

This lab was created to practice:

- Setting up a React project with Vite
- Installing and configuring React Router
- Creating multiple page components
- Creating routes with `Routes` and `Route`
- Navigating between pages with `Link`
- Using URL parameters
- Reading URL parameters with `useParams`
- Rendering an array with `.map()`
- Fetching data from an external API
- Using `useState` and `useEffect`
- Storing an API key in an environment file

---

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- HTML
- CSS
- CoinAPI
- Git and GitHub

---

## Application Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Main | Displays the main page |
| `/currencies` | Currencies | Displays the list of cryptocurrencies |
| `/price/:symbol` | Price | Displays the USD exchange rate for the selected cryptocurrency |

---

## Project Structure

```text
src/
├─ components/
│   └─ Nav.jsx
├─ pages/
│   ├─ Currencies.jsx
│   ├─ Main.jsx
│   └─ Price.jsx
├─ App.css
├─ App.jsx
├─ index.css
└─ main.jsx
```

---

## API Setup

This project uses CoinAPI to request cryptocurrency exchange-rate data.

Create a `.env` file in the root of the project:

```env
VITE_COIN_API_KEY=your_coinapi_key
```

Do not include spaces around the equal sign.

The `.env` file is ignored by Git using:

```gitignore
*.env
```

Do not commit or share your API key.

The application reads the key with:

```jsx
const apiKey = import.meta.env.VITE_COIN_API_KEY;
```

The request URL is created using the selected cryptocurrency symbol:

```jsx
const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/?apikey=${apiKey}`;
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/SoftwareEngineeringInnovator/GLAB-320H_8_1-React_Router_App.git
```

Enter the project folder:

```bash
cd GLAB-320H_8_1-React_Router_App
```

Install the project dependencies:

```bash
npm install
```

Create the `.env` file and add your CoinAPI key:

```env
VITE_COIN_API_KEY=your_coinapi_key
```

Start the Vite development server:

```bash
npm run dev
```

Open the local address displayed in the terminal. It will usually be:

```text
http://localhost:5173/
```

---

## Available Commands

Start the development server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Notes

This project follows the GLAB instructions while using Vite instead of Create React App.

The API key is stored in a `.env` file for this classroom project. Because this is a frontend application, environment variables beginning with `VITE_` are included in the browser build. A production application would normally protect private API credentials by making the API request through a backend server.

---

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: GLAB-320H_8_1-React_Router_App