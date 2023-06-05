import image from "../activos/img/doguito404.svg"
//C:\Users\joker\react_challenge_alura\src\activos\img\doguito404.svg
//import '../css/404.css'

const Error404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta página no existe</p>
        </main>
    )
}

export default Error404