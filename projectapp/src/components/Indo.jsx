import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Typographyy from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,marginLeft:"10px",marginTop:"15px"}}>
      <CardHeader
        avatar={
          <Avatar
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg' 
          sx={{ bgcolor: red[500]}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Satay"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.holidify.com/images/cmsuploads/compressed/Sate_Ponorogo_20190629114116.jpg"
        alt="Satay"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The dish consists of a variety of meat cooked over the coal and smoked and barbequed to perfection. The flesh varies from chicken, fish, mutton, duck, pork, or rabbit.<br></br><br></br>
         The meat is marinated in spices, with a special soya sauce before being exposed to fire. 
        </Typography>
        </CardContent>
        <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> &nbsp; &nbsp;
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp;
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,marginLeft:"350px",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg' 
          sx={{ bgcolor: red[500]}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Satay"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.holidify.com/images/cmsuploads/compressed/Sate_Ponorogo_20190629114116.jpg"
        alt="Satay"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The dish consists of a variety of meat cooked over the coal and smoked and barbequed to perfection. The flesh varies from chicken, fish, mutton, duck, pork, or rabbit.<br></br><br></br>
         The meat is marinated in spices, with a special soya sauce before being exposed to fire. 
        </Typography>
        </CardContent>
      <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> &nbsp; &nbsp;
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp;
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar 
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg'
          sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Martabak"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.holidify.com/images/cmsuploads/compressed/Martabak_mini2_20190629121242.jpg"
        alt="Martabak"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Indonesia is not just about savory delicacies but sweet ones too. It is a spin on crepes or pancakes (varying according to region) with an Indonesian touch. <br /><br />
         The pancakes are way thicker than the usual ones filled with chocolate or anything sweet. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> &nbsp; &nbsp;
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp;
        <IconButton aria-label="share">
       
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,position:"",marginLeft:"350px"}}>
      <CardHeader
        avatar={
          <Avatar 
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg'
          sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ketoprak"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/don-t-leave-indonesia-before-you-get-a-taste-of-these-12-favorite-local-foods/ketoprak.jpg"
        alt="Ketoprak"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This vegetarian street food is originated from Jakarta, the capital city of Indonesia. <br /><br />
        It is basically a plate of rice vermicelli mixed with fried tofu, vegetables, rice cake, blanched bean sprouts and shrimp crackers topped with peanut sauce and sweet soy sauce.
        </Typography>
      </CardContent>
      <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> &nbsp; &nbsp;
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp;
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"10px"}}>
      <CardHeader
        avatar={
          <Avatar 
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg'
          sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ikan bakar "
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media.cnn.com/api/v1/images/stellar/prod/160222142930-indonesian-food-ikan-bakar-0568b-1900px.jpg?q=w_1015,c_fill/f_webp"
        alt="Ikan bakar "
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Grilled fish, plain and simple. But in a country with more than 17,000 islands, fish is bound to feature prominently. <br /><br />While squid and prawns have a place in Indonesian cuisine, ikan bakar gets a far better showing for a fleshy texture that is great for dipping.
        </Typography>
      </CardContent>
      <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> &nbsp; &nbsp;
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp; 
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 ,position:"",marginLeft:"350px"}}>
      <CardHeader
        avatar={
          <Avatar 
          src='https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg'
          sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Soto (Indonesian Soup)"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://nomadsunveiled.com/wp-content/uploads/2023/09/indonesia-foods-soto-indonesian-soup.jpg"
        alt="Soto (Indonesian Soup)"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Soto, also known as “sroto” or “saoto”, is a vital part of the food culture in Indonesia. It’s also considered a national dish of Indonesia. <br /><br />
        This dish, which essentially means soup, typically consists of broth, vegetables, and some form of meat.
        </Typography>
      </CardContent>
      <CardActions disableSpacing><Link to={'./Wishlist'}>Add</Link>
        <IconButton aria-label="add to favorites"> 
          <FavoriteIcon />
        </IconButton>&nbsp; &nbsp; 
        <Button variant='outlined'color='primary'>OrderNow</Button> &nbsp; &nbsp;
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
    <br /><br />
    <Button variant="text" gutterBottom>
            <br />
        <Typography variant='h5'><Link to={'/SpecialOffers'}></Link>SpecialOffer</Typography>
      </Button>
    </div>
    
  );
}