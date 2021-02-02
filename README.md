# FridaArsenal

🔫Frida常用工具集合

------

## 1. hook_RegisterNatives.js

打印注册函数

```shell
frida -U --no-pause -f package_name -l hook_RegisterNatives.js
```



## 2. auto_print.js

标准算法自吐

```shell
frida -U --no-pause -f package_name -l auto_print.js
```



## 3. RPC

rpc示例代码

```shell
python rpc.py
```



## 4. OkHttpLogger-Frida

拦截okhttp的脚本