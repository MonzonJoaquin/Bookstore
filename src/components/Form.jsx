export function Form({ input, datalist, selection, submit, radio, range, reset = false }) {
    return <form onSubmit={submit}>
        {input?.map((e, i) => <div key={i}> <label>{e.label}</label> <input id={e.id} type={e.type} onChange={(ev) => e.action(ev)} placeholder={e.placeholder} /> </div>)}
        {datalist?.map((e, i) => <div key={i}> <label htmlFor={e.id}>{e.label}</label> <input type='text' onChange={e.action} name={e.name} /> <datalist id={e.id}> {e.options?.map(e => <option key={e} value={e}>{e}</option>)}</datalist> </div>)}
        {selection?.map((e, i) => <div key={i}> <label></label> <select name={e.name} id={e.id}> {e.options?.map(e => <option key={e} value={e}>{e}</option>)} </select></div>)}
        {radio?.map((e, i) => <div key={i}> {e.options?.map((e, i) => <div key={i}> <label htmlFor={e.id}>{e.label}</label> <input type='checkbox' ></input> </div>)} </div>)}
        {range?.map((e, i) => <div key={i}> <label htmlFor={e.id}>{e.label}</label> <input type='range' min={e.min} max={e.max} onChange={e.action} value={e.value} /> <span>{e.value}</span> </div>)}
        {reset ? <input type="reset" value="Reset" /> : null}
        <input type="submit" value="Submit" />
    </form>
}

// label type id action placeholder