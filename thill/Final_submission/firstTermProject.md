# **God Complex - Project Documentation**

## **1. Project Overview**

### **Title:**
God Complex

### **Website**

Link to my website is [here](https://first-term-project-thill.vercel.app)

## **Description**

<img src=img/Opener.png alt="Opener" width="600">

### **A Landscape of Control and Creation**

**God Complex** is an interactive audio-visual experience where the participant assumes the role of an unseen force, capable of reshaping a fictive world through sound and visual manipulation. Developed using Unreal Engine and Ableton, the project leverages real-time rendering and procedural sound design to create an immersive environment that responds dynamically to user interaction. **Unreal Engine** provides a framework for constructing a visually rich, interactive world, allowing for seamless changes in lighting, vegetation, and environmental dynamics. **Ableton** facilitates the adaptive soundscape, ensuring that auditory elements shift in parallel with visual transformations, reinforcing the user's sense of control.

Through the use of a **MIDI controller**, the participant explores the boundaries of their influence—**adjusting celestial motion, breathing life into barren terrain, accelerating civilisation, and warping the very nature of time**. The integration of game engine mechanics with live audio modulation reflects the core theme of intervention and manipulation, as both tools inherently rely on real-time input to generate dynamic, evolving outputs.

### **The Landscape as a Canvas for Experimentation**

The interaction begins with a seemingly static environment—a world at its most primitive state, void of movement, growth, or sound. A natural stone formation sits at the center, acting as a visual and conceptual focal point. This formation houses a **holographic entity**, a pulsating ethereal presence that shifts form and intensity as the user interacts with the world.

As the user engages with the MIDI controller, a transformation begins:

- The sun moves across the sky horizontally, and with it, high frequencies shift in pitch, making the effect of celestial manipulation immediately perceptible in both sound and sight. The harmonic mode of the music shifts between four distinct states: Major Scale, Minor Scale, Melodic Minor Up Scale, and C Mixolydian b6 Scale, subtly altering the emotional tone.
    
- Vertical sun rotation turns day into night, causing drum timbres to shift from bright to dull**, emphasising the interplay between light and atmosphere.
    
- Vegetation and organic growth emerge, subtly spreading across the barren ground, introducing foliage sounds and environmental reverb, reinforcing the expansion of the world.
    
- The soundscape evolves, layering textures and atmospheric details that mirror the unfolding environmental changes.
    
- The holographic phenomenon morphs, reacting in tandem with the user’s manipulations, signaling the interplay between control and consequence.
    
- The parameter of modernity alters the landscape, introducing futuristic structures and industrial elements. The once mystical monument is now a controlled energy source, powering an evolving civilisation. The soundscape shifts accordingly, introducing electronic percussive elements, distorted textures, and synthetic harmonics.
    

A key visual element is three figures kneeling in prayer before the formation. Their presence serves as a scale reference and a symbolic representation of human devotion to forces beyond their control—whether natural, mystical, or technological. As the world modernises, their unchanging stance highlights the contrast between progress and tradition.

### **Control, Perception, and the Role of the Observer**

The participant is encouraged to experiment with the system, adjusting variables until they reach their preferred configuration. This dynamic engagement explores the desire to establish control over one’s surroundings, mirroring the artistic and societal impulse to shape, alter, and refine the environment.

At its core, _God Complex_ is a metaphor for artistic creation. Just as an artist manipulates a canvas to craft meaning, the user sculpts this digital world—guided only by intuition and preference. However, the modernity parameter introduces a philosophical reflection: Is modernity truly progress, or is it merely another means of exerting control over what was once free?

### **Modes of Interaction: Passive Observation vs. Embodied Experience**

The project offers two engagement modes:

1. **Fixed Perspective Mode:**
    
    - The user interacts with the landscape from a **predetermined vantage point**, observing macro-level effects.
        
    - Emphasis is placed on composition, contrast, and harmony.
        
2. **Exploratory Mode:**
    
    - The user navigates the world freely, experiencing a more immersive engagement.
        
    - If two users interact simultaneously—one exploring while the other manipulates parameters—the experience evolves into a shared performative dynamic.
        

By offering these two perspectives, _God Complex_ contrasts external observation with direct participation, challenging perceptions of authorship and control.

## **2. Context and Related Work**

Last year, I created my project **Subsurface**, a full-CG music video where I depicted a futuristic dystopian world. I wanted to continue with the same visual style but this time focus an real time graphics. I was also notable inspired by live shows and visuals from [**Iglooghost**](https://www.instagram.com/iglooghost/).
    
## **3. Technical Setup & Implementation**

### **System Diagram & Tech Stack**

- **Software:** Unreal Engine 5.4, Ableton Live, Cinema4D, Daz Designer, Substance Painter, rtpMidi (Windows), Audio MIDI Setup (Mac OS)
    
- **Hardware:** MIDI controller, PC for real-time rendering, ethernet cable
    
- **Plugins Used:**
    
    - Motion Design Plugin (Unreal Engine)
    - Remote Control MIDI Plugin
    - Substrate Shader System
    - Virtual Textures for high-res materials

### **Key Features & Implementation Details**

The implementation focuses on real-time manipulation of environmental parameters, including time progression, weather changes, and terrain alterations. A holographic monument serves as a key interaction point, visually representing the impact of user interactions. The project features two distinct experience modes: a fixed-perspective mode, where users manipulate the landscape from a predetermined vantage point, and an exploratory mode, which allows for free movement within the environment. Additionally, Ableton enables the dynamic alteration of the mode and texture of precomposed music, ensuring that the sound evolves in direct response to user interactions, reinforcing the immersive experience.

## **Reflection on Technical Choices**

I chose **Unreal Engine** because I wanted to gain experience with it, but more importantly, its ability to render photorealistic environments in real time has always impressed me. My initial idea was to build a custom controller that would send MIDI data; however, for this first iteration, I decided to use the K2 controller from Xone to prototype the behavior.
## **4. Research & Experimentation**

Throughout the project, I frequently explored different solutions using Blueprints in Unreal Engine. In most cases, these solutions proved to be too meticulous or impractical. Over time, I aimed to strike a balance between achieving complexity and maintaining efficiency, focusing on solutions that were both feasible and visually compelling. Procedural sound design was explored extensively, leading to a system where auditory elements dynamically adapt to user input. Rendering optimisation became a crucial focus as well, with iterative testing revealing the best methods for reducing crashes and improving real-time performance.
## **5. Work Diary & Development Process**

### **Timeline of Key Work & Challenges**

#### **January 2024**
 **Initial Concept Development:**
- Defined the central theme of "God Complex".
- Explored Unreal Engine as a new medium for real-time rendering.
- Investigated ways to integrate MIDI control with Unreal Engine.

#### **February 2024**
**Challenges & Technical Roadblocks:**
- **Issue:** Unreal Engine crashed due to poorly formatted FBX imports, resulting in two complete project restarts.
- **Fix:** Improved asset import pipeline, ensuring all files were properly formatted before integration.
- **Issue:** Overwriting critical files when implementing a C++ script, leading to loss of project backups.
- **Fix:** Adopted a structured backup workflow, including external hard drive storage.

**Experimentation with MIDI Control & Blueprints:**
- Learned how to **connect a MIDI controller to Unreal Engine** and dynamically control objects.
- Attempted (and later succeeded) in **exposing material parameters for real-time control via MIDI**.
- Faced initial difficulties setting up **Blueprints for dynamic material control**, but found a method using **Remote Control MIDI**.
- Explored **event-driven Blueprint scripting** to synchronize sound and visuals.

#### **March 2024**
 **Rendering & Performance Optimization:**
- **Fix:** Reduced the number of instances and switched to alternative instancing methods.
- **Issue:** Motion Design Plugin caused repeated Unreal crashes when multiple cloners were active.
- **Issue:** Struggled with texture scaling and UV adjustments, especially when dealing with UDIM textures in Unreal.

**Blueprint Work & Camera Setup:**
- Implemented Blueprint logic to control the camera dynamically using a Pawn
- Added a "Set View Target with Blend" functionality to switch camera perspectives.
- Learned to modify material parameters dynamically in Blueprints using Set Scalar Parameter Value.
- Researched how to animate objects in real-time via MIDI input, which led to exploring instancing and procedural animation workflows.

**Animation scrubbing method**:
- Initially, I attempted to implement the desired behaviour using Blueprints. However, I later discovered that the same effect could be achieved more efficiently with Alembic animations. By setting the playback rate to zero and exposing the **Set Start Time** parameter to the Remote Control plugin, I was able to achieve precise scrubbing without additional scripting.

**Final Adjustments & Presentation Preparation:**
- Added multiple interaction points within the world.
- Addressed a remaining **bug in sun rotation** (works in editor but not in game mode; left as is).
- Optimised Blueprint structure to improve system efficiency.
## **6. Results & Discussion**

The project successfully integrated MIDI control to allow for fluid real-time interaction, achieving a high level of responsiveness and adaptability. Unreal Engine’s real-time rendering capabilities enabled the creation of a visually compelling, cinematic experience. The holographic monument proved to be an effective interaction anchor, providing a clear and engaging focal point for users. The Blueprint scripting workflow was efficient and allowed for the construction of dynamic interactions without requiring extensive C++ programming.

However, certain aspects did not work as planned. The Motion Design Plugin exhibited instability under heavy usage, limiting the scope of procedural animation integration. A persistent sun rotation bug resulted in inconsistent behavior between the game mode and editor preview. Additionally, the control of material parameters via MIDI was more limited than initially expected, with some features only being implemented late in development. UDIM texture scaling presented unexpected difficulties, making dynamic adjustments more challenging than anticipated.
## **Minimal Viable Product vs. Best-Case Scenario**

The initial minimal viable product consisted of two interactive parameters, one level, and one track. In contrast, the best-case scenario envisioned a custom-built controller, multiple levels, multiple tracks, and a broader range of interactive parameters. The final outcome exceeded the initial MVP expectations by including four interactive parameters, one level, and four tracks, demonstrating substantial progress toward the best-case vision.

## **Challenge of Comfort Zone**

Working with Unreal Engine for interactive design presented a steep learning curve, particularly in understanding the intricacies of Blueprints and procedural animation workflows. The project required balancing multiple priorities, leading to a necessary reduction in the scale of certain elements, such as the futuristic city design. However, the emphasis on interaction and transformation remained intact. A key challenge was adapting to unexpected user behaviours during testing, as participants manipulated variables in ways that had not been initially anticipated, resulting in new and interesting creative outcomes.

## **7. Next Steps & Future Work**

Future developments will focus on expanding the range of MIDI-to-visual interactions, incorporating additional parameters and audio-reactive elements. Optimisation efforts will continue to refine rendering performance, ensuring smoother real-time execution. Another potential area of expansion involves enabling multiplayer interaction, allowing multiple users to manipulate different aspects of the world simultaneously.

Additionally, I plan to design and build custom physical controllers that aesthetically align with the holographic entity, enhancing the tactile and visual coherence of the installation. I am also interested in exploring the possibility of adding more projections from different points of view, providing alternative perspectives on the evolving landscape.

Beyond installation-based interactions, I have started considering how God Complex could be adapted into a live performance format. During user testing, I experimented with accompanying the soundtrack and visuals with live piano music, which added a new dimension to the experience. This approach has sparked my interest in developing a version where the performance aspect becomes a central element. Here is a short excerpt from that session.

## **8. Reflection & Learning Outcomes**

### **Challenges Overcome**

The project presented numerous challenges, from handling Unreal Engine crashes to debugging real-time rendering and instancing issues. These obstacles, however, led to valuable insights and a more efficient workflow. One of the most rewarding aspects was a user testing that I concluded with some friends.

It revealed unexpected but fascinating interactions. One participant, for example, rhythmically adjusted the modernity parameter in sync with the beat, creating an unplanned yet highly energetic and aggressive visual effect. This highlighted the potential for emergent behaviours, reinforcing the importance of leaving space for creative user experimentation. Unfortunatly, I did not think of filming the user testing.

Balancing _God Complex_ with other projects proved more difficult than anticipated, disrupting the initial timeline. As a result, the city design had to be scaled down, making it less exotic and futuristic than originally envisioned. However, this shift allowed for a stronger focus on interactive elements and environmental transformations, ultimately preserving the core concept.

Looking ahead, several key takeaways will inform future projects. A deeper understanding of Unreal Engine’s instancing capabilities from the start would have streamlined the workflow. Establishing Blueprint structures earlier would have reduced debugging time. Additionally, more thorough pre-implementation testing could have helped identify and resolve technical issues before they became obstacles.


## **9. Final Notes**
### **Project File & Dependencies**

Download Unreal Project file [here](https://mega.nz/file/ubZ1jBhb#buZXGRKWfByf3TOtytoj6CgdulH960pEiYebfBGmMsY) and Ableton project file [here](https://mega.nz/file/aSIjCQTY#gbOX_Ts01CnV9RL5S8vegRGNltdTvgLBplce3F_Scmg)

To recreate the project, install:
- **On Windows PC:** rtpMIDI, Unreal Engine 5.4
- **On Macbook:** Ableton Live 12 (Newest beta version)
- **Unreal Engine Plugins:** Motion Design, Remote Control MIDI, Substrate, Virtual Textures (See video)

- **Setup Details**

- Ableton has to be setup correctly for the connection to work. Midi Routing has to be set like in the following screenshots:

**On Mac OS(running Ableton):**

<img src=img/Midi_Setup_Mac.png width="600">

**On Windows(running Unreal Engine):**

<img src=img/Midi_Setup_Windows.png width="600">

**Ableton Midi Settings:**

<img src=img/Ableton_Midi_Settings.png width="600">

**Motion design plugin (inside Unreal Engine)**:

<img src=img/Motion_Design.png width="600">

**Remote control midi (inside Unreal Engine)**:

<img src=img/Remote_Midi.png width="600">

**Virtual texture (inside Unreal Engine)**:

<img src=img/Virtual_Texture.png width="600">


**This document, along with the website, forms the final project submission for the God Complex project.**



