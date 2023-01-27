import React, { useState } from "react";
import TopStocks from "./TopStocks";
import Stocks from "./Stocks";
import SearchBar from "./SearchBar";

import { ErrorBoundary } from "react-error-boundary";
import { Box, useMediaQuery } from "@chakra-ui/react"
import { DefaultStocks } from "./Stocks";

const Main = () => {

  const [tickerData, setTickerData] = useState<any>('');
  const [isSmallerThan1500] = useMediaQuery("(min-width: 1500px)")

  return (
    <Box display='flex'
      flexDirection={isSmallerThan1500 ? 'row' : 'column'}
      backgroundColor='blackAlpha.100'
      justifyContent='center'
      alignItems='center'
      h='calc(100vh - var(--chakra-sizes-headerHeight))'
      p={12}
      w={isSmallerThan1500 ? '100%' : '100%'}
    >
      {isSmallerThan1500 ? <TopStocks getTickerData={setTickerData} /> : <SearchBar getTicker={setTickerData} />}
      <ErrorBoundary fallback={<DefaultStocks tickerData={tickerData} mediaQueries={isSmallerThan1500 ? '70vw' : '100%'} />}>
        <Stocks tickerData={tickerData} mediaQueries={isSmallerThan1500 ? '70vw' : '100%'} />
      </ErrorBoundary>
    </Box >
  );
}

export default Main;