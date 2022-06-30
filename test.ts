import * as HostContoller from './src/controller/host.controller';

HostContoller.check("name").then((res) =>{
    console.log(res);
})