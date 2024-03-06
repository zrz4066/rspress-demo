## LF Reader

MCU使用STM32F0x，低频的读写头采用TI TMS3705。

## 

## 裸机烧写

连接STLink和LF Reader后，打开PC烧写工具STM32 ST-LINK Utility.exe，把文件LF_boot_app_full.hex烧写进去。

<img title="" src="file:///C:/Users/Ice.zz/Desktop/lf-stlink.jpg" alt="lf-stlink" data-align="inline" style="zoom:100%;">

<img src="file:///C:/Users/Ice.zz/Pictures/Typedown/53abe69c-232f-4a94-92b5-1ce37d3cc0c4.png" title="" alt="53abe69c-232f-4a94-92b5-1ce37d3cc0c4" style="zoom:80%;">

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

 <img title="" src="file:///C:/Users/Ice.zz/Pictures/Typedown/5b85e0d9-1e8a-4e1e-8238-87b9e4bc662a.png" alt="5b85e0d9-1e8a-4e1e-8238-87b9e4bc662a" style="zoom:67%;">

### **固件升级**

点击【选择文件】，选择需要的*.bin文件，根据需要升级单一CAN节点或所有CAN节点。

#### **单一CAN节点**

鼠标点击目标CAN节点，选择【更新固件】，等待升级完毕，等到出现【升级成功】的字样，表示升级完成；如果不成功，也有出现失败的提示，可以再次重新升级。

 



#### **升级所有节点**

<img title="" src="file:///C:/Users/Ice.zz/Pictures/Typedown/b520e4e4-ca46-4f4d-8f8c-36b32e9f82d6.png" alt="b520e4e4-ca46-4f4d-8f8c-36b32e9f82d6" data-align="inline">

<img title="" src="file:///C:/Users/Ice.zz/Pictures/Typedown/c35229d9-682f-444f-8b16-8adefb285360.png" alt="c35229d9-682f-444f-8b16-8adefb285360" data-align="inline">

<img src="file:///C:/Users/Ice.zz/Pictures/Typedown/54e808c3-bfeb-4279-908a-b30f818048d5.png" title="" alt="54e808c3-bfeb-4279-908a-b30f818048d5" data-align="inline">

<img src="file:///C:/Users/Ice.zz/Pictures/Typedown/4b07987e-fecc-4f27-9b0d-e13e2be48e69.png" title="" alt="4b07987e-fecc-4f27-9b0d-e13e2be48e69" data-align="inline">

<img src="file:///C:/Users/Ice.zz/Pictures/Typedown/0591d779-4161-4ac7-8c29-181e26e33043.png" title="" alt="0591d779-4161-4ac7-8c29-181e26e33043" data-align="inline">

<img src="file:///C:/Users/Ice.zz/Pictures/Typedown/ce192ef4-08f6-4934-a258-bb2013c17bff.png" title="" alt="ce192ef4-08f6-4934-a258-bb2013c17bff" data-align="inline">
