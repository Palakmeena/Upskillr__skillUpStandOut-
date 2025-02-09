function MyButton({count,onClick}){
    return(
      <div>
        <button style={{fontFamily:'cursive', fontSize:'30px', display:'flex', justifyContent:'center', alignItems:'center'}} onClick={onClick}>
          The button is  clicked {count} times
        </button>
      </div>)
  }