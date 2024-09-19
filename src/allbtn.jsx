import './App.css'

function Allbtnn({txthead,onClick,bgcolorr}){
    // console.log(bgcolorr)
    
    return(
        <>
        
        <button style={{fontWeight:"600",backgroundColor:bgcolorr==="dark"?"#212529":"#f8f9fa",color:bgcolorr==="dark"?"white":"#212529",borderRadius:"30px",display:"flex",justifyContent:'center',alignItems:'center',height:"30px"}} onClick={onClick}> 

            {txthead}
        </button>
        </>
    )
}
export default Allbtnn