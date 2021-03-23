import promiseRetry from 'promise-retry'

export const promiseRetryNoArgs = <T>(promiseFunc: () => Promise<T>) => promiseRetry(retry => promiseFunc().catch(retry))