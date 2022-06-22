import {NextFunction, Request, Response} from "express";
import {get} from "lodash";
import {verifyJWT} from "../utils/jwt.utuls";
import {reIssueAccessToken} from "../service/session.service";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")
    const refreshToken = get(req, "headers.x-refresh")

    if (!accessToken) return next()

    const {decoded, expired} = verifyJWT(accessToken)

    if (decoded) {
        res.locals.user = decoded
        return next()
    }

    if (expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({refreshToken})

        // @ts-ignore
        if (newAccessToken) res.setHeader('x-access-token', newAccessToken)

        // @ts-ignore
        const result = verifyJWT(newAccessToken)

        res.locals.user = result.decoded
        return next()
    }

    return next()
}

export default deserializeUser

