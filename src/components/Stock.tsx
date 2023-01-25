import React from "react";
import { Box, Card, CardBody, CardFooter, Heading, Stack, Text } from "@chakra-ui/react";

const Stock = (props: any) => {

  console.log(props.ticker);

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='100%'
      h='100%'
      p={6}
    >
      <Card w='100%' h='100%'>
        <CardBody>
          <Heading>Stock View</Heading>
          <Stack spacing={4}>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Stock;
