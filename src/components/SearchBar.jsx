export function SearchBar({id, label, options}){
    return <div>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} list={id}/>
        <datalist id={id}>
            {options?.map(e => <option value={e}/>)}
        </datalist>
    </div>
}