import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(name:string){
    let route:string = `/check/host/${name}`
    return request(RestMethod.GET,route)
}

export async function info(name:string){
    let route:string = `/info/host/${name}`
    return request(RestMethod.GET,route)
}

export async function create(){
    let data:any = {}
    let route:string = `/host`
    return request(RestMethod.POST,route,data)
}

export async function update(){
    let data:any = {}
    let route:string = `/host`
    return request(RestMethod.PUT,route,data)
}