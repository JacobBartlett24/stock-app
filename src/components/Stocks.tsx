import { Box, Card, CardBody, CardFooter, Stack, CardHeader, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface StockProps {
  tickerData: any;
}

const Stocks: FC<StockProps> = (props): JSX.Element => {

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
          <Text>{props.tickerData.ticker}</Text>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Stocks;
