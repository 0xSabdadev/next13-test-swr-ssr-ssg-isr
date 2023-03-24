async function getData(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}`)
    return res.json()
}
export default async function DetailCari({params}: {params: {slug: string}}) {
    const data = await getData(params.slug)
    return (
        <div>
            <p>Detail User : {params.slug}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
