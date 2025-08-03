import { SignIn } from '@clerk/react-router'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-linear-150 from-slate-950 to-emerald-600 flex  justify-center text-white ">
     <div className="flex flex-col justify-even">
      <h1 className="text-2xl mt-8 mb-4 flex justify-center">Sign in or up route</h1>
      <SignIn />
     </div>
    </div>
  )
}