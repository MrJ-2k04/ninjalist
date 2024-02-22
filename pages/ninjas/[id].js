

export const getStaticPaths = async () => {
    const users = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
    return {
        paths: users.map(user => ({
            params: { id: user.id.toString() }
        })),
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const ninja = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
    return {
        props: { ninja }
    }
}


const Ninja = ({ ninja }) => {
    return (<div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>);
}

export default Ninja;