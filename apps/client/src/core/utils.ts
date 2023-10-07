import jwt_decode from 'jwt-decode'

export const decodeAndVerifyJwtToken = (token: string) => {
  const decoded = jwt_decode(token)
  return decoded
}
