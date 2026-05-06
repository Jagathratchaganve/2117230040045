import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function NotificationCard({
  notification,
  viewed,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        border: viewed
          ? "1px solid #ccc"
          : "2px solid #1976d2",

        backgroundColor: viewed
          ? "#f5f5f5"
          : "#e3f2fd",

        transition: "0.3s",
        height: "100%",

        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          {notification.Timestamp}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: viewed
              ? "green"
              : "red",
            fontWeight: "bold",
          }}
        >
          {viewed
            ? "Viewed"
            : "New"}
        </Typography>
      </CardContent>
    </Card>
  );
}