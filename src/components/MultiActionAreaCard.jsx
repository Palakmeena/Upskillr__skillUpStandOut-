import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({ imageSrc, title, description, joinLink }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out',
        border: '2px solid transparent',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          border: '2px solid #6D64F7',
        },
      }}
    >
      <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
        <CardMedia component="img" height="100" image={imageSrc} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small" color="primary" href={joinLink} target="_blank">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
