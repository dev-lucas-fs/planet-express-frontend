import instance from "./api";



export function signIn({ email, password }) {
    return instance.post("auth/signIn", {
        email,
        password   
    })
}

export function signUp({ email, password, name, cpf, dataNascimento }) {
    return instance.post("auth/signUp", {
        email,
        password,
        name,
        cpf,
        dataNascimento,
    })
}