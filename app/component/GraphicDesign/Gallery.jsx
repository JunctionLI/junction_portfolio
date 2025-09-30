"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  // 判断屏幕宽度，移动端1列，桌面3列
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [cols, setCols] = React.useState(isMobile ? 1 : 3);

  React.useEffect(() => {
    const handleResize = () => {
      setCols(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box>
      <ImageList variant="masonry" cols={cols} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'assets/mental_p.png',
    title: 'Mental Health Poster',
 
  },
  {
    img: 'assets/mental_b.png',
    title: 'Mental Health Brochure',
    
  },
  {
    img: 'assets/social_p.png',
    title: 'Social Worker Poster',

  },
  {
    img: 'assets/social_b.png',
    title: 'Social Worker Brochure',

  },
  {
    img: 'assets/ningju_b.png',
    title: 'Fundraising Event Brochure',
   
  },
  {
    img: 'assets/ningju_p.png',
    title: 'Fundraising Event Poster',

  },
  {
    img: 'assets/ningju_t.png',
    title: 'Fundraising Event Ticket',

  },
    {
    img: 'assets/orbit_p.png',
    title: 'Orbit Poster',

  },
      {
    img: 'assets/me_pricelist.png',
    title: 'Me Pricelist',

  },
];
