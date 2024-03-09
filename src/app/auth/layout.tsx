import { Logo } from "@/components/Icons";
import { Routes } from "@/core/routing";
import Link from "next/link";
import { FC, PropsWithChildren } from "react"

const AuthLayout:FC<PropsWithChildren> = ({children}) => {
      return (
            <div className="min-h-[100vh] flex items-center justify-center">
                  <div className="flex items-center flex-col w-full max-w-[400px] px-2">
                        <Link href={Routes.auth.login}>
                              <Logo className="w-[178px] h-[32px] mb-8 sm:mb-12 md:mb-16 lg:mb-20"/>
                        </Link>
                        {children}
                  </div>
            </div>
      )
}
export default AuthLayout;