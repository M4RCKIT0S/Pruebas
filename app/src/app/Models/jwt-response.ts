export interface JwtResponseI {
    dataUser:{
        password: string,
        email: string,
        accesToken: string;
        expiresIn: string;
    }
}