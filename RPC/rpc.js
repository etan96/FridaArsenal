function invoke(){
    Java.perform(function(){
        Java.choose("package_name",{
            onMatch:function(instance){
                console.log("found instance :",instance)
            },onComplete:function(){}
        })
    })
}
rpc.exports = {
    invokefunc:invoke
}
