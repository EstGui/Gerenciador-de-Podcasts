import { getFilterEpisodes, getListEpisodes } from "./Controllers/podcastsController" 
import { Routes } from "./Routes/routes";
import { HttpMethod } from "./Utils/http-methods";
import http from "http";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0];

    if ( req.method === HttpMethod.GET && baseUrl === Routes.LIST )
        await getListEpisodes(req, res);
    
    else if ( req.method === HttpMethod.GET && baseUrl === Routes.PODCAST )
        await getFilterEpisodes(req, res);
}