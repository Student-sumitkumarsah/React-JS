function Random(){
    let Number=Math.random()*10;

    return <h2 style={{'background-color':'#776691'}}>random number {Math.floor(Number)}</h2>
}
export default Random;