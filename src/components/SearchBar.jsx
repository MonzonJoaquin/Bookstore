export function SearchBar({id, search, content, update, reset=null}){
    return <div>
        <input name={id} list={id} type='text' onChange={(e)=>update(e.target.value)}/>
        <button onClick={() => search()}>{content}</button>
        {reset?<button onClick={() => reset()}>Reset</button>:null}
    </div>
}