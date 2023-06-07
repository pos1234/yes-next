import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
 const authOptions = {
          session:{
            strategy:"jwt",
            jwt:true,
          },
          providers:[
            CredentialsProvider({
              type:'credentials',
              credentials:{
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
              authorize(credentials,req){
                const {email,password} = credentials
              if(email !== "abc@gmail.com" || password !=="1234"){
                throw new Error('invalid username or password');
              }
              return {id:'1234',name:'candidate',email:"abc@gmail.com"};
            }
            })
          ],
          secret: 'mysecretvalue',
          pages:{
            signIn:"/jobs/sign-in"
          }
}

export default NextAuth(authOptions)