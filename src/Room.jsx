import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room=()=>{
    const {roomID}=useParams();
    const meeting=async(element)=>{
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(Number(process.env.REACT_APP_APP_ID), process.env.REACT_APP_SERVER_SECRET, roomID,  Date.now().toString(),"sameer");
        // start the call
        const zp=ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.GroupCall, 
            },
        });
    };


    return (
        <div  ref={meeting} style={{width:"100vw",height:"100vh"}}>i am rom</div>
    )
}
export default Room;