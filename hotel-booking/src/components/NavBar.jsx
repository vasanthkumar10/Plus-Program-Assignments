import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export function NavBar() {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            fontWeight={"bold"}
            color={"inherit"}
            component="div"
          >
            Taj Hotel
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="h6"
              fontSize={16}
              sx={{ cursor: "pointer" }}
              fontWeight={"bold"}
              color={"inherit"}
              component="div"
            >
              Home
            </Typography>
            <IconButton>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
