'use strict'

const frame= document.getElementById("reciver_frame")
const offer={"type":"offer","sdp":"v=0\r\no=- 4313283446483900694 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 27763139-085a-47e4-9d9a-dd64ed28c862\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:2017825195 1 udp 2113937151 50dfd6b6-fc8f-45ca-8455-e23d9cbe2413.local 52640 typ host generation 0 network-cost 999\r\na=ice-ufrag:uX+Y\r\na=ice-pwd:6JIMF0X9BcbJlViwvRQyUHJ6\r\na=ice-options:trickle\r\na=fingerprint:sha-256 CF:B3:09:16:C5:EA:03:2D:82:49:99:AF:3D:59:18:39:80:0F:5C:4D:BF:32:AA:86:F2:A1:C6:17:5A:A2:BE:8F\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:27763139-085a-47e4-9d9a-dd64ed28c862 247420d1-64d7-4811-bb5d-947853d3ef21\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:784709197 cname:qUXnafkFYM3H+ms8\r\na=ssrc:784709197 msid:27763139-085a-47e4-9d9a-dd64ed28c862 247420d1-64d7-4811-bb5d-947853d3ef21\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 102 103 104 105 106 107 108 109 127 125 39 40 45 46 98 99 100 101 112 113 114 115 116\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:uX+Y\r\na=ice-pwd:6JIMF0X9BcbJlViwvRQyUHJ6\r\na=ice-options:trickle\r\na=fingerprint:sha-256 CF:B3:09:16:C5:EA:03:2D:82:49:99:AF:3D:59:18:39:80:0F:5C:4D:BF:32:AA:86:F2:A1:C6:17:5A:A2:BE:8F\r\na=setup:actpass\r\na=mid:1\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:13 urn:3gpp:video-orientation\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=sendrecv\r\na=msid:27763139-085a-47e4-9d9a-dd64ed28c862 905bd200-7553-486f-aa06-dc15d46fb794\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:102 H264/90000\r\na=rtcp-fb:102 goog-remb\r\na=rtcp-fb:102 transport-cc\r\na=rtcp-fb:102 ccm fir\r\na=rtcp-fb:102 nack\r\na=rtcp-fb:102 nack pli\r\na=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f\r\na=rtpmap:103 rtx/90000\r\na=fmtp:103 apt=102\r\na=rtpmap:104 H264/90000\r\na=rtcp-fb:104 goog-remb\r\na=rtcp-fb:104 transport-cc\r\na=rtcp-fb:104 ccm fir\r\na=rtcp-fb:104 nack\r\na=rtcp-fb:104 nack pli\r\na=fmtp:104 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f\r\na=rtpmap:105 rtx/90000\r\na=fmtp:105 apt=104\r\na=rtpmap:106 H264/90000\r\na=rtcp-fb:106 goog-remb\r\na=rtcp-fb:106 transport-cc\r\na=rtcp-fb:106 ccm fir\r\na=rtcp-fb:106 nack\r\na=rtcp-fb:106 nack pli\r\na=fmtp:106 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:107 rtx/90000\r\na=fmtp:107 apt=106\r\na=rtpmap:108 H264/90000\r\na=rtcp-fb:108 goog-remb\r\na=rtcp-fb:108 transport-cc\r\na=rtcp-fb:108 ccm fir\r\na=rtcp-fb:108 nack\r\na=rtcp-fb:108 nack pli\r\na=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f\r\na=rtpmap:109 rtx/90000\r\na=fmtp:109 apt=108\r\na=rtpmap:127 H264/90000\r\na=rtcp-fb:127 goog-remb\r\na=rtcp-fb:127 transport-cc\r\na=rtcp-fb:127 ccm fir\r\na=rtcp-fb:127 nack\r\na=rtcp-fb:127 nack pli\r\na=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d001f\r\na=rtpmap:125 rtx/90000\r\na=fmtp:125 apt=127\r\na=rtpmap:39 H264/90000\r\na=rtcp-fb:39 goog-remb\r\na=rtcp-fb:39 transport-cc\r\na=rtcp-fb:39 ccm fir\r\na=rtcp-fb:39 nack\r\na=rtcp-fb:39 nack pli\r\na=fmtp:39 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=4d001f\r\na=rtpmap:40 rtx/90000\r\na=fmtp:40 apt=39\r\na=rtpmap:45 AV1/90000\r\na=rtcp-fb:45 goog-remb\r\na=rtcp-fb:45 transport-cc\r\na=rtcp-fb:45 ccm fir\r\na=rtcp-fb:45 nack\r\na=rtcp-fb:45 nack pli\r\na=rtpmap:46 rtx/90000\r\na=fmtp:46 apt=45\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:112 H264/90000\r\na=rtcp-fb:112 goog-remb\r\na=rtcp-fb:112 transport-cc\r\na=rtcp-fb:112 ccm fir\r\na=rtcp-fb:112 nack\r\na=rtcp-fb:112 nack pli\r\na=fmtp:112 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=64001f\r\na=rtpmap:113 rtx/90000\r\na=fmtp:113 apt=112\r\na=rtpmap:114 red/90000\r\na=rtpmap:115 rtx/90000\r\na=fmtp:115 apt=114\r\na=rtpmap:116 ulpfec/90000\r\na=ssrc-group:FID 3181499780 3985267597\r\na=ssrc:3181499780 cname:qUXnafkFYM3H+ms8\r\na=ssrc:3181499780 msid:27763139-085a-47e4-9d9a-dd64ed28c862 905bd200-7553-486f-aa06-dc15d46fb794\r\na=ssrc:3985267597 cname:qUXnafkFYM3H+ms8\r\na=ssrc:3985267597 msid:27763139-085a-47e4-9d9a-dd64ed28c862 905bd200-7553-486f-aa06-dc15d46fb794\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:uX+Y\r\na=ice-pwd:6JIMF0X9BcbJlViwvRQyUHJ6\r\na=ice-options:trickle\r\na=fingerprint:sha-256 CF:B3:09:16:C5:EA:03:2D:82:49:99:AF:3D:59:18:39:80:0F:5C:4D:BF:32:AA:86:F2:A1:C6:17:5A:A2:BE:8F\r\na=setup:actpass\r\na=mid:2\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}


const rc=new RTCPeerConnection();

rc.ontrack = (tracks)=>{
    console.log("Track recived");
}

rc.addEventListener('track',  (event) => {

    console.log("here also Track  recived");
    
    const [remoteStream] = event.streams;
    frame.srcObject = remoteStream;
})

rc.setRemoteDescription(offer)

let dataChannel;
rc.ondatachannel = (ch)=>{

    dataChannel=ch.channel;

    
    dataChannel.onopen =(m)=>{
        console.log("Connection open");
    }
    

    dataChannel.onmessage =(m)=>{
        console.log("message arrived: ",m.data);
    }

    

}

rc.onicecandidate= (c)=>{
    console.log("New iceCandidate : ")
    console.log( JSON.stringify(rc.localDescription));
}

rc.createAnswer().then((d)=>{ rc.setLocalDescription(d) }).then(()=>{ console.log("local description set")})




