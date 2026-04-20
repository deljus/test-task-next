export type LoginDTO = {
    email: string
    password: string
}

export type LoginResponseDTO = {
    accessToken: string;
    refreshToken: string;
}