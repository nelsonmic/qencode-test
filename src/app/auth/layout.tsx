import { Logo } from "@/components/Icons";
import { Routes } from "@/core/routing";
import Link from "next/link";
import { FC, PropsWithChildren } from "react"

const AuthLayout:FC<PropsWithChildren> = ({children}) => {
      return (
            <div className="sm:min-h-[90vh] flex justify-center items-start">
                  <div className="flex items-center flex-col w-full max-w-[400px] p-4 mt-[140px] md:mt-24">
                        <Link href={Routes.auth.login}>
                              <Logo className="w-[178px] h-[32px] mb-8 sm:mb-12 md:mb-16 lg:mb-20"/>
                        </Link>
                        {children}
                  </div>
            </div>
      )
}
export default AuthLayout;