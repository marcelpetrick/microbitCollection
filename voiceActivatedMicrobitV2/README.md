# voice activated microbit v2

based on this tutorial: [https://www.youtube.com/watch?v=fNSKWdIxh8o]  
data: [https://cdn.edgeimpulse.com/datasets/microbit-keywords-11khz.zip]  

my repo at edge impulse: [https://studio.edgeimpulse.com/studio/16565]  

used keyword: Auto

sample at 11 KHz (very important!) via phone


-----------------
Creating job... OK (ID: 498321)

Job started
Creating windows from 1994 files...
[2/6] Pre-caching files...
[6/6] Pre-caching files...
Pre-caching files OK

[   1/1994] Creating windows from files...
[ 356/1994] Creating windows from files...
[ 629/1994] Creating windows from files...
[ 897/1994] Creating windows from files...
[1155/1994] Creating windows from files...
[1428/1994] Creating windows from files...
[1647/1994] Creating windows from files...
[1883/1994] Creating windows from files...
[1994/1994] Creating windows from files...
Created 1994 windows: auto_vocal_11khz: 104, noise: 948, unknown: 942

Scheduling job in cluster...
Job started
Creating features
[   1/1994] Creating features...
[ 717/1994] Creating features...
[1431/1994] Creating features...
[1994/1994] Creating features...
Created features

Scheduling job in cluster...
Job started
Reducing dimensions for visualizations...
UMAP(a=None, angular_rp_forest=False, b=None,
     force_approximation_algorithm=False, init='spectral', learning_rate=1.0,
     local_connectivity=1.0, low_memory=False, metric='euclidean',
     metric_kwds=None, min_dist=0.1, n_components=3, n_epochs=None,
     n_neighbors=15, negative_sample_rate=5, output_metric='euclidean',
     output_metric_kwds=None, random_state=None, repulsion_strength=1.0,
     set_op_mix_ratio=1.0, spread=1.0, target_metric='categorical',
     target_metric_kwds=None, target_n_neighbors=-1, target_weight=0.5,
     transform_queue_size=4.0, transform_seed=42, unique=False, verbose=True)
Construct fuzzy simplicial set
Mon Jan 25 22:03:04 2021 Finding Nearest Neighbors
Still running...
Mon Jan 25 22:03:06 2021 Finished Nearest Neighbor Search
Mon Jan 25 22:03:09 2021 Construct embedding
	completed  0  /  500 epochs
Still running...
	completed  50  /  500 epochs
	completed  100  /  500 epochs
	completed  150  /  500 epochs
	completed  200  /  500 epochs
	completed  250  /  500 epochs
	completed  300  /  500 epochs
	completed  350  /  500 epochs
	completed  400  /  500 epochs
Still running...
	completed  450  /  500 epochs
Mon Jan 25 22:03:17 2021 Finished embedding
Reducing dimensions for visualizations OK

Job completed

-----------------

Creating job... OK (ID: 498325)

Copying features from processing blocks...
Copying features from DSP block...
Copying features from DSP block OK
Copying features from processing blocks OK

Job started
Splitting data into training and validation sets...
Splitting data into training and validation sets OK

Training model...
Training on 1595 inputs, validating on 399 inputs
Epoch 1/100
50/50 - 1s - loss: 1.0127 - accuracy: 0.4815 - val_loss: 0.8610 - val_accuracy: 0.5614
Epoch 2/100
50/50 - 1s - loss: 0.7533 - accuracy: 0.6157 - val_loss: 0.6753 - val_accuracy: 0.7143
Epoch 3/100
50/50 - 1s - loss: 0.5577 - accuracy: 0.7693 - val_loss: 0.4740 - val_accuracy: 0.8471
Epoch 4/100
50/50 - 1s - loss: 0.4465 - accuracy: 0.8232 - val_loss: 0.4152 - val_accuracy: 0.8596
Epoch 5/100
50/50 - 1s - loss: 0.3839 - accuracy: 0.8564 - val_loss: 0.4109 - val_accuracy: 0.8697
Epoch 6/100
50/50 - 1s - loss: 0.3663 - accuracy: 0.8608 - val_loss: 0.3539 - val_accuracy: 0.8822
Epoch 7/100
50/50 - 1s - loss: 0.3337 - accuracy: 0.8746 - val_loss: 0.3040 - val_accuracy: 0.8947
Epoch 8/100
50/50 - 1s - loss: 0.3074 - accuracy: 0.8803 - val_loss: 0.2982 - val_accuracy: 0.8972
Epoch 9/100
50/50 - 1s - loss: 0.3024 - accuracy: 0.8815 - val_loss: 0.2761 - val_accuracy: 0.8947
Epoch 10/100
50/50 - 1s - loss: 0.2767 - accuracy: 0.8953 - val_loss: 0.3063 - val_accuracy: 0.8972
Epoch 11/100
50/50 - 1s - loss: 0.2752 - accuracy: 0.8991 - val_loss: 0.2589 - val_accuracy: 0.8947
Epoch 12/100
50/50 - 1s - loss: 0.2607 - accuracy: 0.9028 - val_loss: 0.2727 - val_accuracy: 0.8972
Epoch 13/100
50/50 - 1s - loss: 0.2662 - accuracy: 0.9041 - val_loss: 0.2494 - val_accuracy: 0.9123
Epoch 14/100
50/50 - 1s - loss: 0.2707 - accuracy: 0.8897 - val_loss: 0.2752 - val_accuracy: 0.8972
Epoch 15/100
50/50 - 1s - loss: 0.2345 - accuracy: 0.9091 - val_loss: 0.2919 - val_accuracy: 0.8847
Epoch 16/100
50/50 - 1s - loss: 0.2463 - accuracy: 0.9060 - val_loss: 0.2216 - val_accuracy: 0.9273
Epoch 17/100
50/50 - 1s - loss: 0.2323 - accuracy: 0.9072 - val_loss: 0.2378 - val_accuracy: 0.9073
Epoch 18/100
50/50 - 1s - loss: 0.2343 - accuracy: 0.9078 - val_loss: 0.2247 - val_accuracy: 0.9198
Epoch 19/100
50/50 - 1s - loss: 0.2251 - accuracy: 0.9097 - val_loss: 0.2424 - val_accuracy: 0.9148
Epoch 20/100
50/50 - 1s - loss: 0.2234 - accuracy: 0.9160 - val_loss: 0.2639 - val_accuracy: 0.9023
Epoch 21/100
50/50 - 1s - loss: 0.2255 - accuracy: 0.9103 - val_loss: 0.2068 - val_accuracy: 0.9248
Epoch 22/100
50/50 - 1s - loss: 0.2090 - accuracy: 0.9185 - val_loss: 0.2199 - val_accuracy: 0.9173
Epoch 23/100
50/50 - 1s - loss: 0.2234 - accuracy: 0.9103 - val_loss: 0.2022 - val_accuracy: 0.9298
Epoch 24/100
50/50 - 1s - loss: 0.1960 - accuracy: 0.9285 - val_loss: 0.2167 - val_accuracy: 0.9248
Epoch 25/100
50/50 - 1s - loss: 0.2060 - accuracy: 0.9235 - val_loss: 0.2128 - val_accuracy: 0.9223
Epoch 26/100
50/50 - 1s - loss: 0.2108 - accuracy: 0.9229 - val_loss: 0.2207 - val_accuracy: 0.9198
Epoch 27/100
50/50 - 1s - loss: 0.2089 - accuracy: 0.9185 - val_loss: 0.2373 - val_accuracy: 0.9198
Epoch 28/100
50/50 - 1s - loss: 0.1896 - accuracy: 0.9329 - val_loss: 0.2124 - val_accuracy: 0.9173
Epoch 29/100
50/50 - 1s - loss: 0.2107 - accuracy: 0.9179 - val_loss: 0.2063 - val_accuracy: 0.9173
Epoch 30/100
50/50 - 1s - loss: 0.2040 - accuracy: 0.9235 - val_loss: 0.2197 - val_accuracy: 0.9148
Epoch 31/100
50/50 - 1s - loss: 0.1872 - accuracy: 0.9335 - val_loss: 0.1828 - val_accuracy: 0.9298
Epoch 32/100
50/50 - 1s - loss: 0.2176 - accuracy: 0.9166 - val_loss: 0.2161 - val_accuracy: 0.9173
Epoch 33/100
50/50 - 1s - loss: 0.1872 - accuracy: 0.9323 - val_loss: 0.2103 - val_accuracy: 0.9098
Epoch 34/100
50/50 - 1s - loss: 0.1904 - accuracy: 0.9310 - val_loss: 0.2052 - val_accuracy: 0.9223
Epoch 35/100
50/50 - 1s - loss: 0.2037 - accuracy: 0.9197 - val_loss: 0.1990 - val_accuracy: 0.9223
Epoch 36/100
50/50 - 1s - loss: 0.1940 - accuracy: 0.9216 - val_loss: 0.2819 - val_accuracy: 0.9048
Epoch 37/100
50/50 - 1s - loss: 0.1951 - accuracy: 0.9304 - val_loss: 0.1935 - val_accuracy: 0.9273
Epoch 38/100
50/50 - 1s - loss: 0.1821 - accuracy: 0.9310 - val_loss: 0.2072 - val_accuracy: 0.9173
Epoch 39/100
50/50 - 1s - loss: 0.1866 - accuracy: 0.9248 - val_loss: 0.1890 - val_accuracy: 0.9248
Epoch 40/100
50/50 - 1s - loss: 0.1784 - accuracy: 0.9317 - val_loss: 0.2187 - val_accuracy: 0.9123
Epoch 41/100
50/50 - 1s - loss: 0.2016 - accuracy: 0.9166 - val_loss: 0.2097 - val_accuracy: 0.9173
Epoch 42/100
50/50 - 1s - loss: 0.2084 - accuracy: 0.9172 - val_loss: 0.2634 - val_accuracy: 0.9023
Epoch 43/100
50/50 - 1s - loss: 0.2100 - accuracy: 0.9185 - val_loss: 0.1934 - val_accuracy: 0.9223
Epoch 44/100
50/50 - 1s - loss: 0.2036 - accuracy: 0.9229 - val_loss: 0.2133 - val_accuracy: 0.9148
Epoch 45/100
50/50 - 1s - loss: 0.1708 - accuracy: 0.9310 - val_loss: 0.2983 - val_accuracy: 0.8997
Epoch 46/100
50/50 - 1s - loss: 0.1869 - accuracy: 0.9285 - val_loss: 0.2235 - val_accuracy: 0.9073
Epoch 47/100
50/50 - 1s - loss: 0.1649 - accuracy: 0.9348 - val_loss: 0.2019 - val_accuracy: 0.9148
Epoch 48/100
50/50 - 1s - loss: 0.2068 - accuracy: 0.9179 - val_loss: 0.2154 - val_accuracy: 0.9148
Epoch 49/100
50/50 - 1s - loss: 0.1926 - accuracy: 0.9285 - val_loss: 0.1999 - val_accuracy: 0.9148
Epoch 50/100
50/50 - 1s - loss: 0.1689 - accuracy: 0.9392 - val_loss: 0.2246 - val_accuracy: 0.9223
Epoch 51/100
50/50 - 1s - loss: 0.1792 - accuracy: 0.9317 - val_loss: 0.2129 - val_accuracy: 0.9148
Epoch 52/100
50/50 - 1s - loss: 0.1704 - accuracy: 0.9304 - val_loss: 0.2629 - val_accuracy: 0.8997
Epoch 53/100
50/50 - 1s - loss: 0.1852 - accuracy: 0.9254 - val_loss: 0.2106 - val_accuracy: 0.9148
Epoch 54/100
50/50 - 1s - loss: 0.1733 - accuracy: 0.9292 - val_loss: 0.2389 - val_accuracy: 0.9098
Epoch 55/100
50/50 - 1s - loss: 0.1777 - accuracy: 0.9361 - val_loss: 0.2608 - val_accuracy: 0.8947
Epoch 56/100
50/50 - 1s - loss: 0.1815 - accuracy: 0.9292 - val_loss: 0.2120 - val_accuracy: 0.9198
Epoch 57/100
50/50 - 1s - loss: 0.1751 - accuracy: 0.9329 - val_loss: 0.2127 - val_accuracy: 0.9248
Epoch 58/100
50/50 - 1s - loss: 0.1888 - accuracy: 0.9329 - val_loss: 0.2269 - val_accuracy: 0.9223
Epoch 59/100
50/50 - 1s - loss: 0.1738 - accuracy: 0.9317 - val_loss: 0.2179 - val_accuracy: 0.9198
Epoch 60/100
50/50 - 1s - loss: 0.1766 - accuracy: 0.9367 - val_loss: 0.2019 - val_accuracy: 0.9273
Epoch 61/100
50/50 - 1s - loss: 0.1875 - accuracy: 0.9335 - val_loss: 0.1960 - val_accuracy: 0.9198
Epoch 62/100
50/50 - 1s - loss: 0.1753 - accuracy: 0.9361 - val_loss: 0.2184 - val_accuracy: 0.9223
Epoch 63/100
50/50 - 1s - loss: 0.1527 - accuracy: 0.9448 - val_loss: 0.1934 - val_accuracy: 0.9248
Epoch 64/100
50/50 - 1s - loss: 0.1938 - accuracy: 0.9323 - val_loss: 0.1894 - val_accuracy: 0.9273
Epoch 65/100
50/50 - 1s - loss: 0.1631 - accuracy: 0.9361 - val_loss: 0.2508 - val_accuracy: 0.9073
Epoch 66/100
50/50 - 1s - loss: 0.1944 - accuracy: 0.9248 - val_loss: 0.2095 - val_accuracy: 0.9248
Epoch 67/100
50/50 - 1s - loss: 0.1688 - accuracy: 0.9304 - val_loss: 0.2276 - val_accuracy: 0.9173
Epoch 68/100
50/50 - 1s - loss: 0.1951 - accuracy: 0.9279 - val_loss: 0.2244 - val_accuracy: 0.9098
Epoch 69/100
50/50 - 1s - loss: 0.1767 - accuracy: 0.9329 - val_loss: 0.1728 - val_accuracy: 0.9398
Epoch 70/100
50/50 - 1s - loss: 0.1842 - accuracy: 0.9298 - val_loss: 0.1982 - val_accuracy: 0.9248
Epoch 71/100
50/50 - 1s - loss: 0.1745 - accuracy: 0.9285 - val_loss: 0.2061 - val_accuracy: 0.9198
Epoch 72/100
50/50 - 1s - loss: 0.1832 - accuracy: 0.9292 - val_loss: 0.1872 - val_accuracy: 0.9298
Epoch 73/100
50/50 - 1s - loss: 0.1505 - accuracy: 0.9404 - val_loss: 0.2303 - val_accuracy: 0.8997
Epoch 74/100
50/50 - 1s - loss: 0.1693 - accuracy: 0.9379 - val_loss: 0.2064 - val_accuracy: 0.9273
Epoch 75/100
50/50 - 1s - loss: 0.1678 - accuracy: 0.9373 - val_loss: 0.2041 - val_accuracy: 0.9223
Epoch 76/100
50/50 - 1s - loss: 0.1995 - accuracy: 0.9248 - val_loss: 0.2353 - val_accuracy: 0.9023
Epoch 77/100
50/50 - 1s - loss: 0.1791 - accuracy: 0.9335 - val_loss: 0.2307 - val_accuracy: 0.9073
Epoch 78/100
50/50 - 1s - loss: 0.1652 - accuracy: 0.9411 - val_loss: 0.2197 - val_accuracy: 0.9198
Epoch 79/100
50/50 - 1s - loss: 0.1743 - accuracy: 0.9273 - val_loss: 0.2446 - val_accuracy: 0.9048
Epoch 80/100
50/50 - 1s - loss: 0.1628 - accuracy: 0.9417 - val_loss: 0.2342 - val_accuracy: 0.9198
Epoch 81/100
50/50 - 1s - loss: 0.1603 - accuracy: 0.9386 - val_loss: 0.2543 - val_accuracy: 0.9098
Epoch 82/100
50/50 - 1s - loss: 0.1763 - accuracy: 0.9329 - val_loss: 0.2258 - val_accuracy: 0.9223
Epoch 83/100
50/50 - 1s - loss: 0.1806 - accuracy: 0.9273 - val_loss: 0.2750 - val_accuracy: 0.9048
Epoch 84/100
50/50 - 1s - loss: 0.1619 - accuracy: 0.9442 - val_loss: 0.2424 - val_accuracy: 0.9148
Epoch 85/100
50/50 - 1s - loss: 0.1771 - accuracy: 0.9310 - val_loss: 0.2070 - val_accuracy: 0.9123
Epoch 86/100
50/50 - 1s - loss: 0.1481 - accuracy: 0.9461 - val_loss: 0.2569 - val_accuracy: 0.9048
Epoch 87/100
50/50 - 1s - loss: 0.1577 - accuracy: 0.9423 - val_loss: 0.2331 - val_accuracy: 0.9123
Epoch 88/100
50/50 - 1s - loss: 0.1708 - accuracy: 0.9317 - val_loss: 0.2314 - val_accuracy: 0.9123
Epoch 89/100
50/50 - 1s - loss: 0.1597 - accuracy: 0.9348 - val_loss: 0.2350 - val_accuracy: 0.9073
Epoch 90/100
50/50 - 1s - loss: 0.1643 - accuracy: 0.9354 - val_loss: 0.2095 - val_accuracy: 0.9173
Epoch 91/100
50/50 - 1s - loss: 0.1647 - accuracy: 0.9379 - val_loss: 0.2152 - val_accuracy: 0.9148
Epoch 92/100
50/50 - 1s - loss: 0.1682 - accuracy: 0.9342 - val_loss: 0.2288 - val_accuracy: 0.9098
Epoch 93/100
50/50 - 1s - loss: 0.1868 - accuracy: 0.9292 - val_loss: 0.2267 - val_accuracy: 0.9073
Epoch 94/100
50/50 - 1s - loss: 0.1683 - accuracy: 0.9361 - val_loss: 0.2235 - val_accuracy: 0.9148
Epoch 95/100
50/50 - 1s - loss: 0.1802 - accuracy: 0.9317 - val_loss: 0.2270 - val_accuracy: 0.9098
Epoch 96/100
50/50 - 1s - loss: 0.1782 - accuracy: 0.9241 - val_loss: 0.2173 - val_accuracy: 0.9098
Epoch 97/100
50/50 - 1s - loss: 0.1757 - accuracy: 0.9373 - val_loss: 0.1930 - val_accuracy: 0.9248
Epoch 98/100
50/50 - 1s - loss: 0.1643 - accuracy: 0.9329 - val_loss: 0.2217 - val_accuracy: 0.9173
Epoch 99/100
50/50 - 1s - loss: 0.1815 - accuracy: 0.9367 - val_loss: 0.2013 - val_accuracy: 0.9273
Epoch 100/100
50/50 - 1s - loss: 0.1764 - accuracy: 0.9310 - val_loss: 0.2164 - val_accuracy: 0.9223
Finished training

Saving best performing model...
Still saving model...
Converting TensorFlow Lite float32 model...
Converting TensorFlow Lite int8 quantized model with float32 input and output...
Converting TensorFlow Lite int8 quantized model with int8 input and output...
Calculating performance metrics...
Profiling float32 model (tflite)...
Profiling float32 model (EON)...
Profiling int8 model (tflite)...
Profiling int8 model (EON)...

Model training complete

Job completed

-----------------

(testing of the data done with 7 samples - all correct! :))

-----------------

now to the repo with the code: [https://github.com/edgeimpulse/voice-activated-microbit]

-----------------

forked it: [https://github.com/marcelpetrick/voice-activated-microbit]

-----------------
clone locally
-----------------
install the three things for the toolchain: cmake, python 2.7 and the GNU ARM toolchain 9
-----------------
build, deploy, run..

tbc
-----------------
problem after installing all three things:

C:\Users\husband-boy\Desktop\coding\voice-activated-microbit>python build.py
Creating libraries folder
Cloning into: https://github.com/Lancaster-University/codal-microbit-v2
Cloning into 'codal-microbit-v2'...
Checking out branch: master
Already on 'master'
Your branch is up to date with 'origin/master'.
Set target: codal-microbit-v2
Using target.json (dev version)
Targeting codal-microbit-v2
CMake Error: CMake was unable to find a build program corresponding to "Ninja".  CMAKE_MAKE_PROGRAM is not set.  You probably need to select a different build tool.
-- Configuring incomplete, errors occurred!
See also "C:/Users/husband-boy/Desktop/coding/voice-activated-microbit/build/CMakeFiles/CMakeOutput.log".

C:\Users\husband-boy\Desktop\coding\voice-activated-microbit>

------------------
installed ninja by downloading and putting to dir:

how to configure the path?
"edit environment windows crap"; setting path did not work well (python not found afterwards)

print
--> path
changing
--> set "PATH=C:\ninjav1102;%PATH%"

------------------
cd "C:\Users\husband-boy\Desktop\coding\voice-activated-microbit"

-------------------
fix one line in: CMakeCache.txt with the real location of your ninja executable

//Program used to build from build.ninja files.
CMAKE_MAKE_PROGRAM:FILEPATH=C:/ninjav1102/ninja.exe

--------------------
..
[588/711] Building C object libraries/codal-microbit-nrf5sdk/CMakeFiles/codal-microbit-nrf5sdk.dir/nRF5SDK/components/ble/peer_manager/gatt_cache_manager.c.obj
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/ble/peer_manager/gatt_cache_manager.c: In function 'service_changed_send_in_evt':
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/ble/peer_manager/gatt_cache_manager.c:364:9: warning: this statement may fall through [-Wimplicit-fallthrough=]
  364 |         {
      |         ^
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/ble/peer_manager/gatt_cache_manager.c:385:9: note: here
  385 |         case NRF_ERROR_NOT_SUPPORTED:
      |         ^~~~
[598/711] Building CXX object libraries/codal-core/CMakeFiles/codal-core.dir/source/driver-models/Timer.cpp.obj
C:\Users\HUSBAN~1\AppData\Local\Temp\ccEYxWFb.s: Assembler messages:
C:\Users\HUSBAN~1\AppData\Local\Temp\ccEYxWFb.s:124: Warning: ignoring changed section attributes for .data
[683/711] Building C object libraries/codal-microbit-nrf5sdk/CMakeFiles/codal-microbit-nrf5sdk.dir/nRF5SDK/components/libraries/fds/fds.c.obj
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/libraries/fds/fds.c: In function 'write_execute':
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/libraries/fds/fds.c:1262:16: warning: this statement may fall through [-Wimplicit-fallthrough=]
 1262 |             if (!record_find_by_desc(&desc, &page))
      |                ^
../libraries/codal-microbit-nrf5sdk/nRF5SDK/components/libraries/fds/fds.c:1270:9: note: here
 1270 |         case FDS_OP_WRITE_HEADER_BEGIN:
      |         ^~~~
[711/711] converting to bin file.

C:\Users\husband-boy\Desktop\coding\voice-activated-microbit>

------------------------
copied the hex file (root dir) to the microbit: red led are on, but I see no smily on "auto" :/
------------------------
debugging with serial terminal:


                 unknown: 0.09179
                                 Predictions (DSP: 89 ms., Classification: 18 ms.):
                                                                                        auto_vocal_11khz: 0.01171
                                                                                                                     noise: 0.80273
                                                                                                                                       unknown: 0.18554
                                                                                                                                                       Predictions (DSP: 88 ms., Classification: 18 ms.):
                                              auto_vocal_11khz: 0.00195
                                                                           noise: 0.77343
                                                                                             unknown: 0.2246
                                                                                                            Predictions (DSP: 88 ms., Classification: 18 ms.):
                                                                                                                                                                   auto_vocal_11khz: 0
                          noise: 0.87304
                                            unknown: 0.12695
                                                            Predictions (DSP: 89 ms., Classification: 18 ms.):
                                                                                                                   auto_vocal_11khz: 0
                                                                                                                                          noise: 0.88867
                                                                                                                                                            unknown: 0.10937
            Predictions (DSP: 88 ms., Classification: 19 ms.):
                                                                   auto_vocal_11khz: 0
                                                                                          noise: 0.81835
                                                                                                            unknown: 0.17968
                                                                                                                            Predictions (DSP: 88 ms., Classification: 18 ms.):
                   auto_vocal_11khz: 0
                                          noise: 0.84374
                                                            unknown: 0.15624
                                                                            Predictions (DSP: 88 ms., Classification: 18 ms.):
                                                                                                                                   auto_vocal_11khz: 0
                                                                                                                                                          noise: 0.91796
            unknown: 0.08007
                            Predictions (DSP: 88 ms., Classification: 18 ms.):
                                                                                   auto
------------------------

obviously the code works, but the "hits" are not accepted. so maybe adjusting the code would help

looks like "source\MicrophoneInferenceTest.cpp" contains the program

------------------------
Since asking on github would be weird and youtube comments are blocked, I've added a comment to their original post:

"Greetings Jan and everyone else at Edge Impulse.
Thank you for the nice tutorial, each step was well comprehensible.
After fixing the local toolchain I also got a successful build done and deployed the hex-file, but nothing was recognized.
The terminal shows results like this: "Predictions (DSP: 88 ms., Classification: 19 ms.):
                                                                   auto_vocal_11khz: 0
                                                                                          noise: 0.81835
                                                                                                            unknown: 0.17968
                                                                                                                            Predictions (DSP: 88 ms., Classification: 18 ms.):
                   auto_vocal_11khz: 0
                                          noise: 0.84374
                                                            unknown: 0.15624"
So my sample keyword ("auto") is not recognized? What could be the reason? Test- and sample-data was derived from my smartphone. Model looked quite well in the browser, but obviously not on the micro:bit v2.
Could there be a problem with the differences between the two microphones?

Any help or hint is welcome. Thank you! :)
"