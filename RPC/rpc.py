import time
import frida

def my_message_handler(message,payload):
    print(message)
    print(payload)
 
device = frida.get_usb_device()
# device = frida.get_device_manager().add_remote_device("192.168.1.102:9999")
print(device.enumerate_processes())
#pid = device.spawn(["package_name"])
#device.resume
#time.sleep(1)
#session = device.attach(pid)
session = device.attach("package_name")
with open("js") as f :
    script = session.create_script(f.read())
script.on("message",my_message_handler)
script.load()

command = ""
while True :
    command = input("Enter Command:")
    if command == "1":
        break
    elif command == "2":
        script.exports.invokefunc()