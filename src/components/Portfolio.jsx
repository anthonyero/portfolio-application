import Grid from '@mui/material/Grid';

export default function ResponsiveGrid() {
  return (
    <>
      <Grid container justifyContent='space-evenly' alignItems='stretch'>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <p>Project: {index + 1}</p>
          </Grid>
        ))}
      </Grid>
    </>
  );
}