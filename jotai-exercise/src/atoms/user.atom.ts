import { atom } from "jotai";

const firstNameAtom = atom<string>("Guest")
const lastNameAtom = atom<string>("User")
const ageAtom = atom<number>(0)
const hobbiesAtom = atom<string[]>([])

export {
    firstNameAtom,
    lastNameAtom,
    ageAtom,
    hobbiesAtom
}
