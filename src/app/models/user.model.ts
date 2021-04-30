export class User {
    id: number;
    firstName: String;
    middleName: string;
    lastName: String;
    roseID: string;
    email: string;
    phoneNumber: string;
    housingLocation: {
        address: string;
        id: number;
    }
}