import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {

    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        if (countdown === 0) {
            router.push("/");
        } else {
            setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
    }, [countdown]);

    return (<div className="not-found">
        <h1>Oops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to <Link href={"/"}>Homepage</Link></p>
        <h3>Redirecting in {countdown} seconds...</h3>
    </div>);
}

export default NotFound;