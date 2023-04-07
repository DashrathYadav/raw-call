1] Here i created sender and reciver to js and html files 

2] Sender --->  *  capture user media .
                *  create RTCpeer Instance
                *   adding tracks captured from user media
                *   creating channel for messaging data()
                *   having event listner on listining to connection open and message recived  
                *   creating offer(SDP) (ICE Candidates and other media,encrypto,network
                    info)  and any how making available to reciver.


3] Reciver ---> *   Creating RTC instance 
                *    setting remote description( offer of sender)
                *    listining to events of getting track add adding to video src.
                *    creating reciver answer and sending to sender     
                