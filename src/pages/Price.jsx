import { useParams } from "react-router";

export default function Price(props) {
  // Grab the currency symbol from the URL parameter
  const params = useParams();
  const symbol = params.symbol;

  return <h1>This is the Price Component for {symbol}</h1>;
}