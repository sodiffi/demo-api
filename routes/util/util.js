function ret(suc,msg,d){
    return JSON.stringify({success:suc,message:msg,d:d})
}
module.exports={
    ret
}