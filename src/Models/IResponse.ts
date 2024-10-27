import { Podcast } from "./IPodcast";

export interface IResponse {
    statusCode: number;
    body: Podcast[];
}