export const email = /^(www.)?[a-zA-Z0-9.]{0,50}@(gmail| yahoo| outlook).(co|com|in)$/;
export const password = /^[a-zA-Z0-9./@#$%^&*()_]{8,16}$/;
export const name = /^[a-zA-Z0-9.]{2,20}$/
export const phone = /^[1-9][0-9]{9}$/ 
// eslint-disable-next-line no-useless-escape
export const title = /^[a-zA-Z0-9 .\/\\\[\]()]{3,35}$/;
// eslint-disable-next-line no-useless-escape
export const description = /^[a-zA-Z0-9 ,.\/\[\]()]{25,100}$/;