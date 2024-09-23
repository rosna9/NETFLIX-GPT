import{BG_URL} from"../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GPTSearch =()=>{
    return(
        <div>
            <div className='absolute -z-10'> 
        <img className='h-screen w-screen object-fill'
        src={BG_URL}
       alt='logo'/>
      </div>
            <div className="pt-[30%] md:p-0 ">
            <GptSearchBar />
            <GptMovieSuggestions />
            </div>
        </div>
    );
};
export default GPTSearch;