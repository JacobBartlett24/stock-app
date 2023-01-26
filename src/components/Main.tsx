import React, { useState } from "react";
import TopStocks from "./TopStocks";
import Stocks from "./Stocks";
import { ErrorBoundary } from "react-error-boundary";

import { Box } from "@chakra-ui/react"
import { DefaultStocks } from "./Stocks";

const Main = () => {

  const [tickerData, setTickerData] = useState<any>('');

  return (
    <Box display='flex'
      flexDirection='row'
      backgroundColor='blackAlpha.100'
      justifyContent='center'
      alignItems='center'
      h='calc(100vh - var(--chakra-sizes-headerHeight))'
      p={12}
    >
      <TopStocks getTickerData={setTickerData} />
      <ErrorBoundary fallback={<DefaultStocks tickerData={tickerData} />}>

        <Stocks tickerData={tickerData} />
      </ErrorBoundary>
    </Box>
  );
}

export default Main;