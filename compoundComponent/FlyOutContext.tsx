// import Icon from '@mui/material/Icon';
// import React, { createContext, useContext, useState } from 'react';

// const FlyOutContext = createContext({});

// function FlyOut(props: any) {
//   const [open, toggle] = useState(false);

//   return (
//     <FlyOutContext.Provider value={{ open, toggle }}>
//       {props.children}
//     </FlyOutContext.Provider>
//   );
// }

// function Toggle({ className }) {
//     const { open, toggle } = useContext(FlyOutContext);
  
//     return (
//       <div className={className} onClick={() => toggle(!open)}>
//         <Icon />
//       </div>
//     );
//   }
  
// function List({ children }) {
//   const { open } = useContext(FlyOutContext);

//   return open && <ul className="flyout-list">{children}</ul>;
// }

// function Item({ children }) {
//   return <li className="flyout-item">{children}</li>;
// }

// FlyOut.Toggle = Toggle;
// FlyOut.List = List;
// FlyOut.Item = Item;