import { BACKEND_URL } from "../config/env";
import axios from "axios";

axios.defaults.baseURL = BACKEND_URL;

export default axios;
