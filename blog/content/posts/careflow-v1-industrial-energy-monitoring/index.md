---
title: "CareFlow V1: Industrial Energy Monitoring Over LoRaWAN"
date: 2026-04-18
description: "How Southern IoT's CareFlow V1 combines Modbus RTU, RS485/RS232, ESP32 processing, and RAK3172 LoRaWAN for generator and power-line monitoring."
categories: ["Products"]
tags: ["careflow", "energy-monitoring", "modbus", "lorawan", "industrial-iot"]
author: "Southern IoT Engineering"
authorTitle: "Product Team"
authorInitials: "SI"
image: "https://placehold.co/1200x675/131313/a9c7ff?text=CareFlow+V1"
---

CareFlow V1 is Southern IoT's industrial energy monitoring system for generator performance and power-line stability analysis. The system is designed for sites where power quality matters but conventional wired monitoring is difficult to deploy across long distances. Its core job is simple: read electrical data from industrial equipment, preserve it during connectivity interruptions, and move it reliably to the cloud for dashboards and analytics.

At the field layer, CareFlow uses Modbus RTU over RS485/RS232. That choice matters because many generators, meters, and industrial controllers already expose electrical data through Modbus registers. Instead of forcing a site to replace existing equipment, CareFlow reads from the installed base. The RS485 bus gives long cable reach, differential signaling, and stronger noise immunity than simple TTL serial wiring.

## Hardware Architecture

CareFlow V1 combines an ESP32 processing core with a RAK3172 LoRaWAN radio module. The ESP32 handles Modbus polling, local aggregation, payload preparation, and offline buffering. The RAK3172 handles long-range LoRaWAN uplink for sites where Wi-Fi is unreliable or unavailable.

The product documentation describes a custom EMI-hardened PCB with a four-layer design, dedicated ground plane, transient-voltage suppression, and 120 ohm termination. Those details are not decorative. Industrial generator rooms can be electrically noisy, and signal integrity work is what separates a prototype from something that can survive field deployment.

## Electrical Parameters

CareFlow tracks more than twelve electrical channels. The register set includes phase-to-neutral voltage, phase current, total active power, total reactive power, total power factor, frequency, import energy, and voltage total harmonic distortion. These values give operators a practical view of both energy consumption and power quality.

Common examples include:

- `V_L1_N`, `V_L2_N`, and `V_L3_N` for phase voltage
- `I_L1`, `I_L2`, and `I_L3` for phase current
- `P_TOTAL` for total active power
- `PF_TOTAL` for power factor
- `FREQ` for line frequency
- `THD_V` for voltage harmonic distortion

## Connectivity and Data Continuity

LoRaWAN gives CareFlow V1 a documented range target of 10 km in suitable conditions. That makes it useful for industrial campuses, remote generator sheds, and facilities where pulling Ethernet is not practical. Just as important, CareFlow includes a 72-hour offline buffer using flash-backed circular logging. If cloud access drops, readings are retained locally and replayed after reconnection.

This design pattern is important for industrial monitoring. A dashboard gap can hide the exact moment a fault begins. Local buffering keeps the operational record intact even when network conditions are imperfect.

## Enclosure Strategy

CareFlow V1 also includes a custom IP65 DIN-rail enclosure concept. The enclosure specification includes ABS/polycarbonate material, M16 cable glands, passive ventilation with EMI mesh filtering, stainless M3 fasteners, PMMA lightpipes, and a matte black textured finish. The mechanical side is part of the product, not an accessory, because reliability depends on cable routing, sealing, mounting, and serviceability.

The current roadmap points toward a V2 revision with 4G fallback, local e-ink status display, enhanced galvanic isolation, and DIN-rail spring terminal connectors. That is the right direction: industrial communication systems should fail visibly, recover cleanly, and give technicians enough information at the enclosure without needing a laptop every time.

CareFlow V1 is a strong example of the Southern IoT motto, communication for all. It translates existing industrial power data into accessible, resilient telemetry without asking operators to rebuild their entire electrical environment.

[View the product catalog](/southern-website/products/)

