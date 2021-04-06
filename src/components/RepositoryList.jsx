import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name:"japeta-repository",
    description:"LALALALLALA",
    link:"https://github.com/felipeevalerio/github-explorer"
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}