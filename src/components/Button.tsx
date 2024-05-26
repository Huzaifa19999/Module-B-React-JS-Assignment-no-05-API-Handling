import React from 'react'
type btnProps = {

    className:string,
    onClick: (i:any) =>void, 
    label:string
}


function Button(props:btnProps) {


const  { className, onClick, label } = props

  return (
    <>

    <button className={className} onClick={onClick} >{label}</button>

    </>
  )
}

export default Button
