import NextAuth from 'next-auth'
import GooogleProvider from 'next-auth/providers/google';


const handler = NextAuth (
    {
        providers:[
            GooogleProvider({
                clientId:'',
                clientSecret:'',
            })
        ],
        async session({session}) {
            
        },
        async signIn({ profile}) {
            
        }
    }
)
export {handler as GET, handler as POST}