// import React,{useState} from "react";

// import {Tooltip,Grow} from "@mui/material";

// import { watchlist } from "../data/Data";

// import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";

// const WatchList = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length}/ 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock,index) => {
//           return(
//            <WatchListItem stock={stock} key={index} />);
//         })}
//       </ul>
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem=({stock})=> {
//   const [showWatchlistActions,setshowWatchlistActions] =useState(false);

//   const handleMouseEnter=(e) =>{
//     setshowWatchlistActions(true);
//   }

//   const handleMouseExit=(e) =>{
//     setshowWatchlistActions(false);
//   }

//   return(
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
//       <div className="item">
//         <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   )
// }

// const WatchListActions=({uid}) => {
//   return (
//     <span className="actions">
//       <span>
//         <Tooltip title="buy (B)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="buy">Buy</button>
//         </Tooltip>
//         <Tooltip title="sell (S)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="sell">sell</button>
//         </Tooltip>
//         <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action "><BarChartOutlined className="icon" /></button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//         <button className="action"><MoreHoriz className="icon" /></button>
//         </Tooltip>
//       </span>
//     </span>
//     );

// }


// import React, { useState, useContext } from "react";
// import { Tooltip, Grow } from "@mui/material";
// import { watchlist } from "../data/Data";
// import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
// import GeneralContext from "./GeneralContext"; // Import GeneralContext

// const WatchList = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length}/ 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = (e) => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseExit = (e) => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const { openBuyWindow } = useContext(GeneralContext); // Get the openBuyWindow function from context

//   const handleBuyClick = () => {
//     openBuyWindow(uid); // Trigger buy window with the stock's uid
//   };

//   return (
//     <span className="actions">
//       <span>
//         <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="buy" onClick={handleBuyClick}>Buy</button> {/* Attach click handler */}
//         </Tooltip>
//         <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="sell">Sell</button>
//         </Tooltip>
//         <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

// import React, { useState, useContext } from "react"; // Added useContext and useState from React
// import { Tooltip, Grow } from "@mui/material";
// import { watchlist } from "../data/Data";
// import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
// import GeneralContext from "./GeneralContext"; // Import GeneralContext

// const WatchList = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length}/ 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false); // Ensure useState is used here

//   const handleMouseEnter = (e) => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseExit = (e) => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const { openBuyWindow } = useContext(GeneralContext); // Get the openBuyWindow function from context

//   const handleBuyClick = () => {
//     openBuyWindow(uid); // Trigger buy window with the stock's uid
//   };

//   return (
//     <span className="actions">
//       <span>
//         <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="buy" onClick={handleBuyClick}>Buy</button> {/* Attach click handler */}
//         </Tooltip>
//         <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="sell">Sell</button>
//         </Tooltip>
//         <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };

import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/Data";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
