import React from 'react'
const Bookmark = ({bookmark,func})=>{
    return (
        <>
            <div className='goback'><button onClick={func}>&lt;---</button><p>please go back  to search again</p></div>
            <h3>Bookmarked images</h3>
                {bookmark.map((data,index)=><img src={data} key={index} alt="" className='bookmarkedImages'/>)}
        </>
    )
}
export default Bookmark;