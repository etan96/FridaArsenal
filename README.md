# FridaArsenal

🔫Frida常用工具集合

------

## 1. hook_RegisterNatives.js

打印注册函数

```
frida -U --no-pause -f package_name -l hook_RegisterNatives.js
```



## 2. auto_print.js

标准算法自吐

```
frida -U --no-pause -f package_name -l auto_print.js
```