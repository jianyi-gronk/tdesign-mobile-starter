import request from "../utils/request";
export const reqDateDdata = (url:string) => {
    return request.get(url)
}