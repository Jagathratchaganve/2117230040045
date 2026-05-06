import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import { fetchNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";

export default function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filterType, setFilterType] =
    useState("All");

  const [limit, setLimit] = useState(10);

  const [viewed, setViewed] = useState(
    JSON.parse(
      localStorage.getItem("viewed")
    ) || []
  );

  useEffect(() => {
    loadNotifications();
  }, [filterType, limit]);

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await fetchNotifications();

      let filteredData = data;

if (filterType !== "All") {
  filteredData = data.filter(
    (item) => item.Type === filterType
  );
}

setNotifications(
  filteredData.slice(0, limit)
);
    } catch (error) {
      alert("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    if (viewed.includes(id)) return;

    const updated = [...viewed, id];

    setViewed(updated);

    localStorage.setItem(
      "viewed",
      JSON.stringify(updated)
    );
  };

  if (loading) {
    return (
      <Container sx={{ mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        All Notifications
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>
            Notification Type
          </InputLabel>

          <Select
            value={filterType}
            label="Notification Type"
            onChange={(e) =>
              setFilterType(e.target.value)
            }
          >
            <MenuItem value="All">
              All
            </MenuItem>

            <MenuItem value="Event">
              Event
            </MenuItem>

            <MenuItem value="Result">
              Result
            </MenuItem>

            <MenuItem value="Placement">
              Placement
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>
            Limit
          </InputLabel>

          <Select
            value={limit}
            label="Limit"
            onChange={(e) =>
              setLimit(e.target.value)
            }
          >
            <MenuItem value={10}>
              10
            </MenuItem>

            <MenuItem value={15}>
              15
            </MenuItem>

            <MenuItem value={20}>
              20
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid
        container
        spacing={3}
      >
        {notifications.map(
          (notification) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={notification.ID}
            >
              <NotificationCard
                notification={
                  notification
                }
                viewed={viewed.includes(
                  notification.ID
                )}
                onClick={() =>
                  handleView(
                    notification.ID
                  )
                }
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
}