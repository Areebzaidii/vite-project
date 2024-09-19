function Imgd({imge,onClick}){
    return(  <div className='imagediv' onClick={onClick}><img style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px'}} src={imge} alt="" /></div>)
}
export default Imgd
