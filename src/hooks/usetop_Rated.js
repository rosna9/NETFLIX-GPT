
import { useEffect } from "react";
import {addtop_Rated} from "../utils/movieSlice";
import {API_OPTIONS} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
const useTop_Rated = () => {
    const dispatch = useDispatch();
    const top_Rated =useSelector((store)=> store.movies.top_Rated);
    const gettop_Rated= async ()=>{
    const data =await fetch(

        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
    );
    const json =await data.json();
    dispatch(addtop_Rated(json.results));
};
useEffect(() =>{
    if(!top_Rated)
        gettop_Rated();
    },[]);
};
export default useTop_Rated;

