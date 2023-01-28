import React, { FC, useState } from "react";
import { Input, Button, Box, Card } from "@chakra-ui/react";

interface StockProps {
  getTicker: (ticker: string) => void;
}

const SearchBar: FC<StockProps> = (props) => {
  const [apiKey, setApiKey] = useState("JjPsNoXTmQJFCe86ZYYvy82wo9Vg1nLy");
  const [responseData, setResponseData] = useState(null);
  const [ticker, setTicker] = useState("AAPL");

  const stockRequest = async () => {
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/reference/news?ticker=${ticker}&order=asc&limit=10&sort=published_utc&apiKey=${apiKey}`
      );
      const data = await response.json();
      setResponseData(data.results);
      props.getTicker(data.results);
    } catch (error) {
      console.log(error);
    }

  };

  const handleTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(e.target.value);
  };

  return (
    <Card
      w={"100%"}
      p={6}
      marginBottom='1rem'
      display='flex'
      flexDirection='row'
    >
      <Input
        placeholder='Search...'
        size={"lg"}
        onChange={handleTickerChange}
        value={ticker}
      />
      <Button
        onClick={stockRequest}
        size={"lg"}
        ml='1rem'
        bgColor={"green.200"}
      >
        Search
      </Button>
    </Card>
  );
};

export default SearchBar;
