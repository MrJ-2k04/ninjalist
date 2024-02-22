import Link from "next/link";
import styles from "@/styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return {
        props: {
            ninjas: users,
        }
    }
}

function Ninjas({ ninjas }) {
    return (<div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => {
            return <div key={ninja.id}>
                <Link href={`/ninjas/${ninja.id}`} className={styles.single}>
                    <h3>{ninja.name}</h3>
                </Link>
            </div>
        })}
    </div>);
}

export default Ninjas;