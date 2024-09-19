function Buttnnn({prptext,onClick,bgclbt}){
    // console.log(bgclbt)
    return(
        <>
        
        <button style={{backgroundColor:`${bgclbt}`,color: bgclbt === "#212529" ? "white" : "#212529",borderRadius:"30px",height:"30px",fontWeight:"600"}} onClick={onClick}>
        {prptext}
        </button>
        </>
    )
}
export default Buttnnn