export class User {

    public _id:string;
    public name:string;
    public address:string;
    public phone:string;
    public email:string;
    public isAdmin:boolean;
    public password:string;

    public User(
        id:string,
        name:string,
        address:string,
        phone:string,
        email:string,
        password:string,
        isAdmin:boolean,
        
    ){
        this._id=id;
        this.name=name;
        this.address=address;
        this.phone=phone;
        this.email=email;
        this.isAdmin=isAdmin,
        this.password=password


    }
}
