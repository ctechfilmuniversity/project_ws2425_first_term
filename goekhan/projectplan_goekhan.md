# CREATIVE TECHNOLOGIES FIRST TERM PROJECT PROPOSAL  


## 1. Motivation  

<p align="justify">Since I was little, I was always fascinated by crafting ‘instruments.’ Inside the spectrum of sticks  and stones, to learn woodworking for crafting stringed instruments. Of course, as time moved forward, the limitations with the acoustic instruments were prominent, and after I’ve finished my master’s in sound, the instruments of the ‘old world’ have become just a nostalgia trip  for me. It is this simple reason that I want to experiment with the human body, combined with real-time data, to create alternative approaches to sound-making.  </p>

<p align="justify">Also, an important aspect of my idea development was to capture the audience (spectator/listener), pushing them to be a contributor instead of exhibiting the piece in a cage. Naturally, this has been attempted, or done, for many years in theatre, live music, cinema, and video games, but the infinite amount of perspectives and implementations always has room for new innovations.  </p>

## 2. Project Description
<p align="justify">The project crafts a digital synthesizer, controlled by hand gestures. Using a webcam or phone camera as a trigger to alter the sound engine.  By combining real-time data and sound synthesis, it dwells in alternative approaches to sound-making and interactive art. The instrument uses p5.js as a coding language, and  it syncs hand movements to parameters like pitch and volume, giving an output resembling a theremin-inspired interface.  </p>

<p align="justify">This instrument relies on everyday devices for music-making. It also twists orthodox approaches and turns spectators into contributors and participators, giving an interactive and user-driven creative process.  </p>

<p align="justify">Future improvement possibilities include adding biometric inputs (e.g., pulse, facial recognition) and enhancing the sound engine with effects, visuals, etc. These expansions could be used in live performance, collaborative music creation, and educational tools for teaching sound and technology.
Considerable technical challenges include the implementation of data sets from various devices and writing corresponding algorithms to utilize the captured user-generated real-time data inputs. These challenges provide me with problem-solving skills in coding and algorithm shaping.
The project offers a technical exploration, having its attempt to build a unique interface for sound generation. It holds potential for further development in interactive art, participatory performance, and experimental music design as it gives basis for additive improvement.  </p>

### 3. Categorization


### a) Creative / Artistic Development

<p align="justify">The device may not be a pioneering idea, although its successful implementation can  lead to further applications. It can be supplemented with any biometric data that is collected from the  user to trigger any kind of visual or auditory release.</p>

<p align="justify"> The simple biometric data [1], can be collected without the use of external complex machines but with daily items [2], could be used to link with and alter the parameters [3] of a musical piece. This collection and use of ‘natural’ data will result in a very primal reflection within the piece.  </p>

[1]pulse, body temperature, eye movement, thermal body map, breath interval  
[2]smart phones and watches, heat sensors, electronic thermometers, webcams, microphones (e.g., household karaoke mic), proximity sensors (e.g., simple burglar alarms)  
[3]amplitude, timbre, metronome, composition (e.g., key, arrangement)

### b) Narrative Development

To describe the idea in an amplified set of words, the device would convert the user into a neural beacon, who generates a piece that can eventually connect with other users in a neural network to create an accumulating piece.

If the user doesn’t want to share the data, the piece can still be crafted with the user’s unique biometric feedback.  

### c) Software development  

The whole code will be written in p5.js, which easily lets me implement machine learning libraries to track the body part recognitions.
The complexity regarding the code would be being careful to prevent overlapping of the body parts inside the detector, fixing their boundaries perfectly (which is the algorithm), and writing a better instrument after the single oscillator works.
The experiments with the ‘sound engine’ I've done included making the sound polyphonic with two signals only, with a harmonic companion (5th inverval, octave, etc.) to just ‘colorize’ the output a little bit.  

### d) Hardware and pipeline development  
Although I first intended to craft a simple ECG device with more data-picking abilities, to avoid complicating the process, any hardware devices won’t be assembled, and a simple  webcam/phone camera will be used, both to function simpler and stay within the range of  accessibility for people.
The simple pipeline has been envisioned like this:
ML5 Hand Recognition Library Imported in p5.js -> Hand Recognized by the Webcam Triggering the Oscillator Parameters in p5.js -> Sound Output  

### e) Algorithms  
The parts explained elaborately, in my relative chronological sense;  
1. The hand capture algorithm. It is basically implemented from a machine learning library.  The code uses 21-point hand detection, which is more than enough for now and does not  need alterations.  
2. The screen has to be divided properly to be triggered by the output of the hand data.  
The second option would be labelling captured hands as (1) and (2), one assigned to pitch  and two assigned to volume. And then using the entire screen for both would work. Unless  the hands are in and out of the frame, so that the code may switch the labels, which will  result in a very confusing setup.  
3. The hand data should be connected to an oscillator run in the p5.js itself, with parameters  of pitch and volume.  
### g) Research / Experimentation  
I have been analysing the code by people who have written face/hand recognition  algorithms and built an instrument with various different languages. To read their open  code, even if I don’t know the language properly, helps to understand what logic they based  their methods on. Although I am not going to write a hand-recognition algorithm from scratch, importing that and connecting to a sound-generating code was still time-consuming.
What I want to do after this point is to finish writing a Visual Theremin, which would have the volume and pitch manipulation by two separate hands, and hopefully after it is working properly, implement more imported data sets for more parameters to control.
## 4. Unique Selling Point  
The finished product would be an instrument that will allow people to generate music using their hand gestures.
The basic implementations, such as giving a set of instrument options (just like the first Yamaha MIDI keyboards), introducing a collaborative mode (both online and local), and adding graphical additions (for example, to teach little children about tones while making it more exciting), would basically make this instrument ultimately moddable.

## 5. Expected Results  
The minimum result would be perfectly synchronizing the movement of two hands to control the pitch and volume knobs of the constructed instrument.  

The extended goal on the implementation side would be,  
_Level 1._ Adding another body input (e.g., head/face tracking)  
_Level 2._ Adding an external device’s input (e.g., Smartphone health app data or a simple USB microphone)  
The variable side would be;  
_Level 1._ Adding another parameter (e.g., Delay FX)  
_Level 2._ Adding an arrangement parameter (e.g., Play a chord)  
_Level 3._ Changing the type of the instrument (e.g., a subtractive synth for mimicking keys)  
The visual side would be;  
_Level 1._ Adding a graphical interface    

## 6. Vision and Future Work  
<p align="justify">The idea has many implementation ways to be used, but to limit them to the most connected idea for the time being;
The device can be programmed to capture facial expressions (which gives a wide array of mood inputs), precise hand gestures (in which all fingertips or even the tiny joints of each finger could be used), or full-body movement (an energy-consuming performance like a workout) to trigger the sound engine. When camera options are close to an end, it can trace the other feature as I’ve listed before, such as the pulse or the body heat map.
This being a mere collection is not interesting on its own, of course. The collected data will alter the medium in real-time, allowing the user to perform (or even sit still, if body measures are used). The wide range of data can be assigned to different parameters, depending on user choice, to craft a companion to be used in a live performance or while sitting at home.   </p>

## 7. Challenge of Your Comfort Zone  
<p align="justify">The challenges started with using p5.js, which forced me to dive deep into the world of object-oriented programming. It was one of the simplest languages to use, of course, but instead of linguistics and syntax, I started implementing algorithmic thoughts into my daily life. So basically, instead of writing the code, I found myself trying to solve the puzzle’s to reach my goal inside this or any language.  
Even though my strengths relied heavily on creating a sound or visually crafting something pleasing to the eye, I hit a brick wall as I was stripped of the comfort zone of using my daily tools. Not the tools, softwares, languages particularly, but the act of writing from scratch a one-line simple oscillator code to writing a full integrity working project.
These were the mental and habitual comfort zone changes, but of course learning (limited amounts of) p5.js, MAX, puredata and its visual libraries, reading Python/C++ codes for understanding machine learning libraries, openFrameworks, and many more hours in the code abyss was quite overwhelming and immensely captivating.  </p>

## 8. Work Plan
15 January - 1 February / Finishing the theremin  
1 Februay - 1 March / Additional Implementations  
1 March - 15 March / Fixes and presentation  
15 March - Submission  
