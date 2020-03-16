import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './AgentCard.css';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const AgentCard = ({
  name,
  email,
  phoneNumber,
  address,
  zipCode,
  passport
}) => {
  const classes = useStyles();
  return (
    <Card className="agent-card" raised>
      <CardContent className="agent-card-content">
        <Avatar src={passport} alt={`agent - ${name}`} className={classes.large} />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{email}</Typography>
        <Typography variant="subtitle2">{phoneNumber}</Typography>
        <Typography variant="subtitle2">{address}</Typography>
        <Typography variant="subtitle2">{`zip code: ${zipCode}`}</Typography>
      </CardContent>
    </Card>
  )
}

export default AgentCard;
