import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(id:string){
    const route:string = `/check/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function info(id:string){
    const route:string = `/info/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function create(data:any){
    const route:string = `/domain`
    return request(RestMethod.POST,route,data)
}

export async function update(data:any){
    const route:string = `/domain`
    return request(RestMethod.PUT,route,data)
}

export async function renew(data:any) {
    const route:string = `/domain/${name}`
    return request(RestMethod.PUT,route,data)
}