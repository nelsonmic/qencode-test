import { FC, PropsWithChildren } from "react"

const AuthLayout:FC<PropsWithChildren> = ({children}) => {
      return (
            <div>
                  <p>Hello login folks</p>
                  {children}</div>
      )
}
export default AuthLayout;