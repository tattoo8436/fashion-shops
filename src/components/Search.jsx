import React, { useRef } from 'react'
import { useRef } from 'react';

const Search = props => {
    const inputRef = useRef(null);
    const typingTimeoutRef = useRef(null);
    const onChange = () => {
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        if(props.onChange){
            props.onChange(inputRef.current);
        }
    }

    const handlerSearchTermChange = (e) => {
        setSearchTerm(e.target.value);

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: e.target.value,
            }
            onSubmit(formValue);
        }, 500);

    }

    return (
        <form>
            <input type="text"
                onChange={onChange}
                placeholder='Tìm kiếm' />
        </form>
    )
}

export default Search
