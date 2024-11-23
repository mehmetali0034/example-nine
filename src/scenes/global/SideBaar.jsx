import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebaar() {
  const theme = useTheme(); //useTheme hook'u, ThemeProvider tarafından sağlanan temayı almanıza yardımcı olur.
  const colors = tokens(theme.palette.mode); //Başlangıç olarak dark
  const [isCollapsed, setIsCollapsed] = useState(false); //kapalılık falsa yani başlangıçta sidebar açık olacak
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  const handleClick = () => {
    // "/other" sayfasına yönlendirme
    navigate("/");
  };
  const handleClickTeam = () => {
    navigate("/team");
  };
  return (
    <Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]}`,
          },
        }}
        collapsed={isCollapsed}
      >
        <Menu
          menuItemStyles={{
            backgroundColor: {
              "&.active": {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          {//LOGO AND MENU ICON
          }
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINISS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/UsurPhoto.jpeg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Mehmet Ali Kolcuk
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Full Stack Developer
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem onClick={handleClick} icon={<HomeOutlinedIcon />}>
              Dashboard
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <MenuItem onClick={handleClickTeam} icon={<PeopleOutlinedIcon />}>
              Manage Team
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("contacts");
              }}
              icon={<ContactsOutlinedIcon />}
            >
              Contacts Information
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("invoices");
              }}
              icon={<ReceiptOutlinedIcon />}
            >
              Invoices Balances
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <MenuItem
              onClick={() => {
                navigate("/form");
              }}
              icon={<PersonOutlinedIcon />}
            >
              Profile Form
            </MenuItem>
            <MenuItem onClick={()=>{navigate("/calendar")}} icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
            <MenuItem onClick={()=>{navigate("/faq")}} icon={<HelpOutlineOutlinedIcon />}>Faq Page</MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem onClick={()=>{navigate("/bar")}} icon={<BarChartOutlinedIcon />}>Bar Chart</MenuItem>
            <MenuItem onClick={()=>{navigate("/pie")}} icon={<PieChartOutlineOutlinedIcon />}>
              Pie Chart
            </MenuItem>
            <MenuItem onClick={()=>{navigate("/line")}} icon={<TimelineOutlinedIcon />}>Line Chart</MenuItem>
            <MenuItem onClick={()=>{navigate("/geography")}} icon={<MapOutlinedIcon />}>Geography Chart</MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
