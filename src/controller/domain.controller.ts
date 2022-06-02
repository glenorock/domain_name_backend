import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(id:string){
    let route:string = `/check/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function whois(id:string){
    let route:string = `/info/domain/${id}`
    return request(RestMethod.GET,route)
}

export async function info(id:string,auth:string){
    let route:string = `/info/domain/${id}/${auth}/${1}`
    return request(RestMethod.GET,route)
}


export async function create(){
    let data:any = {}
    let route:string = `/domain`
    return request(RestMethod.POST,route,data)
}

export async function update(){
    let data:any = {}
    let route:string = `/domain`
    return request(RestMethod.PUT,route,data)
}

export async function renew(name:string) {
    let data:any = {}
    let route:string = `/domain/${name}`
    return request(RestMethod.PUT,route,data)
}