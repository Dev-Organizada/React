import MyComponent from "./MyComponent";

const FirstComponent = () => {

    const name = "Nathaly"
    const data = {
        age: 28,
        job: "Programmer"
    }

    return (
        <div>
            {/* Forma de escrever comentarios no jsx */}
            <h2>Meu Primeiro Compomente</h2>
            <h3>Olá {name}, bem vinda!</h3>
            <p>Você atual como: {data.job}</p>
            <MyComponent/> {/* Objeto importado de outro componente */}
        </div>
    );
};
export default FirstComponent;