import React, { useState } from 'react';
import './Header.css';
import Food_items from '../../Items';
import { useDispatch } from 'react-redux';
import { load_all_items } from '../../Action/Action';

function Header() {
    const[searchWord, setSearchWord] = useState();
    const[visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    function getSearchWord(word){
        console.log(word);
        const filterDev = Food_items.filter(app => app.keyWord.includes(word));
        console.log(filterDev);
        dispatch(load_all_items(filterDev));
        setVisible(true);
    }

    return (
        <div>
            <div className='Header flex justify-between pt-4 px-4'>
                <div className='logo'>
                    <h1 className='text-3xl font-bold'>F<span style={{color: "#FFA500"}}>oo</span>die!</h1>
                </div>
                <div className='flex gap-4'>
                    <div className='py-2 px-3 border-2 rounded-full'>
                        <form className='flex items-center' action="" onSubmit={(e) => {
                            e.preventDefault();
                            getSearchWord(searchWord);
                        }}>
                            <img className='mr-2' src="/search.png" alt="" />
                            <input value={searchWord} type="text" placeholder='Search' onChange={(element) => setSearchWord(element.target.value)} />
                        </form>
                    </div>
                    <button onClick={() => {
                        dispatch(load_all_items(Food_items))
                        setVisible(false)
                        setSearchWord('')
                    }} className='btn btn-primary' style={{display: visible ? "block" : "none"}}>Clear Search</button>
                </div>
            </div>
            
            <div className='mt-8 flex justify-center gap-8'>
                <button onClick={() => getSearchWord('veg')} className='btn btn-success btn-sm'>Vegetarian</button>
                <button onClick={() => getSearchWord('nonveg')} className='btn btn-danger btn-sm'>Non Vegetarian</button>
            </div>
        </div>
    )
}

export default Header
