function main() {
    Java.perform(function x() {
        //接收消息
        Java.use("com.tencent.mm.protocal.protobuf.db").op.implementation = function (a1, a2) {
            console.log("===============");
            Java.openClassFile("/data/local/tmp/r0gson.dex").load();
            const gson = Java.use('com.r0ysue.gson.Gson');
            console.log(gson.$new().toJson(this));
            return this.op(a1, a2);
        }

        //scene 请求实体
        Java.use("com.tencent.mm.modelmulti.i").$init.overload('java.lang.String', 'java.lang.String', 'int', 'int', 'java.lang.Object').implementation = function (a1, a2, a3, a4, a5) {
            console.log("===============");
            // Java.openClassFile("/data/local/tmp/r0gson.dex").load();
            // const gson = Java.use('com.r0ysue.gson.Gson');
            // console.log(gson.$new().toJson(this));
            console.log("a1:" + a1);
            console.log("a2:" + a2);
            console.log("a3:" + a3);
            console.log("a4:" + a4);
            console.log("a5:" + a5);
            return this.$init(a1, a2, a3, a4, a5);
        }

    })
}

setImmediate(main)