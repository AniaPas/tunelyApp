// //Hooks
// import { useEffect, useState } from "react";

// //Service
// import { fetchResponse } from "../../services/services";
// //Components
// import { Nav } from "../../components/Nav/Nav";
// export const Home = () => {
//   const [data, setData] = useState([]);
//   const [qValue, setQValue] = useState("eminem");
//   const getQValue = (inputData) => {
//     setQValue(inputData);
//   };
//   console.log(getQValue);
//   const options = {
//     method: "GET",
//     url: "https://deezerdevs-deezer.p.rapidapi.com/search",
//     params: { q: getQValue },
//     headers: {
//       "X-RapidAPI-Key": "6397603195mshdcec58da014ca4fp198769jsn691b947da31e",
//       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   };
//   const getResults = async () => {
//     try {
//       const response = await fetchResponse(options);
//       console.log(response.data);
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getResults();
//     // eslint-disable-next-line
//   }, []);
//   console.log(data);
//   return (
//     <>
//       <Nav getQValue={getQValue} qValue={qValue} />
//     </>
//   );
// };
