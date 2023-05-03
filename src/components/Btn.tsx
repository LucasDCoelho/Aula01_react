
interface BtnProps{
    word: string;
}

export function Btn(prop: BtnProps) {
    return(
        <button>{prop.word}</button>
    );
}