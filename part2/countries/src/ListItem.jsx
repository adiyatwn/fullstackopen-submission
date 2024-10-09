const ListItem = ({ name, setInput }) => {
  return (
    <div key={name}>{name} <button onClick={() => setInput(name)}>show</button></div>
  )
}

export default ListItem
