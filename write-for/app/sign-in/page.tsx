'use client'
// import React, { useState, useEffect } from 'react';
// import { GraduationCap, ArrowLeft, Shield, Users, Zap, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';


// const SignInPage = () => {
//    const {data ,status} = useSession();

//     const router = useRouter()
//     if(data?.user && status === 'authenticated') {
//       router.push('/dashboard');
//     } 

//   return (
//     <div className="min-h-screen flex" style={{ backgroundColor: '#0F0F1A' }}>

//        <div className="fixed inset-0 overflow-hidden pointer-events-none">
//          {/* Floating Orbs */}
//          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
//          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>      
//          <div className="absolute inset-0">
//            {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 flex items-center justify-center px-6 py-12">
//         <div className="w-full max-w-md">
//           {/* Back Button */}
//           <button
//             className="flex absolute top-10 left-10   bg-[#ffffff1a] rounded-full p-2   group"
//             onClick={() => window.history.back()}
//           >
//             <ArrowLeft fill='white' size={20} className=" group-hover:-translate-x-1 transition-transform duration-300" />
//           </button>

//           {/* Logo and Title */}
//           <div className="text-center mb-8 appeartext ">
//             <div className="flex items-center justify-center mb-6">
//               {/* <Link href={'/'} className=" w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
//                 <Image loading='lazy' width={250} height={250} src="/logo.png" className="w-16 h-16 logoanimation drop-shadow-xl drop-shadow-[#0000006e] rotate-[16deg]  " alt="Logo" />
//               </Link> */}
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
//             {/* <p className="text-gray-400">Sign in to your Be Present account</p> */}
//           </div>

//           {/* Sign In Card */}
//           <div className="heroimgshadow bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-2xl">
//             <div className="text-center mb-6">
//               <h2 className="text-xl font-semibold text-white mb-2">Sign in with Google</h2>
//               <p className="text-gray-400 text-sm">Access your dashboard securely</p>
//             </div>

//             {/* Google Sign In Button */}
//             <button
//               onClick={()=>signIn('google')}
//               className={`w-full flex items-center justify-center px-6 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg  
//                 }`}
//             >

//                 <>
//                   <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
//                     <path
//                       fill="#4285F4"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="#34A853"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="#FBBC05"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="#EA4335"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   Continue with Google
//                 </>

//             </button>

//             {/* Security Note */}
//             <div className="mt-6 p-4 bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-xl">
//               <div className="flex items-start">
//                 <Shield className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-sm text-purple-400 font-medium mb-1">Secure Authentication</p>
//                   <p className="text-xs text-gray-300">We use Google OAuth 2.0 for secure access. Your Google password is never shared with us.</p>
//                 </div>
//               </div>
//             </div>

//           </div>



//           <div className="mt-8 text-center">  
//             <div className="flex justify-center space-x-6 text-xs text-gray-500">
//               <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default SignInPage;




import { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import Back from '@/components/ui/back';

export default function SignIn() {

  const { data, status } = useSession();

  const router = useRouter()
  if (data?.user && status === 'authenticated') {
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen relative bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">

      <Back className=' absolute top-10 left-10 z-[20] text-white' />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/95 to-zinc-900/90"></div>
      </div>

      {/* Sign In Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
              <BookOpen size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-zinc-400">Sign in to continue to Write For Me</p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={() => signIn('google')}
            className="w-full bg-white hover:bg-zinc-100 cursor-pointer text-zinc-900 font-medium py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >

            <>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
                <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9465L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
                <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
                <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
              </svg>
              <span>Continue with Google</span>
            </>
          </button>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="text-sm text-zinc-500">Secure sign in</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          {/* Info Text */}
          <div className="text-center">
            <p className="text-sm text-zinc-400">
              By continuing, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Features Below Card */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
            <div className="text-xs text-zinc-400">Expert Writers</div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-400 mb-1">10k+</div>
            <div className="text-xs text-zinc-400">Completed</div>
          </div>
          <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-400 mb-1">4.9★</div>
            <div className="text-xs text-zinc-400">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}