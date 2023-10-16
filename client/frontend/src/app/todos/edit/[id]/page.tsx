export default function Page({ params } : { params: { id: string }} ) {
    return (
        <h1>Edit Todo {params.id}</h1>
    )
} 