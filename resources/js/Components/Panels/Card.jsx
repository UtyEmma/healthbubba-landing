import { cn } from "@/lib/utils"

const Card = ({children, className = '', ...props}) => {
    return (
        <div className={cn([
            `bg-white border shadow-sm shadow-gray-50 rounded-xl p-1`,
            className
        ])}  {...props} >
            {children}
        </div>
    )
}

Card.GrayCard = ({children, className = '', ...props}) => {
    return (

        // shadow-[0px_0px_0px_1px_#00000012] #F6F8FA bg-[#f7f7f7] 
        <Card className={cn([
            `bg-[#F6F8FA]  border-[#E2E4E9] overflow-hidden`,
            className
        ])} {...props} >
            {children}
        </Card>
    )
}

Card.ShadowCard = ({children, className = '', ...props}) => {
    return (
        <Card className={cn([
            `shadow-card-1`,
            className
        ])} {...props} >
            {children}
        </Card>
    )
}

export default Card