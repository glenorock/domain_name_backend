import { Command } from "../app/lib/controller/lib/command";
import * as whois from '../app/lib/controller/lib/domain'

let s = new Command(whois.whois)
s.run("name","tests","fchgvjh")?.then((res) =>{
    console.log(res)
})