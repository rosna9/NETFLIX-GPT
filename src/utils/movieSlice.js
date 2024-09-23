import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
name:"movies",
initialState:{
    nowPlayingMovies:null,
    PopularMovies:null,
    trailerVideo:null,
    top_Rated:null,
},
reducers:{
    addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload;
    },
    addPopularMovies:(state,action) =>{
        state.PopularMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
        },
    addtop_Rated:(state,action)=>{
            state.top_Rated=action.payload;
            },
    },
    }); 
    export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addtop_Rated } = movieSlice.actions; 
    export default movieSlice.reducer;  