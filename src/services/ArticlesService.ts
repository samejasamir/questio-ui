import axios from "axios";

const getAllArticles = () =>{
    return axios.get(getBaseURL("articles/all"));
}