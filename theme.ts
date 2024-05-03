"use client";
import { Button, Card, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: 'yellow',
  primaryShade: 6,

  components: {
    Card: Card.extend({
      defaultProps: {
        bg: 'dark.6'
      }
    }),
    Button: Button.extend({
      styles: {
        root: {
          zIndex: 10
        }
      }
    })
  }
});
