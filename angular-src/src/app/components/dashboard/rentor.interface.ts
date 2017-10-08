// user.interface.ts
export interface RentorInterface {
    fname: string; // required with minimum 5 characters
    lname:string;
    address: {
        street?: string; // required
        postcode?: string;
        address1?:string;
        address2?:string;
    };
    RoomType:string;
    Entry_Date:string;
    Leave_Date:string; 
    doclist: string; 
}
