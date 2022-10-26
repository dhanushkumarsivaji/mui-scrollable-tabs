import * as React from "react";

import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";

import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

export default function MuiTabs({ hideEditButton = false, tabsData }) {
  const ButtonContainer = styled("div")(() => ({
    // '@media (max-width: 991px)': {

    //   display: 'none'

    // },

    "& .MuiButton-root": {
      padding: "10px",
    },
  }));

  const TabsContainer = styled(Tabs)(({ theme }) => ({
    "&.tab-container": {
      

      ".MuiTabs-flexContainer": {
        borderBottom: `2px solid  ${theme.palette.primary.main}`,
        width: '100%',
        minWidth: 'max-content'
      },

      ".MuiTabs-scroller": {
        // borderBottom: `2px solid  ${theme.palette.primary.main}`,
      },

      ".MuiTabs-indicator": {
        display: "none",
      },

      ".MuiTabs-scrollButtons.Mui-disabled": {
        // opacity: 0.3
      },
    },
  }));

  const TabButton = styled(Tab)(({ theme }) => ({
    color: "black !important",

    textTransform: "none",

    padding: "14px",

    fontSize: "24px",

    border: `2px solid  ${theme.palette.common.black}`,

    borderTopLeftRadius: "5px",

    borderTopRightRadius: "5px",

    borderBottom: "none",

    "& :first-of-type": {
      flexGrow: 1,
    },

    margin: "0 10px 0 0",

    "&.Mui-selected": {
      color: `${theme.palette.primary.main} !important`,

      //   border: `2px solid  ${theme.palette.primary.main}`,

      borderTop: `2px solid  ${theme.palette.primary.main}`,

      borderLeft: `2px solid  ${theme.palette.primary.main}`,

      borderRight: `2px solid  ${theme.palette.primary.main}`,

      borderBottom: "none",

      boxShadow: '0 4px 0 -2px white'

      // '& span': {

      //   color: theme.palette.primary.main

      // }
    },
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8} sm={12}>
          <Box sx={{ width: "100%" }}>
            <TabsContainer
              className="tab-container"
              onChange={handleChange}
              value={value}
              aria-label="Tabs where selection follows focus"
              selectionFollowsFocus
              variant="scrollable"
              scrollButtons
            >
              
                {tabsData.map((v, i) => (
                  <TabButton label={v} />
                ))}

                <TabButton label="+" />
            </TabsContainer>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sm={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {!hideEditButton && (
            <ButtonContainer>
              <Button
                variant="outlined"
                onClick={() => {}}
                sx={{ marginRight: "20px" }}
              >
                Get PDF
              </Button>

              <Button
                variant="contained"
                onClick={() => {}}
                sx={{ marginRight: "20px" }}
              >
                Edit Goals
              </Button>
            </ButtonContainer>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
