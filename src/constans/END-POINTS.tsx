export const BASE_URL="https://upskilling-egypt.com:3005/api" // it is main baseurl

export const BASE_URL_OF_AUTH=`${BASE_URL}/auth` // it is url of user or athontication 
export const AUTH_URL={
    login:`${BASE_URL_OF_AUTH}/login`,
    register:`${BASE_URL_OF_AUTH}/register`,
    changepassword:`${BASE_URL_OF_AUTH}/change-password`,
    forgotpassword:`${BASE_URL_OF_AUTH}/forgot-password`,
    resetpassword:`${BASE_URL_OF_AUTH}/reset-password`,
    verifyEmail:`${BASE_URL_OF_AUTH}/verify-email`,
    logout:`${BASE_URL_OF_AUTH}/logout`,

}



