## LF Reader

MCU使用STM32F0x，低频的读写头采用TI TMS3705。

## 

## 裸机烧写

连接STLink和LF Reader后，打开PC烧写工具STM32 ST-LINK Utility.exe，把文件LF_boot_app_full.hex烧写进去。

<img src="file:///C:/Users/Ice.zz/Desktop/lf-stlink.png" title="" alt="lf-stlink" data-align="inline">



## CAN设备在线升级

**连接和扫描**
=============

点击【1】扫描CAN转Ethernet设备，点击【2】连接CAN转以太网设备。完成连接后，可以点击【3】，扫描CAN节点。

【4】选中-表示启用FD CAN的升级，需要CAN节点和CAN转以太网都支持FD CAN才有效

未选中-表示传统CAN升级，所有的节点都兼容传统的CAN，升级速度预计90秒/节点

【8】选中-升级所有的CAN节点上的固件类型为BOOT/APP；

未选中-升级选中的CAN节点上的设备；

【10】中列出的固件类型为APP/BOOT表示支持在线升级；

【11】中列出的固件类型为unknown的表示不支持升级。

 

### **固件升级**

点击【选择文件】，选择需要的*.bin文件，根据需要升级单一CAN节点或所有CAN节点。

#### **单一CAN节点**

鼠标点击目标CAN节点，选择【更新固件】，等待升级完毕，等到出现【升级成功】的字样，表示升级完成；如果不成功，也有出现失败的提示，可以再次重新升级。

 



#### **升级所有节点**








