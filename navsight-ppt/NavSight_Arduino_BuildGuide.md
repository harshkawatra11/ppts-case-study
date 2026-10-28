  
**NavSight Arduino Edition**

Complete Build Guide — From Zero to Hero

*AI-Powered Assistive Navigation for the Visually Impaired*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Based on NavSight by Vishwesh Soni & Harsh Kawatra · DTU

Arduino Edition Ideation & Build Documentation

Version 1.0 · 2024

**Hardware: Arduino Mega 2560 · 9 Sensors · DFPlayer Mini**

**Build Cost: \~Rs. 3,200 · Offline · Instant Boot · Works in Darkness**

**Table of Contents**

# **Chapter 1: Introduction — What Are We Building?**

Welcome. This document is your complete step-by-step guide to building NavSight Arduino Edition from absolute scratch. We will hold your hand through every single stage — from walking into the electronics market for the first time to uploading working code onto your Arduino and hearing your device speak its first alert.

Do not worry if you have never touched an Arduino before, never wired a circuit, or never written a single line of code. This guide is written assuming you know nothing. Every term will be explained. Every step will be shown. Every mistake you might make is warned about in advance.

## **1.1 What is NavSight?**

NavSight is an assistive navigation device for people who are visually impaired or completely blind. It is worn or attached to a white cane, and it uses sensors to detect the environment around the user. When it detects something dangerous — an obstacle, a vehicle, a wet floor, fire, or stairs — it speaks a voice alert out loud through a small speaker. The user hears "Danger, vehicle approaching\!" or "Stairs ahead, step carefully" and can react accordingly.

The original NavSight was built using a Raspberry Pi 4 computer with a camera and an AI model called YOLOv8-nano. This Arduino Edition replaces the camera and AI with a smart array of 9 physical sensors that detect the same hazards using physics — sound waves, infrared light, motion, vibration, and tilt. No internet needed. No camera. Works in pitch darkness. Boots instantly.

## **1.2 What Will This Device Do?**

* Detect obstacles on the left, centre, and right using 3 ultrasonic sound sensors

* Detect stairs and kerb drops ahead using laser sensors at ground level

* Detect approaching people and animals using a motion sensor

* Detect approaching vehicles using a ground vibration sensor

* Detect slopes using a gyroscope and accelerometer

* Detect wet floors using a water sensor

* Detect fire using a flame sensor

* Speak a natural voice alert for every hazard through a small speaker

* Give haptic vibration feedback on critical alerts

* Operate completely offline with no internet, no phone, no cloud

## **1.3 Who Is This Guide For?**

This guide is for students, makers, and developers in India who want to build an assistive device from scratch. You need no prior knowledge of electronics or programming. The only things you need are curiosity, patience, and the components listed in Chapter 2\. Total build time for a first-timer is approximately 2 to 3 days.

## **1.4 Overview of All Chapters**

| Chapter | What You Will Learn |
| :---- | :---- |
| 1 | Introduction — what we are building and why |
| 2 | Shopping list — every component, where to buy it, and how much it costs |
| 3 | Understanding each sensor — what it does in plain English |
| 4 | Setting up your workstation — installing software and drivers |
| 5 | Wiring the circuit — step-by-step with every wire explained |
| 6 | Complete source code — explained line by line |
| 7 | Uploading code and testing each sensor individually |
| 8 | Physical assembly — mounting everything on the cane |
| 9 | Final testing and calibration of the complete system |
| 10 | Troubleshooting — fixing the 20 most common problems |

# **Chapter 2: Shopping List — Everything You Need**

Before you touch a single wire, you need to buy everything. This chapter gives you the complete shopping list with exact model names, quantities, costs, and where to buy each item in India. Do not substitute components — use exactly what is listed here, especially for the sensors.

## **2.1 The Complete Bill of Materials**

| Component | Exact Model | Qty | Cost (INR) | Purpose |
| :---- | :---- | :---- | :---- | :---- |
| Arduino Mega 2560 | ATmega2560 R3 | 1 | **\~Rs.750** | Main brain of the device |
| Ultrasonic Distance Sensor | HC-SR04 | 3 | **\~Rs.150** | Left / Centre / Right obstacle detection |
| Time-of-Flight Laser Sensor | VL53L0X | 2 | **\~Rs.560** | Ground-level stair and kerb detection |
| PIR Motion Sensor | HC-SR501 | 1 | **\~Rs.40** | Detects moving people and animals |
| Vibration Sensor | SW-420 | 1 | **\~Rs.30** | Detects vehicle ground rumble |
| Gyroscope \+ Accelerometer | MPU-6050 | 1 | **\~Rs.80** | Detects slopes and stair climbing |
| Water / Rain Sensor | FC-37 | 1 | **\~Rs.30** | Detects wet floor |
| Flame / Fire Sensor | YG1006 | 1 | **\~Rs.40** | Detects open fire ahead |
| MP3 Player Module | DFPlayer Mini | 1 | **\~Rs.120** | Plays pre-recorded voice alerts |
| MicroSD Card | 2GB FAT32 format | 1 | **\~Rs.80** | Stores the MP3 alert sound files |
| Speaker | 3W 8-ohm small speaker | 1 | **\~Rs.60** | Audio output for voice alerts |
| Vibration Motor Module | Coin motor with driver board | 1 | **\~Rs.50** | Haptic buzz for critical alerts |
| USB Power Bank | 5V 2A, 5000mAh minimum | 1 | **\~Rs.400** | Portable battery to power everything |
| USB-A to USB-B Cable | Standard Arduino cable | 1 | **\~Rs.60** | Connect Arduino to your computer for coding |
| Full-size Breadboard | 830-point breadboard | 1 | **\~Rs.80** | Build the circuit without soldering |
| Jumper Wires Male-Male | 20cm dupont wires, 40-pack | 1 | **\~Rs.50** | Connecting components on breadboard |
| Jumper Wires Male-Female | 20cm dupont wires, 40-pack | 1 | **\~Rs.50** | Connecting sensors to breadboard |
| Resistors Kit | 1k ohm and 2k ohm, 10 each | 1 set | **\~Rs.30** | Voltage divider for HC-SR04 echo pin |
| White Cane or PVC Pipe | 1.1m length | 1 | **\~Rs.150** | The physical cane body |
| Zip Ties Pack | 3mm and 5mm mixed | 1 pack | **\~Rs.30** | Attaching sensors to the cane |
| Small Plastic Project Box | 10cm x 6cm x 4cm ABS box | 1 | **\~Rs.80** | Houses the Arduino and electronics |
| Heat Shrink Tubing Kit | Assorted sizes | 1 set | **\~Rs.50** | Protecting wire connections |
| Velcro Straps | 25cm straps | 4 | **\~Rs.30** | Attaching box to cane |
| 3.5mm Earphone (optional) | Any basic earphone | 1 | **\~Rs.80** | Alternative to speaker for private audio |
| **TOTAL ESTIMATED COST** |  |  | **\~Rs. 3,200** | All components combined |

## **2.2 Where to Buy in India**

**Robu.in —** Best option. Ships across India. Has every sensor on this list. Search by exact model name. Delivery in 3-5 days. Use this for: HC-SR04, VL53L0X, HC-SR501, SW-420, MPU-6050, FC-37, YG1006, DFPlayer Mini, vibration motor module.

**Amazon India —** Use for: Arduino Mega 2560, USB power bank, white cane, project box, velcro straps, earphone. Search "Arduino Mega 2560 original" and choose listings with 4+ stars.

**Flipkart —** Alternative to Amazon for Arduino Mega and power bank. Sometimes cheaper.

**Lajpat Rai Market, Delhi —** If you are in Delhi, this electronics market has everything in one place. You can buy and inspect all sensors physically. Located near Lajpat Rai Metro Station.

**Lamington Road, Mumbai —** Same as Lajpat Rai but for Mumbai. Covers all components.

**SP Road, Bengaluru —** Bengaluru equivalent. All components available here in person.

  **WARNING:**   Always buy the Arduino Mega 2560 R3 version. There are cheap clones — they work fine for this project. Just make sure the USB chip is CH340 or ATmega16U2, both work. Avoid boards with no USB chip at all.

  **TIP:**   Order everything from Robu.in in one cart to save on shipping. Add a few extra HC-SR04 sensors — they are only Rs. 50 each and sometimes get damaged during learning.

# **Chapter 3: Understanding Every Sensor — Plain English**

Before wiring anything, you must understand what each sensor does. This chapter explains every component like you have never seen one before. No jargon. Just what it does, how it works, and why it is in this project.

## **3.1 Arduino Mega 2560 — The Brain**

The Arduino Mega is a small computer board about the size of a large credit card. It has a microcontroller chip (the ATmega2560) that runs your code. It has 54 pins along its edges — these are the connection points where you plug in your sensors. When you write code and upload it, the Arduino runs that code forever, even without a computer connected, as long as it has power.

Why Mega and not Uno or Nano? Because this project uses 9 sensors, and each sensor needs its own pin. The Mega has 54 digital pins, giving you plenty of room. The Uno only has 14, which is not enough.

## **3.2 HC-SR04 — Ultrasonic Distance Sensor**

This sensor measures distance using sound. It sends out a burst of ultrasonic sound (too high-pitched for humans to hear), and then listens for the echo to bounce back. By measuring how long the echo takes, it calculates the distance to the object. Think of it like a bat using echolocation.

We use THREE of these sensors — one pointing left at 30 degrees, one pointing straight ahead, one pointing right at 30 degrees. Together they cover a 90-degree arc in front of the user. When any of them reads a distance less than 150cm, there is an obstacle in that direction. Less than 50cm means it is very close and dangerous.

**Range:** 2cm to 400cm. Accuracy: plus or minus 3mm. Needs 4 wires: VCC (power), GND (ground), TRIG (trigger), ECHO (echo).

  **WARNING:**   The ECHO pin of the HC-SR04 outputs 5 volts. The Arduino Mega GPIO pins are also 5V tolerant, so on the Mega this is safe. No voltage divider needed unlike the Raspberry Pi version.

## **3.3 VL53L0X — Time-of-Flight Laser Sensor**

This sensor shoots an invisible infrared laser beam and measures exactly how long it takes to bounce back. It is like a radar gun but uses light instead of radio waves. It is extremely precise — accurate to 1 millimetre.

We mount two of these sensors very low on the cane, about 20-25 centimetres from the ground, angled slightly downward. They constantly measure the distance to the floor surface in front of the cane tip. When the floor reading suddenly jumps from 22cm to 90cm, it means the floor has dropped away — there are stairs, a kerb edge, or a pothole ahead. The sensor cannot see it yet, but the floor has disappeared.

**Range:** 3cm to 200cm. Accuracy: plus or minus 1mm. Connects via I2C — only needs 2 data wires (SDA and SCL) shared with other I2C sensors.

## **3.4 HC-SR501 — PIR Motion Sensor**

PIR stands for Passive Infrared. Every living body — human, animal — emits heat as infrared radiation. This sensor has a dome-shaped lens that focuses infrared from a wide area. When a warm moving body enters its field of view and moves across it, the sensor detects the change in infrared pattern and fires its output pin HIGH.

We mount this at handle height, facing forward. When a person or animal approaches from up to 7 metres away, this sensor fires first — well before the ultrasonic sensors detect the obstacle. It gives early warning of moving people and animals.

**Range:** 3 metres to 7 metres, adjustable with a small screwdriver potentiometer on the board. Coverage: 110 degree cone. Output: digital HIGH when motion detected.

  **TIP:**   The HC-SR501 has two small orange potentiometers (adjustment screws) on the board. One adjusts sensitivity (range), one adjusts the hold time (how long it stays HIGH after detecting). Turn the sensitivity dial clockwise to increase range.

## **3.5 SW-420 — Vibration Sensor**

This is a simple but clever sensor. Inside is a small metal spring. When vibration reaches the sensor, the spring wobbles and makes brief electrical contact. The sensor outputs a digital signal when it detects vibration above its threshold.

We mount this on the cane tip, touching or very close to the ground. When a heavy vehicle — truck, bus, auto-rickshaw — is approaching, it creates ground vibrations that travel through the road surface long before the vehicle comes close enough for ultrasonic sensors to detect. The vibration sensor detects this rumble and fires a vehicle warning immediately.

**Sensitivity:** Adjustable with a small blue potentiometer on the board. Clockwise \= more sensitive. Threshold adjustment is important — see Chapter 9 for calibration.

## **3.6 MPU-6050 — Gyroscope and Accelerometer**

This single chip contains two sensors: a gyroscope and an accelerometer. The accelerometer measures how the board is tilted in 3 directions. The gyroscope measures the rate at which it is rotating. Together, they can tell you the exact orientation of the cane at any moment.

We use the pitch angle (forward-backward tilt) from this sensor. When the user walks on flat ground, the cane stays at a roughly constant angle. When they start climbing or descending stairs, the angle of the cane changes steadily as they lift and plant the cane on each step. When pitch angle exceeds 20 degrees, we fire a slope or stairs alert.

**Interface:** I2C. Connects on the same SDA/SCL pins as the VL53L0X sensors. Each I2C device has a unique address so they do not conflict.

## **3.7 FC-37 — Water and Wet Floor Sensor**

This sensor has a printed circuit board with two sets of interleaved copper traces that do not touch each other. When water bridges these traces, it creates a small electrical connection. The sensor detects this and outputs a signal. It is essentially measuring whether the surface it touches is wet.

We mount this flat on the cane tip. As the user sweeps the cane in their natural motion, the tip touches the floor ahead. If the floor is wet, this sensor detects it and fires a wet floor warning. Simple, cheap, and effective.

## **3.8 YG1006 — Flame and Fire Sensor**

This sensor contains a photodiode that is specifically sensitive to the wavelength of light emitted by open flames, between 760 and 1100 nanometres (near-infrared). When it detects this specific light signature within about 1 metre, it fires its output.

This is critical for indoor safety — kitchen fires, electrical fires, candles. We give this sensor the highest priority (Priority 0 — Override) because fire is the most immediately life-threatening hazard. When the flame sensor fires, the alert overrides everything else.

  **WARNING:**   The YG1006 can false-trigger under strong direct sunlight or near halogen spotlight bulbs. We use the analog output pin (A0) rather than the digital output pin (DO) so we can set a software threshold and ignore weak ambient infrared.

## **3.9 DFPlayer Mini — The Voice**

This small module is an MP3 player that accepts commands via Serial communication. You put MP3 sound files on a microSD card, insert it into the DFPlayer, and then send it a simple command from the Arduino like "play track 3". It plays the audio immediately through a connected speaker or earphone.

We pre-record all 11 alert phrases as MP3 files on your phone or computer, name them 001.mp3 through 011.mp3, copy them to the microSD card, and the DFPlayer handles all audio playback with zero processing burden on the Arduino.

# **Chapter 4: Setting Up Your Workstation**

Before touching the hardware, set up your computer. You need two things: the Arduino IDE (the software you use to write and upload code) and the required libraries (extra code packages that handle specific sensors).

## **4.1 Installing Arduino IDE**

1. Open your browser and go to: https://www.arduino.cc/en/software

2. Click the download button for your operating system — Windows, Mac, or Linux.

3. Run the installer. Click Next through all the steps. Accept all driver installations when prompted — these are the USB drivers needed to communicate with your Arduino.

4. Once installed, open Arduino IDE. You will see a white window with some starter code. That is normal.

5. Plug your Arduino Mega into your computer using the USB cable.

6. In Arduino IDE, go to the top menu: Tools \> Board \> Arduino AVR Boards \> Arduino Mega or Mega 2560\.

7. Then go to: Tools \> Port. You will see a COM port listed (on Windows: COM3, COM4, etc. On Mac: /dev/cu.usbmodemXXXX). Select it.

8. To verify your Arduino is connected correctly: go to File \> Examples \> 01.Basics \> Blink and click the Upload button (right arrow icon). The small LED on your Arduino should start blinking on and off every second. Congratulations — your Arduino is working.

## **4.2 Installing Required Libraries**

Libraries are packages of pre-written code that handle complex sensor communication so you do not have to write it yourself. We need four libraries.

### **Library 1: VL53L0X by Pololu**

9. In Arduino IDE, go to: Sketch \> Include Library \> Manage Libraries

10. In the search box, type: VL53L0X

11. Find "VL53L0X by Pololu" in the list

12. Click Install. Wait for it to finish.

### **Library 2: MPU6050 by Electronic Cats**

13. In the same Library Manager, search: MPU6050

14. Find "MPU6050 by Electronic Cats" and click Install.

### **Library 3: DFRobotDFPlayerMini**

15. Search: DFRobotDFPlayerMini

16. Find "DFRobotDFPlayerMini by DFRobot" and click Install.

### **Library 4: Wire (built-in — no install needed)**

The Wire library for I2C communication is built into Arduino IDE and requires no installation.

  **TIP:**   If you cannot find a library by name, close and reopen the Library Manager and try again. Sometimes it needs a moment to refresh its index.

## **4.3 Preparing the MP3 Alert Files**

The DFPlayer Mini plays MP3 files from a microSD card. You need to create 11 audio files — one for each alert phrase. Here is how to do it for free on your phone.

### **Step 1: Record the phrases**

On your Android phone, open any voice recorder app. Record each phrase clearly and slowly. Name each recording as shown below. Speak in a calm, clear voice as if you are reading an announcement.

| File Name | Phrase to Record | Trigger Condition |
| :---- | :---- | :---- |
| 001.mp3 | Danger, fire detected ahead. Move away immediately. | Flame sensor triggered |
| 002.mp3 | Danger, vehicle approaching. Stop immediately. | Vibration sensor triggered |
| 003.mp3 | Obstacle very close. Stop. | Ultrasonic under 50cm |
| 004.mp3 | Wet floor ahead. Walk carefully. | Water sensor triggered |
| 005.mp3 | Someone approaching ahead. | PIR motion detected |
| 006.mp3 | Stairs ahead. Step carefully. | ToF floor drop detected |
| 007.mp3 | Slope detected. Walk carefully. | IMU pitch over 20 degrees |
| 008.mp3 | Obstacle straight ahead. | Ultrasonic centre 50-150cm |
| 009.mp3 | On your left, object in path. | Ultrasonic left 50-150cm |
| 010.mp3 | On your right, object in path. | Ultrasonic right 50-150cm |
| 011.mp3 | NavSight ready. Stay safe. | Startup boot message |

### **Step 2: Convert to MP3 and copy to microSD**

17. Connect the microSD card to your computer using a card adapter.

18. Format it as FAT32. On Windows: right-click the drive in File Explorer \> Format \> FAT32. On Mac: use Disk Utility \> Erase \> MS-DOS FAT.

19. Create a folder on the card named exactly: mp3

20. Copy all 11 files into the mp3 folder. The files MUST be named 0001.mp3, 0002.mp3... (4 digits, not 3\) when using the folder approach. Alternatively, place the files directly in the root of the card named 001.mp3 through 011.mp3.

21. Safely eject the card and insert it into the DFPlayer Mini module slot.

  **WARNING:**   File naming is critical for the DFPlayer. If files are named incorrectly, the wrong alert will play. Double-check every filename before inserting the card.

# **Chapter 5: Wiring the Circuit — Step by Step**

This chapter walks you through wiring every single component to the Arduino Mega. We will do it one sensor at a time. Do NOT rush this. Wiring mistakes are the number one cause of problems in Arduino projects.

Before you start: lay all components on a flat table. Have your breadboard in front of you. Have your Arduino Mega above the breadboard. Keep your jumper wire packs open and sorted by colour if possible.

## **5.1 Understanding the Breadboard**

A breadboard is a rectangular plastic board with rows of holes. Each short row of 5 holes is connected internally — anything plugged into the same row of 5 is electrically connected. The two long rails along the top and bottom marked \+ and \- are power rails that run the full length of the board. Connect 5V to the \+ rail and GND to the \- rail, and you can power any sensor from anywhere on the board.

  **TIP:**   Use a red wire for all 5V (power) connections and a black wire for all GND (ground) connections throughout your project. This colour convention makes troubleshooting much easier.

## **5.2 Power Rails — Do This First**

22. Take a red jumper wire. Connect one end to the 5V pin on the Arduino Mega. Connect the other end to the \+ rail of the breadboard.

23. Take a black jumper wire. Connect one end to any GND pin on the Arduino Mega. Connect the other end to the \- rail of the breadboard.

Now your breadboard is powered. Any sensor plugged into the \+ rail gets 5V. Any sensor plugged into the \- rail connects to ground.

## **5.3 Wiring the Three HC-SR04 Ultrasonic Sensors**

Each HC-SR04 has 4 pins: VCC (power), GND (ground), TRIG (trigger — Arduino sends a pulse), ECHO (echo — Arduino reads the return).

### **HC-SR04 \#1 — LEFT sensor**

VCC  → Breadboard \+ rail (5V)

GND  → Breadboard \- rail (GND)

TRIG → Arduino Mega Pin 22

ECHO → Arduino Mega Pin 23

### **HC-SR04 \#2 — CENTRE sensor**

VCC  → Breadboard \+ rail (5V)

GND  → Breadboard \- rail (GND)

TRIG → Arduino Mega Pin 24

ECHO → Arduino Mega Pin 25

### **HC-SR04 \#3 — RIGHT sensor**

VCC  → Breadboard \+ rail (5V)

GND  → Breadboard \- rail (GND)

TRIG → Arduino Mega Pin 26

ECHO → Arduino Mega Pin 27

## **5.4 Wiring the Two VL53L0X ToF Sensors**

The VL53L0X uses I2C communication. It has 6 pins but we only use 4: VCC, GND, SDA (data), SCL (clock). By default, both VL53L0X sensors have the same I2C address (0x29). To use two on the same bus, we use the XSHUT pin to reset and reassign one of them to a different address in software.

### **VL53L0X \#1 — Left ground sensor**

VCC    → Breadboard \+ rail (3.3V — use the 3.3V pin on Arduino, NOT 5V)

GND    → Breadboard \- rail

SDA    → Arduino Mega Pin 20 (SDA)

SCL    → Arduino Mega Pin 21 (SCL)

XSHUT  → Arduino Mega Pin 28

### **VL53L0X \#2 — Right ground sensor**

VCC    → Breadboard \+ rail (3.3V)

GND    → Breadboard \- rail

SDA    → Arduino Mega Pin 20 (SDA) — same wire, shares the bus

SCL    → Arduino Mega Pin 21 (SCL) — same wire, shares the bus

XSHUT  → Arduino Mega Pin 29

  **WARNING:**   The VL53L0X runs on 3.3V, NOT 5V. The Arduino Mega has a dedicated 3.3V pin. Use it. Connecting VL53L0X to 5V will permanently damage the sensor.

## **5.5 Wiring the MPU-6050 IMU**

The MPU-6050 also uses I2C and shares the same SDA/SCL lines as the VL53L0X sensors. It has its own I2C address so there is no conflict.

VCC → Breadboard \+ rail (3.3V or 5V — this module is 5V tolerant)

GND → Breadboard \- rail

SDA → Arduino Mega Pin 20 (SDA)

SCL → Arduino Mega Pin 21 (SCL)

AD0 → GND (sets I2C address to 0x68)

## **5.6 Wiring the PIR Motion Sensor (HC-SR501)**

The PIR sensor has 3 pins: VCC, GND, and OUT (output). Some modules have pin labels on the board — check before connecting.

VCC → Breadboard \+ rail (5V)

GND → Breadboard \- rail

OUT → Arduino Mega Pin 30

  **TIP:**   After wiring the PIR, leave it alone for 30-60 seconds before testing. It needs a warm-up period to stabilise its internal infrared baseline.

## **5.7 Wiring the SW-420 Vibration Sensor**

VCC → Breadboard \+ rail (5V)

GND → Breadboard \- rail

DO  → Arduino Mega Pin 31 (Digital Output)

## **5.8 Wiring the FC-37 Water Sensor**

VCC → Breadboard \+ rail (5V)

GND → Breadboard \- rail

A0  → Arduino Mega Pin A0 (Analog pin for threshold reading)

We use the analog output (A0) instead of the digital output (DO) so we can set a software threshold for detecting wet vs. dry, making it less prone to false alarms from slight condensation.

## **5.9 Wiring the YG1006 Flame Sensor**

VCC → Breadboard \+ rail (5V)

GND → Breadboard \- rail

A0  → Arduino Mega Pin A1 (Analog — for threshold control)

## **5.10 Wiring the DFPlayer Mini**

The DFPlayer uses Serial communication. We use Serial2 on the Mega (Pins 16 and 17\) so it does not conflict with the USB serial port.

VCC  → Breadboard \+ rail (5V)

GND  → Breadboard \- rail

RX   → Arduino Mega Pin 16 (TX2) through a 1k ohm resistor

TX   → Arduino Mega Pin 17 (RX2)

SPK1 → Speaker positive wire

SPK2 → Speaker negative wire

  **WARNING:**   Connect a 1k ohm resistor between Arduino Pin 16 (TX2) and DFPlayer RX pin. Without this resistor, the DFPlayer can be damaged. This is a current-limiting resistor.

## **5.11 Wiring the Vibration Motor**

The vibration motor needs more current than an Arduino pin can safely supply directly. We use a transistor (BC547 NPN) as a switch.

Arduino Pin 32 → 1k ohm resistor → BC547 Base

BC547 Collector → Motor negative wire

BC547 Emitter  → GND

Motor positive  → 5V

1N4007 diode    → across motor terminals (cathode to \+, anode to \-)

  **TIP:**   The 1N4007 diode is called a flyback diode. When the motor turns off, it generates a voltage spike that can damage the Arduino. The diode absorbs this spike safely.

## **5.12 Complete Pin Reference Table**

| Component | Sensor Pin | Arduino Pin | Notes |
| :---- | :---- | :---- | :---- |
| HC-SR04 LEFT | TRIG / ECHO | 22 / 23 | Digital |
| HC-SR04 CENTRE | TRIG / ECHO | 24 / 25 | Digital |
| HC-SR04 RIGHT | TRIG / ECHO | 26 / 27 | Digital |
| VL53L0X \#1 | SDA/SCL/XSHUT | 20/21/28 | I2C, 3.3V |
| VL53L0X \#2 | SDA/SCL/XSHUT | 20/21/29 | I2C, 3.3V |
| MPU-6050 | SDA/SCL | 20/21 | I2C |
| HC-SR501 PIR | OUT | 30 | Digital |
| SW-420 Vibration | DO | 31 | Digital |
| FC-37 Water | A0 | A0 | Analog |
| YG1006 Flame | A0 | A1 | Analog |
| DFPlayer Mini | RX/TX | 16/17 | Serial2, 1k resistor on RX |
| Vibration Motor | Signal | 32 | Via BC547 transistor |

# **Chapter 6: Complete Source Code — Explained Line by Line**

This chapter contains the complete Arduino code for NavSight. Every section is explained before it is shown so you understand what it does. Do not just copy and paste — read each explanation first.

## **6.1 What the Code Does — Big Picture**

The code runs in an infinite loop. Every 40 milliseconds (25 times per second), it reads all 9 sensors, evaluates which hazard is most dangerous, and fires a voice alert if needed. A cooldown system ensures the same alert does not repeat more than once per second, preventing the device from talking continuously.

The code is structured in 5 parts: includes and pin definitions, global variables, setup function (runs once at startup), sensor reading functions, and the main loop function.

## **6.2 Part 1 — Includes and Pin Definitions**

This section tells the Arduino which libraries to use and assigns names to pin numbers. Using names like TRIG\_LEFT instead of the number 22 makes the code readable and easy to change later.

// NavSight Arduino Edition v1.0

// Complete source code

\#include \<Wire.h\>              // I2C communication (VL53L0X, MPU-6050)

\#include \<VL53L0X.h\>          // ToF laser sensor library

\#include \<MPU6050.h\>          // Gyroscope \+ Accelerometer

\#include \<DFRobotDFPlayerMini.h\> // MP3 player

// ── HC-SR04 ULTRASONIC PINS ──────────────────────────────────────────

\#define TRIG\_LEFT    22

\#define ECHO\_LEFT    23

\#define TRIG\_CENTRE  24

\#define ECHO\_CENTRE  25

\#define TRIG\_RIGHT   26

\#define ECHO\_RIGHT   27

// ── VL53L0X ToF PINS ─────────────────────────────────────────────────

\#define XSHUT\_TOF1   28   // Left ground sensor

\#define XSHUT\_TOF2   29   // Right ground sensor

// ── OTHER SENSOR PINS ────────────────────────────────────────────────

\#define PIR\_PIN      30

\#define VIB\_PIN      31

\#define MOTOR\_PIN    32

\#define WATER\_PIN    A0

\#define FLAME\_PIN    A1

// ── THRESHOLDS ───────────────────────────────────────────────────────

\#define DIST\_CRITICAL   50    // cm \- very close obstacle

\#define DIST\_WARNING    150   // cm \- obstacle warning range

\#define TOF\_DROP        40    // cm \- floor drop \= stairs/kerb

\#define PITCH\_SLOPE     20.0  // degrees \- slope detected

\#define WATER\_THRESHOLD 500   // analog value 0-1023

\#define FLAME\_THRESHOLD 200   // analog value \- lower \= more flame

\#define COOLDOWN\_MS     1000  // ms between same alert repeats

## **6.3 Part 2 — Global Variables**

Variables store the current sensor readings and track cooldown timers. The cooldown system is what prevents the device from saying "Obstacle ahead" on every single loop iteration while an obstacle stays in view.

// ── SENSOR OBJECTS ───────────────────────────────────────────────────

VL53L0X tof1;

VL53L0X tof2;

MPU6050 mpu;

DFRobotDFPlayerMini dfplayer;

// ── SENSOR READINGS ──────────────────────────────────────────────────

long distLeft, distCentre, distRight;

int  tof1Reading, tof2Reading;

bool pirDetected, vibDetected;

int  waterValue, flameValue;

float pitchAngle;

// ── COOLDOWN TIMERS (one per alert type) ─────────────────────────────

// Stores the millisecond timestamp of last time each alert fired

unsigned long lastFire  \= 0;  // fire alert

unsigned long lastVehicle \= 0;

unsigned long lastClose  \= 0;

unsigned long lastWater  \= 0;

unsigned long lastPerson \= 0;

unsigned long lastStairs \= 0;

unsigned long lastSlope  \= 0;

unsigned long lastObjC   \= 0;  // obstacle centre

unsigned long lastObjL   \= 0;  // obstacle left

unsigned long lastObjR   \= 0;  // obstacle right

## **6.4 Part 3 — Setup Function**

The setup function runs exactly once when the Arduino powers on. It initialises all sensors, starts serial communication, boots the DFPlayer, and plays the startup sound "NavSight ready. Stay safe."

void setup() {

  Serial.begin(9600);      // USB serial for debugging

  Serial2.begin(9600);     // Serial port for DFPlayer Mini

  // ── Pin modes ──────────────────────────────────────────────────────

  pinMode(TRIG\_LEFT,   OUTPUT);  pinMode(ECHO\_LEFT,   INPUT);

  pinMode(TRIG\_CENTRE, OUTPUT);  pinMode(ECHO\_CENTRE, INPUT);

  pinMode(TRIG\_RIGHT,  OUTPUT);  pinMode(ECHO\_RIGHT,  INPUT);

  pinMode(XSHUT\_TOF1,  OUTPUT);  pinMode(XSHUT\_TOF2,  OUTPUT);

  pinMode(PIR\_PIN,     INPUT);

  pinMode(VIB\_PIN,     INPUT);

  pinMode(MOTOR\_PIN,   OUTPUT);

  // ── Initialise I2C ─────────────────────────────────────────────────

  Wire.begin();

  // ── Initialise VL53L0X sensors with different I2C addresses ────────

  // Shut both down first

  digitalWrite(XSHUT\_TOF1, LOW);

  digitalWrite(XSHUT\_TOF2, LOW);

  delay(10);

  // Wake TOF1, assign address 0x30

  digitalWrite(XSHUT\_TOF1, HIGH);

  delay(10);

  tof1.init();

  tof1.setAddress(0x30);

  tof1.startContinuous();

  // Wake TOF2, it keeps default address 0x29

  digitalWrite(XSHUT\_TOF2, HIGH);

  delay(10);

  tof2.init();

  tof2.startContinuous();

  // ── Initialise MPU-6050 ────────────────────────────────────────────

  mpu.initialize();

  mpu.setFullScaleAccelRange(MPU6050\_ACCEL\_FS\_2);

  mpu.setFullScaleGyroRange(MPU6050\_GYRO\_FS\_250);

  // ── Initialise DFPlayer ────────────────────────────────────────────

  if (\!dfplayer.begin(Serial2)) {

    Serial.println("DFPlayer not found. Check wiring.");

    while(true);  // Halt if player not found

  }

  dfplayer.volume(25);  // Volume 0-30

  delay(1500);           // Wait for PIR to stabilise

  playAlert(11);         // Play: "NavSight ready. Stay safe."

  Serial.println("NavSight boot complete.");

}

## **6.5 Part 4 — Sensor Reading Functions**

Each sensor has its own dedicated reading function. This keeps the code clean and makes it easy to test one sensor at a time.

// ── READ ONE HC-SR04 ──────────────────────────────────────────────────

// Returns distance in centimetres. Returns 999 if no echo (clear path).

long readUltrasonic(int trigPin, int echoPin) {

  digitalWrite(trigPin, LOW);

  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);

  delayMicroseconds(10);   // 10-microsecond trigger pulse

  digitalWrite(trigPin, LOW);

  long duration \= pulseIn(echoPin, HIGH, 30000); // 30ms timeout

  if (duration \== 0\) return 999; // No echo \= clear

  return duration \* 0.034 / 2;  // Convert to cm

}

// ── READ MPU-6050 PITCH ANGLE ─────────────────────────────────────────

// Returns forward-backward tilt angle in degrees

float readPitch() {

  int16\_t ax, ay, az, gx, gy, gz;

  mpu.getMotion6(\&ax, \&ay, \&az, \&gx, \&gy, \&gz);

  // Pitch \= atan2 of vertical vs horizontal acceleration

  float pitch \= atan2((float)ay, (float)az) \* 180.0 / PI;

  return abs(pitch);  // Return absolute angle

}

// ── READ ALL SENSORS ──────────────────────────────────────────────────

void readAllSensors() {

  distLeft   \= readUltrasonic(TRIG\_LEFT,   ECHO\_LEFT);

  distCentre \= readUltrasonic(TRIG\_CENTRE, ECHO\_CENTRE);

  distRight  \= readUltrasonic(TRIG\_RIGHT,  ECHO\_RIGHT);

  tof1Reading \= tof1.readRangeContinuousMillimeters() / 10; // mm to cm

  tof2Reading \= tof2.readRangeContinuousMillimeters() / 10;

  pirDetected \= digitalRead(PIR\_PIN);

  vibDetected \= digitalRead(VIB\_PIN);

  waterValue  \= analogRead(WATER\_PIN);

  flameValue  \= analogRead(FLAME\_PIN);

  pitchAngle  \= readPitch();

}

## **6.6 Part 5 — Alert and Priority Functions**

The playAlert function sends a track number to the DFPlayer and simultaneously fires the vibration motor. The fireAlert function checks cooldown timers before playing anything, preventing audio spam.

// ── PLAY ALERT ────────────────────────────────────────────────────────

// track \= 1-11 matching your MP3 file numbers

// hapticCount \= number of motor buzzes (0=none, 1=warn, 3=critical)

void playAlert(int track, int hapticCount \= 0\) {

  dfplayer.play(track);

  if (hapticCount \> 0\) {

    for (int i \= 0; i \< hapticCount; i++) {

      digitalWrite(MOTOR\_PIN, HIGH);

      delay(100);

      digitalWrite(MOTOR\_PIN, LOW);

      delay(100);

    }

  }

}

// ── CHECK COOLDOWN AND FIRE ───────────────────────────────────────────

// Returns true if alert was fired, false if still in cooldown

bool fireAlert(unsigned long \&lastTime, int track, int haptic \= 0\) {

  unsigned long now \= millis();

  if (now \- lastTime \>= COOLDOWN\_MS) {

    lastTime \= now;

    playAlert(track, haptic);

    return true;

  }

  return false;

}

## **6.7 Part 6 — The Main Loop**

This is the heart of the program. It runs continuously. It reads all sensors, then evaluates them in priority order from most dangerous to least dangerous. As soon as one alert fires, it skips all lower priority ones and starts the next loop cycle. This ensures the most dangerous hazard is always spoken first.

void loop() {

  readAllSensors();  // Read all 9 sensors

  // ── PRIORITY 0: FIRE — Absolute override ─────────────────────────

  if (flameValue \< FLAME\_THRESHOLD) {

    fireAlert(lastFire, 1, 3);  // Track 1, 3 haptic pulses

    delay(400);

    return;  // Skip everything else this loop

  }

  // ── PRIORITY 1: VEHICLE VIBRATION ────────────────────────────────

  if (vibDetected \== HIGH) {

    fireAlert(lastVehicle, 2, 3);  // Track 2, 3 haptic pulses

    delay(200);

    return;

  }

  // ── PRIORITY 1: VERY CLOSE OBSTACLE (any direction) ──────────────

  if (distCentre \< DIST\_CRITICAL ||

      distLeft   \< DIST\_CRITICAL ||

      distRight  \< DIST\_CRITICAL) {

    fireAlert(lastClose, 3, 3);  // Track 3

    delay(200);

    return;

  }

  // ── PRIORITY 1: WET FLOOR ─────────────────────────────────────────

  if (waterValue \> WATER\_THRESHOLD) {

    fireAlert(lastWater, 4, 2);  // Track 4

    delay(200);

    return;

  }

  // ── PRIORITY 2: MOVING PERSON / ANIMAL ───────────────────────────

  if (pirDetected \== HIGH) {

    fireAlert(lastPerson, 5, 1);  // Track 5

    delay(200);

    return;

  }

  // ── PRIORITY 2: STAIRS / KERB DROP ───────────────────────────────

  if (tof1Reading \> TOF\_DROP || tof2Reading \> TOF\_DROP) {

    fireAlert(lastStairs, 6, 2);  // Track 6

    delay(200);

    return;

  }

  // ── PRIORITY 2: SLOPE ─────────────────────────────────────────────

  if (pitchAngle \> PITCH\_SLOPE) {

    fireAlert(lastSlope, 7, 1);  // Track 7

    delay(200);

    return;

  }

  // ── PRIORITY 3: WARNING-RANGE OBSTACLE ───────────────────────────

  if (distCentre \< DIST\_WARNING) {

    fireAlert(lastObjC, 8, 0);  // Track 8: Obstacle straight ahead

  } else if (distLeft \< DIST\_WARNING) {

    fireAlert(lastObjL, 9, 0);  // Track 9: On your left

  } else if (distRight \< DIST\_WARNING) {

    fireAlert(lastObjR, 10, 0); // Track 10: On your right

  }

  delay(40);  // \~25 loops per second

}

# **Chapter 7: Uploading Code and Testing Each Sensor**

Do not test everything at once. Test each sensor individually first. This way, if something does not work, you know exactly which sensor or wire is the problem.

## **7.1 Uploading the Code**

24. Open Arduino IDE.

25. Create a new sketch: File \> New.

26. Delete all existing text in the editor.

27. Copy the complete code from Chapter 6 and paste it into the editor.

28. Click the checkmark icon (Verify) first. Wait for it to compile. If you see any red errors, check that all libraries are installed correctly (Chapter 4.2).

29. Click the right-arrow icon (Upload). The IDE will compile and transfer the code to your Arduino. The TX/RX LEDs on the Arduino will flicker during upload.

30. When upload completes, you will see "Done uploading." at the bottom. Your device will automatically restart and play "NavSight ready. Stay safe."

## **7.2 Testing the HC-SR04 Sensors**

Open the Serial Monitor (Tools \> Serial Monitor, set baud rate to 9600). Hold your hand in front of the centre ultrasonic sensor. Move it closer and farther. You should see the distance change in the monitor output. At under 50cm you should hear "Obstacle very close." At 50-150cm you should hear "Obstacle straight ahead."

  **TIP:**   If only one sensor works, the other wires may be swapped. TRIG and ECHO are easy to confuse. Double-check pins 22/23, 24/25, 26/27.

## **7.3 Testing the VL53L0X ToF Sensors**

Place the ToF sensor face-down, pointing at the floor. Its normal reading on a flat floor is 20-25cm. Now hold a book under the sensor to simulate a raised floor, then quickly remove it to simulate a step edge. When the reading jumps above 40cm, you should hear "Stairs ahead."

## **7.4 Testing the PIR Sensor**

Walk in front of the sensor from a distance of about 3-4 metres. You should hear "Someone approaching ahead." Remember the sensor needs 30-60 seconds of warm-up time after power-on before it works reliably.

## **7.5 Testing the Vibration Sensor**

Tap the table firmly near the sensor, or knock on the floor near the cane tip. You should hear "Danger, vehicle approaching." If it is too sensitive (fires from light touch), turn the blue potentiometer on the SW-420 counter-clockwise slightly.

## **7.6 Testing the Water Sensor**

Dip the sensor tip in a glass of water. You should immediately hear "Wet floor ahead." Remove it and dry it — the alert should stop after the cooldown.

## **7.7 Testing the Flame Sensor**

Light a lighter or match about 30cm in front of the sensor. You should hear "Danger, fire detected ahead. Move away immediately." The device should also buzz three times.

  **WARNING:**   Test the flame sensor briefly and carefully. Do not leave a flame burning near the device. Extinguish immediately after testing.

## **7.8 Testing the MPU-6050**

Tilt the Arduino board at a steep angle (over 20 degrees). You should hear "Slope detected. Walk carefully." Lay it flat again — no alert should fire.

# **Chapter 8: Physical Assembly — Mounting Everything on the Cane**

Now that all sensors are tested and working on the breadboard, it is time to mount them on the cane. We divide the cane into three physical zones: Ground Zone, Mid Zone, and Handle Zone.

## **8.1 The Three Zones**

| Zone | Height on Cane | What Goes Here |
| :---- | :---- | :---- |
| **Ground Zone** | 0 to 30cm from tip | SW-420 vibration sensor (touches ground), FC-37 water sensor (tip), two VL53L0X ToF sensors angled downward |
| **Mid Zone** | 60 to 90cm height | Three HC-SR04 ultrasonic sensors in a 120-degree forward arc: left at 30 degrees, centre straight, right at 30 degrees |
| **Handle Zone** | 90cm to top | Arduino Mega in project box, DFPlayer, power bank, PIR sensor facing forward, YG1006 flame sensor, MPU-6050, vibration motor in grip |

## **8.2 Step-by-Step Assembly**

31. Start with the cane tip. Use epoxy or M-seal to waterproof the FC-37 water sensor. Attach it flat against the bottom of the cane tip using zip ties so it contacts the floor when the cane sweeps.

32. Attach the SW-420 vibration sensor 5cm above the tip, pressing against the cane shaft. Zip-tie it firmly. Its contact with the cane shaft transmits ground vibration perfectly.

33. Mount the two VL53L0X sensors on small brackets at 20-25cm height on the front face of the cane. Angle them 10 degrees downward and 15 degrees outward. Secure with zip ties and heat shrink tubing over the wire connections.

34. At the Mid Zone (70-80cm height), create a sensor mount for the three HC-SR04 sensors. If you have access to a 3D printer, print a bracket that holds them at 30-degree angles. Otherwise, use zip ties and fold small pieces of cardboard to set the angle, then secure with heat shrink.

35. Run all sensor wires up inside or along the back of the cane shaft. Bundle them with zip ties every 10cm. Leave enough slack near each sensor connection point so the wires do not pull tight when the cane flexes.

36. Drill or cut a hole in the project box large enough for the USB-B port of the Arduino to be accessible. Mount the Arduino inside the box. Secure the DFPlayer and breadboard inside the box with double-sided foam tape.

37. Mount the project box at handle height using Velcro straps. This keeps it removable for programming and maintenance.

38. Mount the PIR sensor on the front face of the box, facing forward, at approximately 100cm height.

39. Embed the vibration motor inside the rubber handle grip. The user holds the handle, so they feel the haptic buzz directly in their palm.

40. Connect the power bank to the Arduino Mega USB-B port. Tuck the power bank into a small pouch or strap it alongside the box with Velcro.

## **8.3 Final Wiring Cleanup**

Once everything is mounted, go back and check every connection. Tug each wire gently — it should not come loose. Apply heat shrink tubing over any bare wire joints. Use electrical tape on any exposed solder points. The device will be carried outdoors and will experience movement, rain, and heat — all connections must be secure.

  **WARNING:**   Water can damage electronics. Apply a thin coat of conformal coating spray (available at electronics stores) over the Arduino and breadboard connections to resist moisture. Leave the sensor faces and USB port uncoated.

# **Chapter 9: Final Testing and Calibration**

The assembled device needs calibration — adjusting sensor sensitivities to match real-world conditions. What works on a lab bench may need tweaking in an actual outdoor environment.

## **9.1 Calibrating the SW-420 Vibration Sensor**

The vibration sensor has a small blue potentiometer (adjustment screw). Start with it in the middle position. Walk on different surfaces — smooth floor, rough road, grass. The sensor should NOT fire from walking vibration alone. It should only fire when you knock the cane firmly or simulate vehicle rumble by tapping the ground hard. Adjust the sensitivity screw counter-clockwise to reduce sensitivity if it is firing too easily.

## **9.2 Calibrating the Water Sensor Threshold**

The WATER\_THRESHOLD value in the code is set to 500 by default on a 0-1023 scale. To calibrate for your specific sensor, add this line to your setup function temporarily and open the Serial Monitor while testing:

Serial.println(analogRead(WATER\_PIN));  // Add this to loop() temporarily

Read the value when the sensor is dry. Read it when wet. Set WATER\_THRESHOLD in the code to a value halfway between the two readings.

## **9.3 Calibrating the Flame Sensor Threshold**

Similarly, read the FLAME\_PIN analog value in a normal environment (should be close to 1023 — no flame). Read it when a lighter is held 30cm away (should drop significantly, maybe to 100-300). Set FLAME\_THRESHOLD to a value that is clearly below the ambient reading but above any random fluctuation. Start at 200 and adjust.

## **9.4 The Full Walk Test**

Take the assembled device outdoors. Walk a route that includes: an open path (should be silent), a wall approaching on the left (left alert), a step or kerb (stairs alert), a slope (slope alert). Ask a friend to walk toward you from 5 metres away (person alert). Have someone drive slowly past 3-4 metres away (vehicle alert).

Note any false positives (alert fires when it should not) or missed detections (hazard present but no alert). Adjust thresholds in the code accordingly and re-upload.

## **9.5 Volume and Speech Rate**

Adjust the DFPlayer volume in the code from 0 to 30\. Outdoor use typically needs volume 25-28. The speech rate depends on how you recorded the MP3 files — re-record them more slowly if users find the alerts hard to understand.

# **Chapter 10: Troubleshooting — Fixing the 20 Most Common Problems**

Something is not working. Do not panic. Every problem in an Arduino project has a logical cause. Work through this chapter systematically.

| Problem | Likely Cause | Fix |
| :---- | :---- | :---- |
| No sound at all on startup | DFPlayer not connected or files missing | Check Serial2 wires (pins 16,17). Check 1k resistor. Check MP3 files are named correctly on SD card. |
| Distance reads 999 always | TRIG and ECHO wires swapped, or sensor not powered | Swap TRIG and ECHO wires. Check breadboard power rails are connected. |
| Ultrasonic reads very small random numbers | Echo pin reading noise without trigger | Add a 10k pull-down resistor from ECHO pin to GND. |
| VL53L0X does not initialise | Connected to 5V instead of 3.3V, or XSHUT wiring wrong | Move VCC to 3.3V pin on Arduino. Check XSHUT pins 28 and 29\. |
| Both VL53L0X sensors read same (one overrides other) | I2C address conflict — XSHUT not wired | Ensure XSHUT\_TOF1 and XSHUT\_TOF2 are wired to pins 28 and 29\. Check setAddress(0x30) call in setup. |
| PIR fires constantly without motion | Sensor still warming up, or sensitivity too high | Wait 60 seconds after power-on. Turn sensitivity potentiometer counter-clockwise. |
| PIR never fires even with movement | Sensitivity too low, or OUT pin not reading | Turn sensitivity potentiometer clockwise. Check pin 30 is connected to OUT not VCC. |
| Vibration sensor fires from walking | Too sensitive | Turn SW-420 potentiometer counter-clockwise to reduce sensitivity. |
| Wrong MP3 plays for alert | File naming or track numbering mismatch | Check that playAlert(1) plays fire.mp3, etc. Rename files as 001.mp3-011.mp3 on SD card. |
| DFPlayer plays same track in loop | Cooldown not working, millis() overflow | Check cooldown logic. Use unsigned long for all time variables. |
| IMU pitch always reads 0 | MPU-6050 not initialising properly | Check SDA/SCL on pins 20/21. Run I2C scanner sketch to verify address 0x68 is found. |
| Water sensor fires without water | Threshold too low or sensor corroded | Increase WATER\_THRESHOLD value. Clean sensor with isopropyl alcohol and dry completely. |
| Fire sensor fires in sunlight | Sunlight contains near-infrared | Increase FLAME\_THRESHOLD. Shield sensor from direct sun with a small hood or tape. |
| Motor does not buzz | Transistor not wired or no 1N4007 diode | Check BC547 Base-Collector-Emitter orientation. Verify diode polarity (stripe \= cathode to \+). |
| Upload fails: avrdude error | Wrong COM port or driver issue | Unplug and replug Arduino. Check Tools \> Port is correct. Reinstall CH340 drivers if needed. |
| Code compiles but no sensor response | Pins defined wrong in code | Cross-check every \#define pin number against actual wire placement. |
| Device works on breadboard but not after assembly | Wire too short or connection pulled loose | Test each connection with multimeter continuity mode. Re-seat loose connections. |
| Multiple alerts playing at same time | DFPlayer being sent commands while playing | Add dfplayer.stop() before each playAlert call. Increase delay after play commands. |
| I2C devices not found on bus | SDA/SCL wires reversed or 5V on 3.3V devices | Run I2C scanner sketch. Check SDA=pin20, SCL=pin21. Check VL53L0X on 3.3V. |
| Device shuts off randomly | Power bank going to sleep or under-voltage | Use power bank rated 5V 2A minimum. Some banks sleep when current draw is low — add a small LED as dummy load. |

## **10.1 The I2C Scanner — Your Best Debugging Tool**

If any I2C device (VL53L0X, MPU-6050) is not working, use this short sketch to check if the Arduino can even see it on the bus. Upload this separately, open Serial Monitor at 9600 baud, and check which addresses are found.

\#include \<Wire.h\>

void setup() {

  Wire.begin();

  Serial.begin(9600);

  Serial.println("Scanning I2C bus...");

  for (byte addr \= 1; addr \< 127; addr++) {

    Wire.beginTransmission(addr);

    if (Wire.endTransmission() \== 0\) {

      Serial.print("Found device at 0x");

      Serial.println(addr, HEX);

    }

  }

  Serial.println("Done.");

}

void loop() {}

Expected addresses: VL53L0X \#1 at 0x30, VL53L0X \#2 at 0x29, MPU-6050 at 0x68. If any are missing, that device has a wiring problem.

# **Appendix: Quick Reference Sheets**

## **A.1 Complete Pin Reference — Print and Keep**

| Sensor | Sensor Pin | Arduino Pin | Special Notes |
| :---- | :---- | :---- | :---- |
| HC-SR04 LEFT | TRIG | 22 | Direct connection |
| HC-SR04 LEFT | ECHO | 23 | Direct connection — Mega is 5V tolerant |
| HC-SR04 CENTRE | TRIG | 24 | Direct connection |
| HC-SR04 CENTRE | ECHO | 25 | Direct connection |
| HC-SR04 RIGHT | TRIG | 26 | Direct connection |
| HC-SR04 RIGHT | ECHO | 27 | Direct connection |
| VL53L0X \#1 | XSHUT | 28 | 3.3V supply only\! |
| VL53L0X \#2 | XSHUT | 29 | 3.3V supply only\! |
| Both VL53L0X | SDA / SCL | 20 / 21 | Shared I2C bus |
| MPU-6050 | SDA / SCL | 20 / 21 | Shared I2C bus, AD0 to GND |
| HC-SR501 PIR | OUT | 30 | 60 sec warm-up time |
| SW-420 Vibration | DO | 31 | Calibrate with potentiometer |
| FC-37 Water | A0 | A0 | Analog read |
| YG1006 Flame | A0 | A1 | Analog read, shield from sunlight |
| DFPlayer RX | RX | 16 (TX2) | 1k ohm resistor in series |
| DFPlayer TX | TX | 17 (RX2) | Direct connection |
| Vibration Motor | Signal | 32 | Via BC547 transistor \+ 1N4007 diode |

## **A.2 Priority Alert Map**

| P\# | Trigger Condition | Track Played | Haptic Pulses | Sensor |
| :---- | :---- | :---- | :---- | :---- |
| **P0** | Flame detected | 001.mp3 — Fire\! | 3 pulses | YG1006 |
| **P1** | Vehicle vibration | 002.mp3 — Vehicle | 3 pulses | SW-420 |
| **P1** | Obstacle under 50cm | 003.mp3 — Very close | 3 pulses | HC-SR04 any |
| **P1** | Wet floor | 004.mp3 — Wet floor | 2 pulses | FC-37 |
| **P2** | Motion detected | 005.mp3 — Person | 1 pulse | HC-SR501 |
| **P2** | Floor drop over 40cm | 006.mp3 — Stairs | 2 pulses | VL53L0X |
| **P2** | Pitch over 20 degrees | 007.mp3 — Slope | 1 pulse | MPU-6050 |
| **P3** | Obstacle 50-150cm ahead | 008-010.mp3 | None | HC-SR04 |

## **A.3 Shopping Links Summary**

**Robu.in cart items:** HC-SR04 x3, VL53L0X x2, HC-SR501, SW-420, MPU-6050, FC-37, YG1006, DFPlayer Mini, vibration motor module, BC547 transistors, 1N4007 diodes, resistors kit, jumper wire kits, breadboard.

**Amazon/Flipkart items:** Arduino Mega 2560, USB power bank 5000mAh, project box, white cane or PVC pipe, zip ties, velcro straps, heat shrink kit, 3.5mm earphone.

## **A.4 Final Words**

You have now built NavSight Arduino Edition from absolute zero. You bought the components, understood every sensor, wired the entire circuit, wrote and uploaded the code, assembled it on a cane, and calibrated it for real-world use.

This device costs under Rs. 3,200 to build. The commercial equivalent — if it even existed — would cost ten times as much. More importantly, you understand every single part of how it works. You can fix it, improve it, add sensors, change alerts, and adapt it to any use case.

The next step is to find a visually impaired person who would benefit from this device and ask them to test it. Their feedback will tell you more about what to improve than any lab test ever could.

*"We are not building a smarter cane. We are building a system that enables navigation through intelligence."*

*— NavSight · Based on work by Vishwesh Soni & Harsh Kawatra · Delhi Technological University*