import Typography from '@mui/material/Typography';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

function HeroCard(props) {
  return (
    <>
      <Card className="heroCard">
        {props.hero.Poster !== 'N/A' && (
          <CardMedia
            component="img"
            alt={props.hero.Title}
            height="140"
            image={props.hero.Poster}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.hero.Title}
          </Typography>

          <Chip label={props.hero.Year} color="primary" />
        </CardContent>
        <CardActions>
          <Link to={`/heros/${props.hero.imdbID}`}>
            <Button size="small"> More Details</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default HeroCard;
