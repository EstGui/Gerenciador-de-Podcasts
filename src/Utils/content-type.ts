export enum ContentType {
    // Tipos de conteúdo básicos
    JSON = "application/json",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",
    XHTML = "application/xhtml+xml",
    CSS = "text/css",
    JAVASCRIPT = "application/javascript",
    
    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",
    ICO = "image/vnd.microsoft.icon",

    // Áudio e Vídeo
    MP3 = "audio/mpeg",
    MP4 = "video/mp4",
    OGG_AUDIO = "audio/ogg",
    OGG_VIDEO = "video/ogg",
    WEBM_AUDIO = "audio/webm",
    WEBM_VIDEO = "video/webm",
    WAV = "audio/wav",
    AVI = "video/x-msvideo",
    
    // Documentos
    PDF = "application/pdf",
    WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    POWERPOINT = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    RTF = "application/rtf",

    // Arquivos compactados
    ZIP = "application/zip",
    GZIP = "application/gzip",

    // Formulários
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // Tipos específicos
    OCTET_STREAM = "application/octet-stream",  // Para arquivos binários
    TAR = "application/x-tar",
    RAR = "application/vnd.rar"
}
