# FridaArsenal
🔫Frida常用工具集合

------

## hook_RegisterNatives.js

打印注册函数

```
frida -U --no-pause -f package_name -l hook_RegisterNatives.js
```



## auto_print.js

标准算法自吐

```
frida -U --no-pause -f package_name -l auto_print.js
```