import {Request, Response} from "express";
import {validatePassword} from "../service/user.service";
import {createSession, findSessions, updateSession} from "../service/session.service";
import {signJWT} from "../utils/jwt.utuls";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {

    //Validate the user`s password
    const user = await validatePassword(req.body)

    if (!user) return res.status(401).send("Invalid email or password")

    //create a session
    const session = await createSession(user._id, req.get("user-agent") || "")

    //create an access token
    const accessToken = signJWT(
        {...user, session: session._id},// 15min
        {expiresIn: config.get('accessTokenTtl')}
    )

    //create a refresh token
    const refreshToken = signJWT(
        {...user, session: session._id},// 15min
        {expiresIn: config.get('refreshTokenTtl')}
    )

    //return access and refresh tokens
    return res.send({accessToken, refreshToken})
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = res.locals.user._id
    const sessions = await findSessions({user: userId, valid: true})

    return res.send(sessions)
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session

    await updateSession({_id: sessionId}, {valid: false})

    return res.send({
        accessToken: null,
        refreshToken: null,
    })
}
