// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function ProductCard() {
//   const [data, setData] = React.useState([
//     {
//       name: 'A',
//       number: 50,
//     },
//     {
//       name: 'B',
//       number: 40,
//     },
//     {
//       name: 'C',
//       number: 30,
//     }
//   ]);

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       {data.map((d, i) => (
//         <Card key={i} sx={{ minWidth: 275, marginBottom: 5, marginRight: 5 }}>
//           <CardContent>
//             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//               Word of the Day
//             </Typography>
//             <Typography variant="h5" component="div">
//               {d.name}
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               {d.number}
//             </Typography>
//             <Typography variant="body2">
//               Description goes here...
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       ))}
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function ProductCard() {
  const [data, setData] = useState([
    {
      name: 'A',
      number: 50,
    },
    {
      name: 'B',
      number: 40,
    },
    {
      name: 'C',
      number: 30,
    },
    {
      name: 'D',
      number: 50,
    },
    {
      name: 'A1',
      number: 40,
    },
    {
      name: 'B1',
      number: 30,
    },
    {
      name: 'C1',
      number: 50,
    },
    {
      name: 'D1',
      number: 40,
    },
    {
      name: 'A2',
      number: 30,
    },
    {
      name: 'B2',
      number: 50,
    },
    {
      name: 'C2',
      number: 40,
    },
    {
      name: 'D2',
      number: 30,
    }
  ]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((d, i) => (
        <Card key={i} sx={{ minWidth: 275, marginBottom: 5, marginRight: 5 ,marginLeft: 5, marginTop:5}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              שם חדר
            </Typography>
            <Typography variant="h5" component="div">
              {d.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {d.number}
            </Typography>
            <Typography variant="body2">
              ...תיאור
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">לפרטים</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
