import { InfoInterface } from "./info.Interface";

export interface ResponseAPI<T> {
    info: InfoInterface,
    results: T[]
}