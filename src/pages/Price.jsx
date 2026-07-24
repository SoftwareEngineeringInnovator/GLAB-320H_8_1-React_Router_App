import { useParams } from "react-router";

export default function Price(props) {
  // Read the CoinAPI key
  const apiKey = import.meta.env.VITE_COIN_API_KEY;

  // Grab the currency symbol from the URL parameter
  const params = useParams();
  const symbol = params.symbol;

  // Build CoinAPI request URL using selected currency symbol
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/?apikey=${apiKey}`;

  return <h1>This is the Price Component for {symbol}</h1>;
}