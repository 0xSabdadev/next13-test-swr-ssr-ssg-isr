async function getDataRepos(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}/repos`)
    await new Promise(r => setTimeout(r, 2000))
    return res.json()
}

const RepoList = async ({params}: any) => {
    const dataRepos = await getDataRepos(params)
    return (
        <>
            <p>List repo :</p>
            <div>
                <p>{JSON.stringify(dataRepos)}</p>
            </div>
        </>
    )
}
export default RepoList
