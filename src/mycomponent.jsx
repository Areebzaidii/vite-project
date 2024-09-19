function MyApp({category,image,price,onClick}) {
        
    console.log(onClick)
    return(
        
        <div className='cardiv'>
            <div className='category'>{category}</div>
            <div className='imgg'><img style={{width:"100%",height:"100%",objectFit:"contain"}} src={image} alt="" /></div>
            <div className='butndiv'><button  className='btnnn' onClick={onClick}>${price}</button></div>
            </div>
        

        
        )
}


export default MyApp