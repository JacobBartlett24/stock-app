import React from "react";
import TopStocks from "./TopStocks";
import Stocks from "./Stocks";

import { Box } from "@chakra-ui/react"

const Main = () => {
  return (
    <Box display='flex'
         flexDirection='row'
         backgroundColor='blackAlpha.100'
         justifyContent='center' 
         alignItems='center'
         h='calc(100vh - var(--chakra-sizes-headerHeight))'>
      <TopStocks />
      <Stocks />
    </Box>
  );
}

export default Main;