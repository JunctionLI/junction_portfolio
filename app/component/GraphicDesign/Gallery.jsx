"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  const [cols, setCols] = React.useState(3);
  const [openImg, setOpenImg] = React.useState(null);

  React.useEffect(() => {
    const updateCols = () => setCols(window.innerWidth < 768 ? 1 : 3);
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
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
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              onClick={() => setOpenImg(item.img)}
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
      {openImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpenImg(null)}
        >
          <img
            src={openImg}
            alt="enlarged"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
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
    img: 'assets/social_b2.png',
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
