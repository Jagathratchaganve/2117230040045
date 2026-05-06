import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Grid,
} from "@mui/material";

import { fetchNotifications } from "../services/api";

import { sortPriorityNotifications } from "../utils/priority";

export default function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications();

      const sorted =
        sortPriorityNotifications(data);

      setNotifications(sorted.slice(0, 10));
    } catch (error) {
      alert("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
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
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      <Grid container spacing={2}>
        {notifications.map((item) => (
          <Grid item xs={12} md={6} key={item.ID}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {item.Type}
                </Typography>

                <Typography>
                  {item.Message}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {item.Timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}