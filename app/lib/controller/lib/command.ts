import { Socket, Request } from '../../client'

export class Command {

    private exec:(...args: any[]) => Promise<unknown>
    
    constructor(exec:(...args: any[]) => Promise<unknown>) {
        this.exec = exec
    }

    run = (...args:any[]) => {
        let params:any[] = args
        console.log(args)
        switch(params.length){
            case 0:
                return this.exec.call(this)
            case 1:
                return this.exec.call(this,params[0])
            case 2:
                return this.exec.call(this,params[0],params[1])
            case 3:
                return this.exec.call(this,params[0],params[1],params[2])
            case 4:
                return this.exec.call(this,params[0],params[1],params[2],params[3])
        }
        
    }
}

