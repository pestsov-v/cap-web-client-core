export type FunctionWithoutArgs = () => void
export type FunctionWithArgs = <T extends unknown>(...args: T) => void
export type AnyFunction = FunctionWithArgs | FunctionWithoutArgs
export type UnknownObject = Record<string, unknown>