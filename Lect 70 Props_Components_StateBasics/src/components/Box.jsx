import "./Box.css"

// const Box = (props) => {
//   return (
//     // <div className="box" {...props}>Box</div>  // directly spreading the props to the div element, 
//     // so that we can use any prop like className, style etc. 
//     // when we use the Box component in App.jsx
//     // but this will overwrite the exsiting classname (that is common for all boxes as "box")
//     // in that case we use destructuring and rest operator
    
//   )
// }



const Box = ({className, style, ...rest}) => {
  return (
    <div className={`box ${className}`}   style={{...style, fontStyle:"italic"}}>
      BOX
    </div>
    
  )
}


export default Box