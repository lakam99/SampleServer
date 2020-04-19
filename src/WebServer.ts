import * as express from 'express';
import {WebServerResponse} from './WebServerResponse';

export class WebServer {
    private port:Number;
    private express_obj:any;
    private responses:Array<WebServerResponse>;
    private server_started:boolean;
    public static SENDFILE:Number = 0;
    public static SENDMSG:Number = 1;

    constructor(port:Number) {
        this.set_port(port);
        this.express_obj = express();
        this.responses = [];
        this.server_started = false;
    }

    add_response(request_name:string, request_method:Number, request_parameter:string) {
        this.responses.push(new WebServerResponse(request_name, request_method, request_parameter));
    }

    private prepare_responses() {
        this.get_responses().forEach((prepared_response:WebServerResponse) => {
            this.get_server().get(prepared_response.request_name, (res, clientConnection)=>{
                switch(prepared_response.method) {
                    case WebServer.SENDFILE:
                        clientConnection.sendFile(prepared_response.parameter);
                        break;
                    case WebServer.SENDMSG:
                        clientConnection.send(prepared_response.parameter);
                        break;
                    default:
                        clientConnection.send("Invalid parameter " + prepared_response.parameter + " passed.");
                        break;
                }
            });
        });
    }

    start_server() {
        this.prepare_responses();
        this.get_server().listen(this.get_port(), () => {console.log("Listening on " + this.get_port()); this.server_started = true;});
    }

    private get_responses():Array<WebServerResponse> {
        return this.responses;
    }

    private set_port(port:Number) {this.port=port;}
    private get_port():Number {return this.port;}
    private get_server() {return this.express_obj};
}