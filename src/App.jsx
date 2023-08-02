import { useState } from "react"
import data from './emojis.json'


const App = () => {
const [inputValue, setInputValue] = useState('')
const [emojis, setEmojis] = useState(data)

  const handleChange = (event) => {
    const input = event.target
    const value = input.value
    console.log(value);
    setInputValue(value)

    const emojisFiltered = data.filter(emoji => {
      const filterByName = emoji.unicodeName.includes(value)
      const filterByGroup = emoji.group.includes(value)
      return filterByName || filterByGroup
    })

    setEmojis(emojisFiltered)
  }

  return (
    <div>
      <input 
      className="border"
      type="text" 
      onChange={handleChange}/>

      {emojis.map(emoji => {
        return (
          <article key={emoji.slug}>
            {emoji.group} {emoji.character} {emoji.unicodeName}
          </article>
        )
      })}
    </div>
  )
}

export default App