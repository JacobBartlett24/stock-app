import React from "react";
import { Box } from "@chakra-ui/react"

const Header = () => {
  return (
      <Box display='flex' justifyContent='center' alignItems='center' h='headerHeight' w='100%' backgroundColor='blackAlpha.100'>
        Stocks App
      </Box>
  );
}

export default Header;