import React, {userState} from "react"
import './Dictionary.css';


export default function Dictionary(){
    let[keyword,setKeyword] =userState("");


    function search(event){
        event.preventDefault();
    alert('Seaching fo $ {keyword} defination');
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
