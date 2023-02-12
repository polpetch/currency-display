'use client';

import { fetchSymbol } from '@/features/apiSlice';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

const API_URL = 'https://satangcorp.com/api/v3/ticker';

async function getSymbol(symbolPair: string) {
  const dispatch = useDispatch();
  const res = await fetch(`${API_URL}/24hr?symbol=${symbolPair}`);
  const resJson = await res.json();
  return dispatch(fetchSymbol(resJson));
}

export default function SymbolPage({ params }: any) {
  getSymbol(params.symbol);

  const handlerApi = useSelector((state: RootState) => state.api.value);
  return (
    <div>
      <h1>{handlerApi.value}</h1>
      <h2>Price: {handlerApi.lastPrice}</h2>
      <h2>Volume: {Math.floor(handlerApi.quoteVolume)}</h2>
    </div>
  );
}
