import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <>
            {/* error info, error.statusText, error.message */}
        </>
    )
}

export default ErrorPage;