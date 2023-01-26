import { Box, Card, CardBody, CardFooter, Stack, CardHeader, Text, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface StockProps {
  tickerData: any;
}

const Stocks: FC<StockProps> = (props): JSX.Element => {

  console.log(props.tickerData)

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='70vw'
      h='100%'
      p={6}
    >
      <Card w='100%' h='100%'>
        <CardHeader>
          <Heading>{props.tickerData.ticker}</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>
            <Text>{props.tickerData.c}</Text>
            <Text>{props.tickerData.h}</Text>
            <Text>{props.tickerData.l}</Text>
            <Text>{props.tickerData.o}</Text>
            <Text>{props.tickerData.t}</Text>
            <Text>{props.tickerData.v}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Stocks;
