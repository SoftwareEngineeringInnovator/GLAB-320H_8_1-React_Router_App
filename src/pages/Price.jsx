import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Price(props) {
  // Read the CoinAPI key
  const apiKey = import.meta.env.VITE_COIN_API_KEY;

  // Grab the currency symbol from the URL parameter
  const params = useParams();
  const symbol = params.symbol;

  // Build CoinAPI request URL using selected currency symbol
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/?apikey=${apiKey}`;

  // Store the API response
  const [coin, setCoin] = useState(null);

  // Request cryptocurrency from CoinAPI
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCoin(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Run getCoin when the component loads
  useEffect(() => {
    getCoin();
  }, [symbol]);

  return (
    <div>
      <h1>This is the Price Component for {symbol}</h1>

      {/* Temporarily confirm whether the API data loaded */}
      <p>{coin ? "Coin data loaded" : "Loading..."}</p>
    </div>
  );
}