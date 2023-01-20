// import React from 'react'

// const Render = ({props}) => {
//     console.log(props)

//   return (
//     <>
//       <div>Render</div>
//       {props.map((element,key)=>{
//         return ( 
//                   <img key={key} src={element.urls.thumb} alt='img'/>
//               )
//             }
//           )
//         }
//     </>
//   )
// }

// export default Render


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Render({props}) {
//   console.log(props)
//   return (
//     <Box sx={{ width: 1 }}>
//       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
//         {props.map((element,key)=>{
//               return ( 
//                         <Box gridColumn="span 8">
//                           <Item><img key={key} src={element.urls.thumb} alt='img'/></Item>
//                         </Box>
                        
//                     )
//                   }
//                 )
//               }
//       </Box>
//     </Box>
//   );
// }

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Render({props}) {
  return (
    <ImageList
      sx={{ width: 500, height: 850 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {props.map((item) => (
        <ImageListItem key={item.urls.thumb} cols={item.cols || 1} rows={item.rows || 1}>
        <Link to='./detail'>  <img
            {...srcset(item.urls.thumb, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          /></Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

