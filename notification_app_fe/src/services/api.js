import axios from "axios";

const BASE_URL =
  "http://20.207.122.201/evaluation-service/notifications";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqYWdhdGhyYXRjaGFnYW52ZUBnbWFpbC5jb20iLCJleHAiOjE3NzgwNTA5ODIsImlhdCI6MTc3ODA1MDA4MiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjFiMDhjYjU4LTYwMDctNGY0Yi05ODcxLTlmMGFlNzdmZmQxOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImphZ2F0aHJhdGNoYWdhbiB2IGUiLCJzdWIiOiIyMDJjYzhhMC0zMmMyLTRjYTgtOGRjOS1iNzc3ZjQwMDRhNDkifSwiZW1haWwiOiJqYWdhdGhyYXRjaGFnYW52ZUBnbWFpbC5jb20iLCJuYW1lIjoiamFnYXRocmF0Y2hhZ2FuIHYgZSIsInJvbGxObyI6IjIxMTcyMzAwNDAwNDUiLCJhY2Nlc3NDb2RlIjoiQlRDRHFUIiwiY2xpZW50SUQiOiIyMDJjYzhhMC0zMmMyLTRjYTgtOGRjOS1iNzc3ZjQwMDRhNDkiLCJjbGllbnRTZWNyZXQiOiJjVER2clR5eHVaVVV4YUp0In0.oeNWnlN1Dst9x0QDjG8n4QMhFT4o8RDxp7XthMtuifo";

export const fetchNotifications = async () => {
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data.notifications;
};