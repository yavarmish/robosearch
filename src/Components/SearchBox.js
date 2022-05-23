const SearchBox=({seachField,searchChange})=>{   
    return(
        <div>
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type='text' 
            placeholder='Search Robots'
            onChange={searchChange}
            />
        </div>
    );
};
export default SearchBox;