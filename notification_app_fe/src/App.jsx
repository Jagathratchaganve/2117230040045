import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Campus Notifications
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            All
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/priority"
          >
            Priority
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route
            path="/"
            element={<AllNotifications />}
          />

          <Route
            path="/priority"
            element={<PriorityNotifications />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;