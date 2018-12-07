export class Sendemail {
    public email:string;
    public message:string;
    public postUrl:string;

    public Sendemail(email:string,message:string,postUrl:string){
        this.email = email;
        this.message = message;
        this.postUrl=postUrl;
    }
}
