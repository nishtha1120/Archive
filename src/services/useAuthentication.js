
const useAuthentication = () => {
    const  token = localStorage.getItem('auth-token')
    
    if(token){
        return(
            {isAuthenticated : true}
        )
    }
    return{ isAuthenticated :false}

    
}

export default useAuthentication