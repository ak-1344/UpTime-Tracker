#!/bin/bash

# Absolute path to store the boot time
BOOT_TIME_FILE="/home/ak/Desktop/Data/Coding/Projects/UpTime/uptime_data.txt"

# Create directory if not exists
mkdir -p "$(dirname "$BOOT_TIME_FILE")"

# Write current epoch time (in seconds)
date "+%Y-%m-%d %H:%M:%S" > "$BOOT_TIME_FILE"