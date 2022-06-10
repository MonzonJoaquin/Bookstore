

export function Paginated({maxIndex, items, action, style}) {
    const list = []
    for (let i = 1; i < maxIndex/items+1; i++) {
      list.push(i)
    }
      return (
          <div className={style}>
              <ul>
                  {list.map((number,i) => <li key={i}><span  onClick={() => action(number)}> {number} </span></li>)}
              </ul>
          </div>
      );
  }
  