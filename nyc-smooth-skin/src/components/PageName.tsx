export function PageName(page: {title:string}) {
    return (
        <div className="pageName">
            <p>{page.title}</p>
        </div>
    )
}