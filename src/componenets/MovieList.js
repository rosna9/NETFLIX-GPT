import MovieCard from"./MovieCard";


const MovieList =({title,movies}) =>{
    return (
        <div className=" px-2 py-3 bg-black rounded-lg" >
            <h1 className="text-lg md:text-3xl py-3 font-bold text-white ">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard>
                    ))}
                </div>
            </div>
        </div>
);
};
export default MovieList;