import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewsBoard from './NewsBoard';
import Item2 from './Item2';
import Item3 from './Item3';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function Home({
    searchQuery,
    category,
    setCategory
}) {
  return (
    <Box sx={{ flexGrow: 4 }}>
      <Grid container spacing={2}>



        {/* ستون وسط */}
        <Grid
          size={{ xs: 15, md: 9 }}
        >
          <Item>
            <NewsBoard searchQuery={searchQuery} category={category} />
          </Item>
        </Grid>

        {/* ستون راست */}
        <Grid
          size="grow"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Item>
            <Item2 setCategory={setCategory} />
            <Item3 />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
