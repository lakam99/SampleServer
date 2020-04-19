export class WebServerResponse {
    public request_name:string;
    public method:Number;
    public parameter:string;

    constructor(request_name:string, method:Number, parameter:string){this.request_name=request_name;this.method=method;this.parameter=parameter;}
}