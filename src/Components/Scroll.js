/** Scroll can use "children" as a way to render its children */
/** CSS can be used using {{}} as {} is used for JS */
const Scroll=(props)=>{
    return(
        <div style={{overflow:'hidden', position:'relative', border:'3px solid black',height:'800px', marginTop:'15px'}}>
            {
                <div style ={{overflowY:'scroll', position:'absolute', top:'0',bottom:'0',left: 0,right: '-17px'}}>
                    {props.children}
                </div>
            }
        </div>
    );
};
export default Scroll;