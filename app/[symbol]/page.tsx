async function getSymbol(symbolPair: string) {
  const res = await fetch(
    `https://satangcorp.com/api/v3/ticker/24hr?symbol=${symbolPair}`,
    {
      cache: 'no-cache',
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function SymbolPage({ params }: any) {
  const symbol = await getSymbol(params.symbol);

  return (
    <div>
      <h1>{symbol.symbol.replace('_', '/').toUpperCase()}</h1>
      <h2>Price: {symbol.lastPrice}</h2>
      <h2>Volume: {Math.floor(symbol.quoteVolume)}</h2>
    </div>
  );
}
