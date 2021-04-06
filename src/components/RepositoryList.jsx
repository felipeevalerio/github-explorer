const title = "TesteTitle"

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{title}</strong>
                    <p>Forms em React</p>

                    <a href="">Acessar repositório</a>
                </li>
            </ul>
            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Forms em React</p>

                    <a href="">Acessar repositório</a>
                </li>
            </ul>
            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Forms em React</p>

                    <a href="">Acessar repositório</a>
                </li>
            </ul>
        </section>
    )
}