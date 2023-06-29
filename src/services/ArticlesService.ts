import axios from "axios";
import { getBaseURL } from "../config/config";

const getAllArticles = () =>{
    return axios.get(getBaseURL("articles/all"));
}