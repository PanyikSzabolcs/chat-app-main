import { Box, Stack, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from "phosphor-react";
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  console.log(theme);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100
        }}
      >
        <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }} spacing={3}>
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}>
            <img src={Logo} alt={"Chat App Logo"} />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) => (
              el.index === selected ?
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content", color: "#fff"
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
                : <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{
                    width: "max-content", color: "#fff"
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
            ))}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ?
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#000" }}>
                  <Gear />
                </IconButton>
              </Box>

              :
              <IconButton
                onClick={() => {
                  setSelected(3);
                }}
              >
                <Gear />
              </IconButton>
            }

          </Stack>


        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
