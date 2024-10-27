import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../Services/listEpisodesService";
import { serviceFilterEpisodes } from "../Services/filterEpisodes";
import { ContentType } from "../Utils/content-type";

export const getListEpisodes = async ( req: IncomingMessage, res: ServerResponse ) => {
    const content = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse ) => {
    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
}