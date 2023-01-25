import React, { FC } from "react";
import { Box, Card, CardBody, CardFooter, Heading, Stack, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

interface StockProps {
  getTickerData: (tickerData: any) => void;
}

const TopStocks: FC<StockProps> = (props): JSX.Element => {

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection={'column'}
      w='20vw'
      h='100%'
      p={6}
    >
      <SearchBar getTicker={props.getTickerData}/>
      <Card w='100%' h='100%'>
        <CardBody>
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
    </Box>
  );
};

export default TopStocks;
