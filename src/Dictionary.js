import React, {userState} from "react"
import './Dictionary.css';
import axios from "axios";


export default function Dictionary(){
    let[keyword,setKeyword] =userState("");

    function handleResponse(response){
    console.groupCollapsed(response.data[0]);

    }
    function search(event) {
      event.preventDefault();
      alert(`Searching for ${keyword} definition`);

      let apiUrl="https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}";
      axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return<div className="Dictionary">
    <form onSubmit={search}>
        <input type="search"  onChange ={handleKeywordChange}/>
    </form>
    </div>
    
}
