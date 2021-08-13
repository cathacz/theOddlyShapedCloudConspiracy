import React, { useState } from "react";
import axios from "axios";
// import Loading from "../loading/Loading";
import Weather from "../weather/Weather";

// const Recipe = () => {
//   const [dataObj, setDataObj] = useState();
//   const APP_ID = "271b281a";
//   const APP_KEY = "88c627abf78667444cf4d804190f1b2c";

//   const location = useLocation();
//   const { id } = location.state;
//   // console.log(id);
//   // console.log("state", location.state);
//   useEffect(() => {
//     const getRecipe = async () => {
//       const response = await fetch(
//         `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=${APP_ID}&app_key=${APP_KEY}

//         `
//       );
//       const data = await response.json();
//       setDataObj(data[0]);
//     };

//     getRecipe();
//   }, []);

//   // console.log(dataObj);

//   return (
//     <div className="recipe-container">
//       <div className="single-recipe">
//         <h2>{dataObj ? dataObj.label : ""}</h2>
//         <img src={dataObj ? dataObj.image : ""} alt="dish-mage" />{" "}
//         <div className="twoBlocks">
//           {" "}
//           <div className="leftBlock">
//             {" "}
//             <p>
//               <h3 className="design-span">Cuisine:&nbsp;</h3>
//               {dataObj
//                 ? dataObj.cuisineType
//                 : // [0][0].toUpperCase() +
//                   //   dataObj.cuisineType[0].substring(1) ""
//                   "yummy"}
//             </p>
//             <p>
//               <h3 className="design-span">Meal Type:&nbsp;</h3>
//               {dataObj
//                 ? dataObj.mealType
//                 : // [0][0].toUpperCase() +
//                   //   dataObj.mealType[0].substring(1)
//                   ""}
//             </p>
//             <p>
//               <h3 className="design-span">Calories:&nbsp;</h3>
//               {dataObj ? Math.floor(dataObj.calories) : ""}kcal
//             </p>
//             <p>
//               <h3 className="design-span">Diet Label:&nbsp;</h3>
//               {dataObj ? dataObj.dietLabels : ""}
//             </p>
//           </div>
//           <div className="rightBlock">
//             <p className="ing">
//               <h3 className="design-span">Ingredients:</h3>
//               <ul>
//                 {dataObj
//                   ? dataObj.ingredients.map((item, i) => (
//                       <li>
//                         {/* <img src={item ? item.image : ""} /> */}
//                         <i>
//                           <GiPineapple />
//                         </i>
//                         {item.text}
//                       </li>
//                     ))
//                   : ""}
//               </ul>
//             </p>
//           </div>
//         </div>
//         <p className="linkP">
//           {" "}
//           <a href={dataObj ? dataObj.url : ""} target="_blank">
//             go see the full Recipe
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Recipe;

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const baseURL = "http://api.weatherapi.com/v1";
  const apiKey = "a6d7bfc595f44966b27135652211907"; //from https://www.weatherapi.com/

  const getLocation = (location) => {
    console.log(location);
    // let textToUrl = encodeURIComponent(location);

    let textToUrl = encodeURIComponent(location);
    //   if (location !== undefined || null) {
    //     return (textToUrl = encodeURIComponent(location));
    //   } else {
    //     return console.log("du mich auch");
    //   }
    // };
    // console.log(checkInput());
    let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${(textToUrl =
      textToUrl || "leipzig")}`;
    console.log(endPoint);

    // const res = await fetch(endPoint);
    // const data = await res.json();
    // console.log(data);

    // fetch(endPoint)
    //   .then((res) => res.json())
    //   .then((data) => setResult(data));
    // async function getData() {
    //   try {
    //     const response = await axios
    //       .get(endPoint)
    //       .then(({ data }) => setResult(data.data));
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // console.log(result);
    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch(
        console.error(
          `Nope – you took a wrong turn somewhere in ${(location =
            location || "leipig")}`
        )
      );
    // if (Object.keys(result.length === 0)) {
    //   return (endPoint = defaultLoc);
    // } else {
    //   return console.log("happy thoughts");
    // }
  };
  console.log(result);
  // console.log(getLocation());
  console.log(result);

  function handleChange(e) {
    setUserInput(e.target.value);
    // e.nativeEvent.stopImmediatePropagation();
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(userInput);
    // e.nativeEvent.stopImmediatePropagation();
    setUserInput("");
    // if (userInput === undefined || null) {
    //   return getLocation((userInput = "leipzig"));
    // } else {
    //   return getLocation(userInput);
    // }
  }
  // if (loading) return <Loading />;

  return (
    <React.Fragment>
      <div className="main">
        <h2>Did you see a suspicious looking cloud?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Where?"
          />
          <button type="submit">There!</button>
        </form>
        <Weather result={result} getLocation={getLocation} />
      </div>
    </React.Fragment>
  );
};
export default Search;
