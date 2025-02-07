
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.35:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.52:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.190:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.136:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.84:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.208:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.27:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.145:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.142:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.182:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.105:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.239:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.250:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.28:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.229:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-r7jps
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.149:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.171:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.180:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.158:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-q597i
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.168:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-kvg2a
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.76:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6fxsb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.194:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.60:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-rbhli
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.113:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-0bf4q
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.148:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-2pkic
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.2:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-cb2sj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.228:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.202:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.31:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.66:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.78:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.189:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.82:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-yagix
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.247:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.19:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.45:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.138:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.206:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.108:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.103:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-m3qby
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.41:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.117:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-eiggc
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.146:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.149:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-sphg4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.43:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-zd8xi
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.28:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-afa6l
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.175:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-sqeaf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.220:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-c51ov
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.112:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-uzkkc
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.50:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-e680x
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.145:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-zmp5a
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.197:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-j53u6
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.187:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.117:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.74:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.21:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.164:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-pxj43
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.79:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-gtinw
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.110:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-bstyb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.190:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-kpgsl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.70:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.107:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-xcdwf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.231:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-zfqw6
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.49:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-awr9a
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.200:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-j3j12
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.171:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-l0eh7
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.167:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-fosud
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.185:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ip5f1
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.58:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8yh11
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.202:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-yc3f5
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.118:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-avzwf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.214:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-dtp9g
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.63:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-mlhgu
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.219:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-mmc5s
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.213:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3ualu
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.162:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-30xkf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.74:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-olfxn
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.153:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7o6wj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.96:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8nw4t
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.7:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-bjuu4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.240:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-qvfze
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.23:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-s1bma
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.109:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-13ubg
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.73:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7xt0s
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.244:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-svvvz
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.254:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-coawl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.184:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-nsup4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.131:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ibjym
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.115:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-q9y9v
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.172:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ucxuu
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.155:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6tav6
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.68:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8l3o5
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.80:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-c0fof
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.170:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-58n80
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.77:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-5lg7g
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.234:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-y8w5y
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.27:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-obm05
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-s13b0
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.230:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ngq7g
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.218:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ff0zj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.57:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8rwtu
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.62:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-nr5wl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.122:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6fbvy
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.120:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-yjeod
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.39:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7fkyl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.98:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6siri
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.212:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-a2hod
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.114:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-y0o5j
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.243:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-atjyr
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.78:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-mqfgj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.154:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-01mhj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.35:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ycang
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.236:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-iwr3d
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.52:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4rufy
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.199:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-trbhl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.156:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-dmswm
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.251:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4e2ae
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.132:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jgns4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.182:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-wbaym
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.89:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-wznzy
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.55:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-z0v0p
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.21:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-g8duw
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.124:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6zg69
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.217:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-iwv25
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.123:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4guti
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.51:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jkyr3
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.18:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-sgft2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.88:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-u33vu
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.91:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-s60gj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.191:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.121:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-vs5d9
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.242:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-saosk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.3:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-pfmh4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.239:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-osv9j
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.140:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3fvao
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.95:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7407y
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.180:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-h5epp
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.176:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-x9ubi
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.196:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8nnv8
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.221:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-s48ii
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.93:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-tjldn
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.179:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-na6iy
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.222:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6i255
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.201:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-lirji
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.1:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-523t3
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.87:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-itftl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.42:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ijc7l
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.137:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-2ubnl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.163:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-hpsc4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.84:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-vsmjd
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.173:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.192:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-0x2hi
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.40:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9xgrf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.205:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-e4spv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.75:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-cogy2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.248:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-cwqo1
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.133:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8eau4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.159:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-xjwrg
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.90:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-g9iiq
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.10:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8tipr
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.25:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-mlz7t
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.241:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-dajlo
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.193:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-l0dy9
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.9:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-1nh7c
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.245:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-0gbm8
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.232:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9l49l
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.210:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-gyvo3
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.19:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-frt32
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.206:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jpnl8
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.191:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-qfhwo
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.105:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8tgtb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.189:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ophjh
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.224:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4xqwh
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.152:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9pucr
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.38:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-656sk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.100:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-v6b2b
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.15:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8h6ie
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.147:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-tbdif
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.67:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-yly44
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.72:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-nltz2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.174:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-65dna
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.208:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-g9b9g
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.249:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-hgr6t
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.36:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ev7yl
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.138:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7w0qv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.161:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-raopz
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.81:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-5grp0
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.130:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-y78uc
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.225:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-je2yc
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.97:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-nqz1x
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.227:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-guvzb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.146:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-z3jba
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.46:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-0cu68
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.255:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-m2azd
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.238:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-0hqcz
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.226:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-qjzd0
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.44:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9l8vd
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.188:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-b2t95
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.116:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.81:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.194:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-kfqjp
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.4:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.47:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jftyq
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.173:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-96ce7
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.6:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-rg4vx
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.223:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-5ztuj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.142:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-d2yqk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.134:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-rrdk7
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.32:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-02au0
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.65:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-xg0b2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-35hn0
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.69:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-g3q8i
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.127:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-p2x0q
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.54:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-2ps2f
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.187:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-n96mx
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.104:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4u2t4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.12:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-vglpr
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.166:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-tmbiq
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.14:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ecs5a
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.198:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-14vjk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.11:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7xitk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.59:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-kxucx
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.177:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-q1687
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.45:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-h6a9h
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.17:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ntbrp
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.16:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-bwx85
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.215:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8eivo
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.99:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-92dkv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.20:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6b726
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.237:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-qtouj
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.41:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-hzznd
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.150:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-iso1j
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.141:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-33jc8
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.86:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-j1p6p
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.128:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-meztg
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.209:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9099l
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.233:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-axlux
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.151:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ab2ql
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.70:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-fkchq
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.64:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-23zf8
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.83:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9ezjv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.228:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-c8ycs
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.236:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.26:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3niss
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.8:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-9ics4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.94:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ym1hi
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.135:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-hf5up
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.143:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7jn3t
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.13:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ruvs5
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.195:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-7jc8i
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.53:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6t0ji
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.157:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8ya94
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.216:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-ejccd
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.5:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-pfhfs
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.119:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-87qt5
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.102:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-yeypw
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.71:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-bxvzb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.48:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3lpgz
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.129:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-pk3at
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.139:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3vjme
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.144:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jk383
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.108:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-34n0t
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.160:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-dw1tk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.56:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-rnd2z
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.211:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-buj4l
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.66:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-s2j5m
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.165:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-x3m2q
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.85:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-a71o6
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.197:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.181:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-n1uba
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.101:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-vyzxo
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.22:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-rwg63
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.111:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.34:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-1mzi4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.247:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-wljj2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.37:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-i9zy2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.30:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8tv8y
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.126:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-sh40g
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.183:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-34any
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.207:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-r13ao
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.250:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-10ndb
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.253:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-6t77b
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.252:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-oajum
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.204:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-gjt9e
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.92:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jupyf
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.246:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-j2z8p
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.4:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-mm62r
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.169:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-zh8hm
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.116:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-o8hhp
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.31:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-fmknr
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.61:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-d4pj2
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.111:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-jim2d
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.178:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-xgtqo
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.186:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-4inuv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.24:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-3pofv
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.203:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-8oeex
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.29:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-pzv7a
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.106:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-kfbkx
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.71:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.30:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#CA
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1RDgzQ1x1REZDMVJFTEFZLTEwNC4xNy4yMjEuMjQ4LTA1NDIiLA0KICAiYWRkIjogImhzai5sYnhqYy5vbmxpbmUiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJlNjU0MzMxOS0wNTc0LTQyYWMtYjc3OC0xYzQzMjVkNjI2ZjUiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImNodW5jaHVhbi5rZWppeGlhb3FpNjY2LnN0b3JlIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://ebc5660f-bb9b-415c-94ab-d3630189ceb9@95.179.159.217:22671?encryption=none&security=none&type=tcp&headerType=http&host=telewebion.com#%F0%9F%87%B3%F0%9F%87%B1%5Bopenproxylist.com%5D%20vless-NL
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#%F0%9F%87%A8%F0%9F%87%A6%5Bopenproxylist.com%5D%20vless-CA
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@103.173.66.124:443?security=tls&allowInsecure=1&type=tcp&headerType=none#%5BVN-124%5Dopenproxylist.com
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@103.173.66.155:443?security=tls&allowInsecure=1&type=tcp&headerType=none#%5BVN-155%5Dopenproxylist.com
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@103.173.66.191:443?security=tls&allowInsecure=1&type=tcp&headerType=none#%5BVN-191%5Dopenproxylist.com


`

let urls = [];
let subConverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || (url.searchParams.has('clash') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ((url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))) {
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || (url.searchParams.has('surge') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'surge';
			} else if (userAgent.includes('quantumult%20x') || (url.searchParams.has('quanx') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'quanx';
			} else if (userAgent.includes('loon') || (url.searchParams.has('loon') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'loon';
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 请求订阅响应内容 = await getSUB(urls, request, 追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result);
			}

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl);

				if (!subConverterResponse.ok) {
					return new Response(base64Data, {
						headers: {
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subConverterUrl: ${subConverterResponse.status} ${subConverterResponse.statusText}`);
				}
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				return new Response(subConverterContent, {
					headers: {
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	}
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies') && content.includes('proxy-groups')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds') && content.includes('inbounds')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow"
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}
