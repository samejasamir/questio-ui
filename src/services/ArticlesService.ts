import axios from "axios";
import { getBaseURL } from "../config/config";

const getAllArticles = () =>{
    return axios.get(getBaseURL("articles/all"));
}

const ArticlesService = {
    getAllArticles
}

export default ArticlesService;