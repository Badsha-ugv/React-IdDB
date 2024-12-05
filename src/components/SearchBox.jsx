import React from 'react'

function SearchBox({setSearchTerm}) {

    const handleKeyPress = (event)=>{
        if (event.key == 'Enter'){
            // trigger search function here
            console.log('Search triggered')
            console.log(event.target.value)
            const inputValue = event.target.value
            setSearchTerm(inputValue)
            event.target.value = ''
        }
    }
  return (
    <div>
        <div className="row">
            <div className="col-4 mx-auto">
                <input type="text" className="form-control" onKeyPress={handleKeyPress}  placeholder="Search..." />
            </div>
        </div>
    </div>
  )
}

export default SearchBox