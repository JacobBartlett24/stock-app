import React, { useState } from "react";
import TopStocks from "./TopStocks";
import Stocks from "./Stocks";

import { Box } from "@chakra-ui/react"

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
      <Stocks tickerData={tickerData} />
    </Box>
  );
}

export default Main;