import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Currencies() {
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
  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setCoin(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCoin();
  }, [url]);

  // Display the cryptocurrency data after it loads.
  const loaded = () => {
    // Find the USD exchange rate inside the rates array.
    const usdRate = coin.rates.find(
      (rate) => rate.asset_id_quote === "USD"
    );

    return (
      <div>
        <h1>
          {coin.asset_id_base}/{usdRate.asset_id_quote}
        </h1>

        <h2>{usdRate.rate}</h2>
      </div>
    );
  };

  // Display a message while waiting for the API data.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rates ? loaded() : loading();
}