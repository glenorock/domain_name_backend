import { Socket, Request } from '../../client'

export class Command {
    /**
     * @description The function to be executed
     */
    private exec:(...args: any[]) => Promise<unknown>
    
    /**
     * @description the paramters to be passed into the function
     */
    private params:any[]
    
    public constructor(exec:(...args: any[]) => Promise<unknown>,...params:any[]) {
        this.exec = exec
        this.params = params
    }



    /**
     * 
     * @description executes the command 
     */
    private execute = () => {
        switch(this.params.length){
            case 0:
                return this.exec.call(this)
            case 1:
                return this.exec.call(this,this.params[0])
            case 2:
                return this.exec.call(this,this.params[0],this.params[1])
            case 3:
                return this.exec.call(this,this.params[0],this.params[1],this.params[2])
            case 4:
                return this.exec.call(this,this.params[0],this.params[1],this.params[2],this.params[3])
        }
        
    }

    /**
     * 
     * @description Executes a command passed as parameter
     * @param command the command to be executed
     */
    static run = (command:Command) => {
        return new Promise((resolve, reject) => {
            const client = Socket.getInstance()
            client.send(Request.Session.hello()).then(() => {
                client.send(Request.Session.login()).then(() => {
                    command.execute()?.then((res) => {
                        client.send(Request.Session.logout()).then(() =>{
                            resolve(res)
                        }).catch((err) =>{
                            reject(err)
                        })
                    }).catch((err) =>{
                        reject(err)
                    })
                }).catch((err) => {
                    reject(err)
                })
            }).catch((err) => {
                reject(err)
            })
        })
    }
}