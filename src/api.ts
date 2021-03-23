import axios from 'axios'
import type {AxiosResponse} from 'axios'
import { promiseRetryNoArgs } from './utils'

const apiUrl = 'https://free.navalny.com/api/v1/maps/counters/'

interface TGetCountResponse {
    persons: number
}

export const getCount = async (): Promise<number> => {
    try {
        const { data: { persons } } = await promiseRetryNoArgs<AxiosResponse<TGetCountResponse>>(() => axios.get<TGetCountResponse>(apiUrl))
        return persons
    } catch (e) {
        console.error(e)
        return -1
    }
}