// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText'
// import FavoriteIcon from '@mui/icons-material/Favorite';


    
// const Coba = () => {
//     const [state, setState] = React.useState({
//         left: false,
//       });
    
//       const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
    
//         setState({ ...state, [anchor]: open });
//       };
    
//       const list = (anchor) => (
//         <Box
//           sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//           role="presentation"
//           onClick={toggleDrawer(anchor, false)}
//           onKeyDown={toggleDrawer(anchor, false)}
//         >
//           <Divider />
//           <List>
//             <ListItem  >
//                 <ListItemButton>
//                     <ListItemIcon>
//                         <FavoriteIcon />
//                         <ListItemText style={{ fontSize: "18px", marginLeft: "10px", fontWeight: "bold"}}>Favorite</ListItemText>
//                         <ListItemText>
                        
//                         </ListItemText>
//                     </ListItemIcon>
//                 </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       );
//     return ( 
//          <div>
//       {['Favorite'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button variant='contained' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//      );
// }
 
// export default Coba;