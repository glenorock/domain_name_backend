import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(domain: string, name:string, ext:string){
    let route:string = `/check/host/${domain}/${name}/${ext}`
    return request(RestMethod.GET,route)
}

export async function info(name: string, domain:string, ext:string){
    let route:string = `/info/host/${domain}/${name}/${ext}`
    return request(RestMethod.GET,route)
}


export async function create(data:any){
    let route:string = `/host`
    return request(RestMethod.POST,route,data)
}

export async function update(data:any){
    let route:string = `/host`
    return request(RestMethod.PUT,route,data)
}