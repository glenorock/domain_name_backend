import request, {campayPaymentRoutes} from '../../config/payRequest';
import { RestMethod } from '../types/enums/restMethod.enum';
import config from 'config';


const checkStatus = async (token:string, ref:string) => {
    const res = await request(RestMethod.POST,campayPaymentRoutes.status);
    return res
}

export async function pay(body:any){
    const user = config.get("payment.campay");
    const token = await request(RestMethod.POST,campayPaymentRoutes.token,user)
    const req = await request(RestMethod.POST,campayPaymentRoutes.requestPayment,{token:token.data,body})
    const ref =  req.data?.reference;
    let status = await checkStatus(token.data,ref);
    while (status.data.status === 'PENDING'){
        status = await checkStatus(token.data,ref);
    }
    return status.data;
}