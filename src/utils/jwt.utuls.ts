import config from "config";
import jwt from 'jsonwebtoken'

const privateKey = config.get("privateKey")
const publicKey = config.get("publicKey")

export function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
    // @ts-ignore
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    })
}

export function verifyJWT(token: string) {
    try {
        // @ts-ignore
        const decoded = jwt.verify(token, publicKey)
        return {
            valid: true,
            expired: false,
            decoded,
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null,
        }
    }
}
