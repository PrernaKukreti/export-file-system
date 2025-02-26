export interface fileDetail{
    name: string,
    device: string,
    path: string,
    status: string
}

export interface selectedFileDetail{
    name: string,
    device: string,
    path: string,
    status: string,
    selected: boolean
}

export interface exportFileData{
    Device: string,
    Path: string,
}