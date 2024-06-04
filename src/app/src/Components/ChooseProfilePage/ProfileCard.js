import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    display: "block",
    margin: " auto",
    maxWidth: 345,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    paddingTop: "56.25%", // 16:9
    height: 40,
}
}));


function ProfileCard(props) {
  const profile = props.profile;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={profile.name} subheader={profile.age} />
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={profile.photo}
        title="imagem do perfil"
      />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {profile.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
