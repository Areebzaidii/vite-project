import './App.css'
function Alert({clsname,message}){
    return(
      <>
<div className="alert alert-success "style={{display:clsname}}>
  <strong>Success! </strong><span style={{fontWeight:500}}>{message}</span>
</div>
    </>)
}
export default Alert