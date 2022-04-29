import { Command } from "../app/lib/controller/lib/command";
import * as whois from '../app/lib/controller/lib/domain'



Command.run(new Command(whois.whois,"name","tests","fchgvjh")).then((res) =>{
    console.log(res)
})