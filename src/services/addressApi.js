import instance from "./api";



export function findAddress() {
    return instance.get("address", {
       headers: {
        "Authorization": `${localStorage.getItem("user-token")}`
       }
    })
}
