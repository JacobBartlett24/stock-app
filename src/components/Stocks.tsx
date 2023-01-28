import React, { FC, ReactNode, useEffect, useState } from "react";
import { Box, Card, CardBody, CardFooter, Stack, CardHeader, Text, Heading } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation";

interface StockProps {
  tickerData: any[];
  mediaQueries: string;
}

export const DefaultStocks: FC<StockProps> = (props): JSX.Element => {

  const [tickerNews, setTickerNews] = useState<any[]>([]);

  useEffect(() => {
    setTickerNews(props.tickerData.map((ticker) => {
      <Text>{ticker.image_url}</Text>;
    }
    ));
  }, [props.tickerData])

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

  const [tickerNews, setTickerNews] = useState<any[]>([]);

  useEffect(() => {
    setTickerNews(props.tickerData.map((ticker) => {
      <Text>{ticker}</Text>;
    }
    ));
    console.log(tickerNews)
  }, [props.tickerData])

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
          <Heading></Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>

          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  )
};

export default Stocks;
