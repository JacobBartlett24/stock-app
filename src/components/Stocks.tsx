import React, { FC } from "react";
import { Box, Card, CardBody, CardFooter, Stack, CardHeader, Text, Heading } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation";

interface StockProps {
  tickerData: any;
  mediaQueries: string;
}

export const DefaultStocks: FC<StockProps> = (props): JSX.Element => {
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        w={props.mediaQueries}
        h='100%'
        p={6}
      >
        <Card w='100%' h='100%'>
          <CardHeader>
          </CardHeader>
          <CardBody display='flex' justifyContent='center' alignItems='center'>
            <Text fontSize={'5xl'} noOfLines={2}>
              Hm... something went wrong. Try again later.
            </Text>
          </CardBody>
          <CardFooter>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}



const Stocks: FC<StockProps> = (props): JSX.Element => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      w={props.mediaQueries}
      h='100%'
      p={6}
    >
      <Card w='100%' h='100%'>
        <CardHeader>
          <Heading>{props.tickerData.ticker}</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>

            <Text>{props.tickerData.results[0].c}</Text>
            <Text>{props.tickerData.results[0].h}</Text>
            <Text>{props.tickerData.results[0].l}</Text>
            <Text>{props.tickerData.results[0].o}</Text>
            <Text>{props.tickerData.results[0].t}</Text>
            <Text>{props.tickerData.results[0].v}</Text>

          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  )
};

export default Stocks;
