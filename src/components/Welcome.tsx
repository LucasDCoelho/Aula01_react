
interface User{
    nome: string;
}


const Welcome = (prop: User) => {
    return (
        <>
            <h1>Bem vindo {prop.nome}</h1>
        </>
    );
}

export default Welcome;