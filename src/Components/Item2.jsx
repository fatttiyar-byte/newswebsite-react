import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const cards = [
  { id: 1, title: "عمومی", category: "general" },
  { id: 2, title: "تجارت", category: "business" },
  { id: 3, title: "سرگرمی", category: "entertainment" },
  { id: 4, title: "سلامت", category: "health" },
  { id: 5, title: "علمی", category: "science" },
  { id: 6, title: "ورزشی", category: "sports" },
  { id: 7, title: "فناوری", category: "technology" },
];
function Item2({ setCategory }) {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box 
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => {
              setSelectedCard(index);
              setCategory(card.category);
            }}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent className='card' sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    
    </Box>
  );
}

export default Item2;
