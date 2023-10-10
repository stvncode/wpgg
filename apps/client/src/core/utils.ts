import jwt_decode from 'jwt-decode'

export const decodeAndVerifyJwtToken = (token: string) => jwt_decode(token)
