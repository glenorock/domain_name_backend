import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(id:string){
    let route:string = `/check/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function info(id:string){
    let route:string = `/info/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function create(data:any){
    let route:string = `/domain`
    return request(RestMethod.POST,route,data)
}

export async function update(data:any){
    let route:string = `/domain`
    return request(RestMethod.PUT,route,data)
}

export async function renew(data:any) {
    let route:string = `/domain/${name}`
    return request(RestMethod.PUT,route,data)
}