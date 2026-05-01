---
title: "Pocket Oscilloscope v3: Field Diagnostics for Embedded Builders"
date: 2026-03-29
description: "A portable oscilloscope concept using Raspberry Pi Pico 2, ILI9341 TFT, ADC input, TP4056 charging, and a practical calibration workflow."
categories: ["Products"]
tags: ["oscilloscope", "rp2040", "embedded-systems", "diagnostics", "test-tools"]
author: "Southern IoT Engineering"
authorTitle: "Embedded Tools Team"
authorInitials: "SI"
image: "https://placehold.co/1200x675/131313/a9c7ff?text=Pocket+Oscilloscope+v3"
---

Pocket Oscilloscope v3 is a compact embedded test instrument for developers who need quick signal visibility without carrying a full bench oscilloscope. It is not meant to replace lab-grade equipment. Its value is portability, teachability, and immediate feedback during field debugging, classroom work, and low-voltage embedded development.

The design uses a Raspberry Pi Pico 2 / RP2040-class controller, an ILI9341 TFT display, ADC input on GP26, button controls, LiPo battery power, USB-C charging through TP4056, and Arduino/C++ firmware. It also includes a 1 kHz PWM test output so the user can verify waveform display immediately after flashing the firmware.

## Core Hardware

The display is driven through SPI using the Adafruit ILI9341 and Adafruit GFX libraries. The firmware uses landscape orientation and draws the waveform grid, status data, trigger state, hold mode, and scale indicators. The ADC input is calibrated through software constants so the measured voltage can be tuned against known references.

The power design is intentionally simple: USB-C feeds a TP4056 charger, the LiPo powers the device, and a switch controls the instrument. For a portable diagnostic tool, this is enough to make the device usable in a field bag or on a classroom bench.

## User Controls

The interface includes mode, up, down, and hold controls. Mode cycles through voltage scale, time scale, and trigger configuration. Up and down adjust the selected setting. Hold freezes the waveform so a user can inspect a trace. The public project notes also describe auto-range modes and a visible status bar.

These controls are important because a small instrument cannot depend on complex menus. A field tool needs a few direct controls that can be understood quickly.

## Calibration Workflow

Calibration is part of the product story. The documentation describes zero calibration by shorting GP26 to ground and noting the raw average value. It also describes voltage-scale calibration by connecting GP26 to the Pico's 3.3 V pin and adjusting the `lsb5V` constant based on the displayed reading.

This makes the instrument educational as well as useful. A builder learns how ADC offset, scale factor, pull-down resistance, and firmware constants affect measurement quality. That knowledge transfers directly into sensor design and industrial IoT troubleshooting.

## Why It Matters

Southern IoT products depend on reliable signal paths: relays, UART, RS485, ADC, SPI displays, GPIO inputs, and sensor lines. Pocket Oscilloscope v3 gives the team and learners a small tool for seeing those signals. It supports the broader mission of communication for all by making hidden electrical behavior visible.

For future versions, the most useful upgrades would be input protection, selectable attenuation, a more robust enclosure, and a clearer probe connector standard. Even in its current form, the project is a strong embedded-systems teaching and debugging platform.

[View the product catalog](/southern-website/products/)

