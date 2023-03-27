import {Suspense} from 'react'

async function getDataUser(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
}
async function getDataRepos(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}/repos`)
    await new Promise(r => setTimeout(r, 2000))
    return res.json()
}

const RepoList = async (params: any) => {
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
export default async function DetailCari({params}: {params: {slug: string}}) {
    const dataUser = await getDataUser(params.slug)
    // const dataUser = getDataUser(params.slug)
    // const dataRepos = getDataRepos(params.slug)
    // const [user, repos] = await Promise.all([dataUser, dataRepos])
    return (
        <>
            <div>
                <p>Detail User : {params.slug}</p>
                <p>{JSON.stringify(dataUser)}</p>
            </div>
            <Suspense fallback={<div>Wait...</div>}>
                {/* @ts-ignore */}
                <RepoList params={params.slug} />
            </Suspense>
        </>
    )
}
