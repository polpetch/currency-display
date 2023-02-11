'use client';

import { useGetSymbolQuery } from '@/features/apiSlice';

// const API_URL = 'https://satangcorp.com/api/v3/ticker';

// async function getSymbol(symbolPair: string) {
//   const dispatch = useDispatch();
//   const [data, setData] = useState([]);
//   const res = await fetch(`${API_URL}/24hr?symbol=${symbolPair}`);
//   const resJson = await res.json();
//   console.log(resJson);
//   return dispatch(fetchApi(resJson));
// }

function HandelerFormat({ price }: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function HandlerLoading({ data, isLoading }: any) {
  if (!isLoading) {
    return (
      <>
        <h1>{data.symbol}</h1>
        <h2>Price: {HandelerFormat(data.lastPrice)}</h2>
        <h2>Volume: {HandelerFormat(data.quoteVolume)}</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }
}

export default function SymbolPage({ params }: any) {
  const { data, isLoading } = useGetSymbolQuery(params.symbol);
  // const symbol = getSymbol(params.symbol);
  console.log('data', data, 'isLoading', isLoading);
  // const apiHelper = useSelector((state: RootState) => state.apiHelper.data);
  return (
    <>
      <HandlerLoading data={data} isLoading={isLoading} />
      {/* <h1>{data.symbol}</h1>
      <h2>Price: {data.lastPrice}</h2>
      <h2>Volume: {Math.floor(data.quoteVolume)}</h2> */}
    </>
  );
}
