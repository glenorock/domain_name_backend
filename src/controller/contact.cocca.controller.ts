import request from '../../config/eppRequest';
import { RestMethod } from '../types/enums/restMethod.enum';

export async function check(name:string){
    const route:string = `/check/contact/${name}`
    return request(RestMethod.GET,route)
}

export async function info(name:string){
    const route:string = `/info/contact/${name}`
    return request(RestMethod.GET,route)
}

export async function create(data:any){
    const route:string = `/contact`
    return request(RestMethod.POST,route,data)
}

export async function update(data:any){
    const route:string = `/contact`
    return request(RestMethod.PUT,route,data)
}