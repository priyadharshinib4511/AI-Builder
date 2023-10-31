// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import React from "react";
// import { mockData, titleHead } from "./mockData";

// const TableComp = () => {
//   return (
//     <TableContainer component={Paper} sx={{ margin: 3, width: "90%" }}>
//       <Box display="flex" justifyContent="space-between">
//         Upload History
//         <Box>File Source search</Box>
//       </Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {titleHead.map((res, i) => (
//               <TableCell key={i}>
//                 <Box display="flex" flexWrap="nowrap">
//                   <Typography variant="body2" color="gray">
//                     {res.title}
//                   </Typography>
//                   <Box>
//                     <ArrowDropUpIcon />
//                     <ArrowDropDownIcon />
//                   </Box>
//                 </Box>
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {mockData.map((data) => (
//             <TableRow key={data.fileId}>
//               <TableCell>{data.fileId}</TableCell>
//               <TableCell>{data.fileName}</TableCell>
//               <TableCell>{data.domainSize}</TableCell>
//               <TableCell>{data.fileSize}</TableCell>
//               <TableCell>{data.fileSource}</TableCell>
//               <TableCell>{data.fileType}</TableCell>
//               <TableCell>{data.fileUploadDate}</TableCell>
//               <TableCell>{data.validationDate}</TableCell>
//               <TableCell>{data.validationStatus}</TableCell>
//               <TableCell>{data.actionableItem}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default TableComp;
