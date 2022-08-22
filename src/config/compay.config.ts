const endPoint = 'https://demo.campay.net/api';
export const GETTOKEN = `${endPoint}/token/`;
export const REQUESTPAYMENT = `${endPoint}/collect/`;
export const TRANSACTIONSTATUS = (ref:string) => `${endPoint}/transaction/${ref}/`;
export const WITHDRAW = `${endPoint}/withdraw/`;
export const GETBALANCE = `${endPoint}/balance/`;
export const HISTORY = `${endPoint}/history/`;

