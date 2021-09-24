import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { Flex, Input, ChakraProvider, Box } from "@chakra-ui/react";
import { SuggestContainer } from "./style";

let styles = {
  display: "block",
  border: "1px solid rgba(0, 0, 0, 0.14)",
  borderRadius: "5px",
};

export default function SearchInput({
  loading,
  options,
  requests,
  onClickFunction,
  placeholder,
}) {
  const [inputValue, setInputValue] = useState("");

  const debouncedSave = useCallback(
    debounce((newValue) => requests(newValue), 1000),
    []
  );

  const updateValue = (newValue) => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  return (
    <div>
      <ChakraProvider>
        <Input
          pl="5"
          mb="1"
          value={inputValue}
          onChange={(input) => updateValue(input.target.value)}
          placeholder={placeholder}
        />

        <SuggestContainer>
          <Box style={styles} borderBottom="1px solid white" display="contents">
            {loading && (
              <Flex px="5" py="2">
                Loading...
              </Flex>
            )}
            {options?.entries?.length > 0 &&
              !loading &&
              options?.entries?.map((value, index) => (
                <Flex
                  display="block"
                  px="5"
                  py="2"
                  //   pl="0"
                  borderBottom="1px"
                  borderColor="rgba(0, 0, 0, 0.03)"
                  _hover={{ bg: "rgba(0, 0, 0, 0.14)" }}
                  key={`${value.API}-${index}`}
                  onClick={() => onClickFunction(value.Link)}
                >
                  {value.API}
                </Flex>
              ))}
          </Box>
        </SuggestContainer>
      </ChakraProvider>
    </div>
  );
}
