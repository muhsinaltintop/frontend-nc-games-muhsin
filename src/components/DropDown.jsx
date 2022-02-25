const DropDown = ({dropChange}) => {
 


    return (
      <form>
        <select defaultValue={'Sort'} onChange={dropChange}>
          <option>SortBy</option>
          <option value="sort_by=votes&order=ASC">Votes Low-High</option>
          <option value="sort_by=votes&order=DESC">Votes High-Low</option>
          <option value="sort_by=comment_count&order=ASC">Comment Low-High</option>
          <option value="sort_by=comment_count&order=DESC">Comment High-Low</option>
          <option value="sort_by=title&order=ASC">Title A-Z</option>
          <option value="sort_by=title&order=DESC">Title Z-A</option>
  
  
          
        </select>
      </form>
    )
  }
  
  export default DropDown;