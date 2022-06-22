import SessionModel, {SessionDocument} from "../models/session.model";
import {FilterQuery, UpdateQuery} from "mongoose";
import {signJWT, verifyJWT} from "../utils/jwt.utuls";
import {get} from "lodash";
import {findUser} from "./user.service";
import config from "config";

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({user: userId, userAgent})

    return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean()
}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) {
    return SessionModel.updateOne(query, update)
}

export async function reIssueAccessToken({refreshToken}: { refreshToken: string }) {
    const {decoded} = verifyJWT(refreshToken)

    if (!decoded || !get(decoded, 'session')) return false

    const session = await SessionModel.findById(get(decoded, 'session'))

    if (!session || !session.valid) return false

    const user = await findUser({_id: session.user})

    if (!user) return false

    const accessToken = signJWT(
        {...user, session: session._id},// 15min
        {expiresIn: config.get('accessTokenTtl')}
    )
    return accessToken
}
