'use strict'
const frame= document.getElementById("serder_frame")

 let lc;
 stream();


 async function stream (){
  
  const localStream= await  navigator.mediaDevices.getUserMedia({video:true,audio:true})
   lc= new RTCPeerConnection();
   localStream.getTracks().forEach(track => {
       lc.addTrack(track, localStream)
       console.log(track);
       frame.srcObject=localStream;
  });

  const dataChannel= lc.createDataChannel("dataChannel");
dataChannel.onopen = ()=>{
    console.log("connnection open");
    
}

dataChannel.onmessage = (m)=>{
    console.log("message recived :",m.data);
}
lc.onicecandidate= (c)=>{
    console.log("New iceCandidate : ")
    console.log( JSON.stringify(lc.localDescription));
}

lc.createOffer().then((d)=>{ lc.setLocalDescription(d) }).then(()=>{ console.log("local description set")})

    // lc.addTrack(stream.getVideoTracks,stream);
    // lc.addTrack(stream.getAudioTracks,stream);

}

