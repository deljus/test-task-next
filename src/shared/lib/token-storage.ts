import { ENV } from '@/shared/config'
import { WebStorage } from './web-storage'

export type Tokens = {
    accessToken: string
    refreshToken: string
}

const TokenStorage = new WebStorage<Tokens>(ENV.TOKEN_KEY, window.localStorage);

export { TokenStorage }