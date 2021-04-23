export class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    roseID: string;
    email: string;
    phoneNumber: string;
    housingLocation: {
        address: string;
        id: number;
    }
    role: {
        id: number;
        role: string;
    }
}