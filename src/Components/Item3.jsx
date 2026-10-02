import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export default function PersonCard() {
  const [loading, setLoading] = React.useState(true);
  const [person, setPerson] = React.useState(null);

  React.useEffect(() => {
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Elon_Musk")
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      });
  }, []);

  return (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <hr />
        <h2>چهره های معروف</h2>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <Avatar src={person.thumbnail?.source} />
          )
        }
        title={
          loading ? (
            <Skeleton width="80%" />
          ) : (
            person.title
          )
        }
        subheader="Wikipedia"
      />

      {loading ? (
        <Skeleton variant="rectangular" height={180} />
      ) : (
        <CardMedia
          component="img"
          height="180"
          image={person.thumbnail?.source}
          alt={person.title}
        />
      )}

      <CardContent>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton width="80%" />
          </>
        ) : (
          <Typography variant="body2">
            {person.extract}
          </Typography>
        )}
      </CardContent>
      
    </Card>
  );
}