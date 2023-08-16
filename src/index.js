/* eslint no-unused-vars: 0 */
import React from "react";
import { render } from "react-dom";
import preset from "@rebass/preset";
import { ThemeProvider } from "emotion-theming";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

// https://rebassjs.org/

const theme = {
  ...preset
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box variant="styles.root">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Heading as="h1" mb={1}>
            NFT Grocery List
          </Heading>
          <div>Total: 0</div>
        </div>
        <div style={{ display: "flex" }}>
          <input style={{ width: "100%" }} />
          <Button ml={2} variant="secondary">
            Add
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Bibos</p>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Milady</p>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

render(<App />, root); // eslint-disable-line no-undef
