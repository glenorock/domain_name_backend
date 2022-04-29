import { Command } from "../app/controller/lib/command";
import * as whois from '../app/controller/lib/domain'



Command.run(new Command(whois.whois,"name","tests","fchgvjh")).then((res) =>{
    console.log(res)
})