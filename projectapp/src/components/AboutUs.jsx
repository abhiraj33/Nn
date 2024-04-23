import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const AboutUs = () => {
  return (
    <div>
      <br /><br />
      <Button variant="text" gutterBottom>
        <br />
        <Typography variant='h4' style={{color:"black"}}>About Us</Typography>
      </Button>
      <Typography variant='body1' gutterBottom style={{color:"#69f0ae"}}>

        At VOZZBEYA, we believe in the power of innovation to transform industries and improve lives. Founded in 2005, we have been at the forefront of restaurant revolution, driven by our passion for flexibility in cooking and serving food. <br /><br />

        Our journey began with a simple yet ambitious goal: to create a culinary haven where exceptional food, warm hospitality, and vibrant ambiance converge to create unforgettable dining experiences. <br />  Since then, we have grown into a dynamic team of experts, dedicated to pushing the boundaries of what's possible.

        With a focus on Ethnic Cuisine: Focusing on a specific ethnic cuisine, such as Indonasian, Japanese, or Mexican, and offering authentic dishes that showcase traditional flavors and cooking techniques., we have developed cutting-edge solutions that address the most pressing challenges facing our clients and communities. <br /><br /> Our commitment to excellence is evident in everything we do, from our rigorous research and development process to our unwavering dedication to customer satisfaction.

        But our success isn't just measured by profits or market share. We measure our impact by the lives we touch and the positive change we bring to the world. Whether it's through Seasonal Menu Launches: Introducing seasonal menus that highlight the best ingredients available each season, showcasing the restaurant's creativity and commitment to fresh, local flavors., we are proud to be making a difference every day.

        As we look to the future, we remain steadfast in our commitment to innovation, integrity, and social responsibility. <br /> <br />Together, we will continue to push the boundaries of what's possible and create a brighter, more sustainable tomorrow for all. <br /><br />

        Thank you for joining us on this journey,<br /><br />

        VOZZBEYA
      </Typography>
      <br /><br />
      <Typography variant="h5" style={{color:"green"}}>Rate Us</Typography>
      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
      />
    </div>
  );
};

export default AboutUs;
