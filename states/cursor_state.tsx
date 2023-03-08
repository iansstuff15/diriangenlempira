
import { proxy } from "valtio";

export const cursorState = proxy({

    backgroundColor:'white',
    foregroundColor:'black',
    text:'',
    height:0,
    width:0,
    showDifference:false,
    visible:true,
    locationX:0,
    locationY:0,
    padding: 0,
    scale:1,
})