import { Btn } from "./Btn";


export function Header(){
    return(
        <>
            <header>
                <div className="logo">
                    Logo
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">Services</a>
                        </li>
                        <li>
                            <a href="#!">Contacts</a>
                        </li>
                        <li>
                            <Btn word="Entrar"/>
                        </li>
                        <li>
                            <Btn word="Sair" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}