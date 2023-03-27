import {Suspense} from 'react'
import RepoList from './sectionRepo'

async function getDataUser(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
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
