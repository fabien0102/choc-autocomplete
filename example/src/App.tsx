import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  InputGroup,
  Spinner,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteRefMethods,
  AutoCompleteTag,
  AutoCompleteGroup,
  AutoCompleteGroupTitle,
  ItemTag,
} from "../../";

function App() {
  const countries = [
    "nigeria",
    "japan",
    "india",
    "united states",
    "south korea",
  ];
  const options = [
    { label: "apple", value: "one" },
    { label: "appoint", value: "two" },
    { label: "zap", value: "three" },
    { label: "cap", value: "four" },
    { label: "japan", value: "five" },
  ];

  const [value, setValue] = useState("");
  const [valueM, setValueM] = useState([]);
  const ref = React.useRef<AutoCompleteRefMethods>();

  return (
    <Flex pt="48" justify="center" align="center" w="full">
      <FormControl id="email" w="60">
        <FormLabel>Olympics Soccer Winner</FormLabel>
        <Button onClick={() => ref.current?.removeItem("three", true)}>
          Reset
        </Button>
        <AutoComplete
          ref={ref}
          onCreateOption={({ item }) => console.log(item)}
          value={value}
          onChange={setValue}
          openOnFocus
          rollNavigation
          listAllValuesOnFocus
          // creatable
          freeSolo
          // multiple
          // submitKeys={[" "]}
          // restoreOnBlurIfEmpty={false}
        >
          <AutoCompleteInput variant="filled" w="48" />
          <AutoCompleteList>
            <AutoCompleteCreatable alwaysDisplay />
            <AutoCompleteGroup>
              <AutoCompleteGroupTitle textTransform="capitalize">
                Wow
              </AutoCompleteGroupTitle>
              {options.map(option => (
                <AutoCompleteItem
                  key={`option-${option.value}`}
                  value={{ title: `${option.value}` }}
                  // getValue={a => a.title}
                  label={option.label}
                  textTransform="capitalize"
                />
              ))}
            </AutoCompleteGroup>
            <span>Damn</span>
          </AutoCompleteList>
        </AutoComplete>
        <FormHelperText>Who do you support.</FormHelperText>
      </FormControl>
    </Flex>
  );
}

export default App;
