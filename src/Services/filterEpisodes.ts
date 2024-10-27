import { IncomingMessage } from "http";
import { repPodcast } from "../Repositories/podcasts-repository"
import { IResponse } from "../Models/IResponse";
import { StatusCode } from "../Utils/status-code";

export const serviceFilterEpisodes = async (url: string | undefined) : Promise<IResponse> => {
    const podcastName = url?.split("?p=")[1] ?? "";

    let responseFormat:IResponse = {
        statusCode: 0,
        body: []
    };

    console.log(podcastName)
    const data = await repPodcast(podcastName);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}