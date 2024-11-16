import { usePage } from "@inertiajs/react"
import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

export default () => {

    const {props} = usePage()

    useEffect(() => {
        if(props.toast) {
            if(props.toast.status == 'success') toast.success(props.toast.message)
            if(props.toast.status == 'error') toast.error(props.toast.message)
            if(props.toast.status == 'info') toast(props.toast.message)
            if(props.toast.status == 'warn') toast.success(props.toast.message)
        }
    }, [props])

    return <Toaster position="top-right" />
}