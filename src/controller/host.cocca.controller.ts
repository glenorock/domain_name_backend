import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(domain: string, name:string, ext:string){
    const route:string = `/check/host/${domain}/${name}/${ext}`
    return request(RestMethod.GET,route)
}

export async function info(name: string, domain:string, ext:string){
    const route:string = `/info/host/${domain}/${name}/${ext}`
    return request(RestMethod.GET,route)
}


export async function create(data:any){
    const route:string = `/host`
    return request(RestMethod.POST,route,data)
}

export async function update(data:any){
    const route:string = `/host`
    return request(RestMethod.PUT,route,data)
}