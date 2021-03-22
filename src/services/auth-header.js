export default function authHeader(){
    const user =JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if(user && user.data.token){
        return {'x-access-token' : 'Bearer ' + user.data.token}
    }else{
        return {}
    }
}