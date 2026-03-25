import { useEffect } from "react"

function MountAlert() {
    
  
  
    useEffect(() => {

  alert("Component mounted!")

}, [])  
  return (
    <div>MountAlert</div>
  )
}

export default MountAlert