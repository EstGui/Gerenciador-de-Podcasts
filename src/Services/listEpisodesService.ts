import { IResponse } from "../Models/IResponse";
import { repPodcast } from "../Repositories/podcasts-repository";
import { StatusCode } from "../Utils/status-code";


export const serviceListEpisodes = async () : Promise<IResponse> => {
    const data = await repPodcast();

    let response:IResponse = {
        statusCode: 0,
        body: []
    }

    response = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return response;
}