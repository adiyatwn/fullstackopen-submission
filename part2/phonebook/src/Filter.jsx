const Filter = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      filter shown with <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  )
}

export default Filter
