## Project Plan for Soundscape Synthesizer with MAX MSP and VVVV

#### **Personal Motivation**

This project is a first step toward developing a comprehensive soundscape synthesizer for my master’s thesis. I am interested in immersive soundscapes because of my curiosity about experimental music, the potential to create unique auditory experiences, and my interest in combining and controlling sound and visuals in a coherent but artistic way. This prototype will allow me to explore additive and vector synthesis techniques. Additionally, the potential integration with visual tools like VVVV offers an opportunity to delve into audio-visual synthesis.

#### **Contextual Information**

Sound synthesis techniques like additive synthesis have been foundational in electronic music, enabling the construction of complex timbres from simple waveforms. Vector synthesis adds a dynamic aspect to sound design by morphing between different sound sources, creating evolving textures ideal for soundscapes. Related works include:

- **Electronic Music and Sound Design (Vol. 1) by A. Cipriani**: A comprehensive guide to synthesis techniques in MAX MSP.

- **Node Institute Course: Strategies for Sound Reactive Graphics**: Insights into real-time audio-visual integration. ([WS23 – VVVV 02 – Sound Reactive Graphics – The NODE Institute](https://thenodeinstitute.org/courses/ws23-vvvv-02-how-to-control-everything-through-sound/))

  

### **Project Details (What & How?)**

#### **Description**

The project focuses on building a prototype synthesizer in MAX MSP that employs **additive synthesis** and **vector synthesis** to generate immersive soundscapes. The additive synthesis section will allow users to create complex sounds by combining multiple sine waves, with control over amplitude and frequency for each partial. The vector synthesis section will enable morphing between four sound sources, offering dynamic sound evolution.

Key components:

1. **Additive Synthesis Module**:
   - Interface to create and control individual partials (up to 16).
   - Amplitude envelopes for each partial.
   - Global modulation options (e.g., LFOs for amplitude/frequency), if time allows.
2. **Vector Synthesis Module**:
   - XY controller to blend between four sound sources.
   - Automation options for dynamic blending.
3. **Master Controls**:
   - While this aspect might be out of the project's scope, I will dedicate some time to researching how it could be implemented in the future: spatialization (stereo panning), reverb and delay for final sound shaping, filters and preset system.



1. **Integration with VVVV** (if time permits):
   - Send control data (e.g., number of partials, blending ratios, and modulation depth) to the Fuse library in VVVV.
   - Experiment with using sound synthesis parameters to influence visual elements such as shapes, colors, and motion.
2. **Research Component**:
   - Study synthesis techniques using Cipriani’s book.
   - Learn audio-visual strategies from the Node Institute course.

#### **Categorization**

- **Creative/Artistic Development**: Designing a tool for creating immersive soundscapes.
- **Audio-Visual Design**: Exploring the relationship between sound synthesis and visual representation.
- **Software Development**: Implementing synthesis techniques in MAX MSP.
- **Research/Experimentation**: Investigating effective ways to map sound synthesis parameters to visuals.

#### **System Diagram / Technical Setup / Tech Stack**

**Tech Stack**:

- **MAX MSP**: Primary environment for building the synthesizer.
- **VVVV with Fuse Library**: For experimenting with audio-visual integration.
- **Research Materials**: Cipriani’s book and Node Institute course.

**System Diagram**:

```
[Additive Synthesis Module]   [Vector Synthesis Module]
            |                            |
            +------> [Master Controls] ---+--> [Sound Output]
                                 |
                                 +--> [Data Output to VVVV (optional)]
```

#### **Unique Selling Point**

This project connects sound and visuals by using sound synthesis parameters to control visual systems. While it might be out of the immediate scope, it serves as an initial step to determine whether this approach is worth pursuing further for my master’s thesis. It aims to explore the intersection of sound design and multimedia art, identifying gaps in audio-visual synthesis workflows and establishing a basis for future research and development.

### **Expected Results**

#### **Baseline Solution**

- Functional additive and vector synthesis modules in MAX MSP.
- Basic soundscapes with adjustable parameters.
- Research insights from Cipriani’s book and Node Institute course.

#### **Best Possible Solution**

- A polished synthesizer with intuitive controls and presets.
- Integration with VVVV, successfully sending synthesis data to control visuals.
- Experimental results showcasing viable mappings between sound synthesis and visual elements.

### **Vision and Future Work**

#### **Vision**

The ultimate goal is to develop a full-fledged soundscape synthesizer capable of real-time audio-visual synthesis for live performances and installations. Future iterations could integrate additional synthesis methods (e.g., granular synthesis, subtractive synthesis, FM synthesis, as well as generative techniques for music composition), expand visual controls, and enhance interactivity. This virtual prototype could also serve as a reference for building an actual device, which would be useful for my colleague Lisa in her project to construct the physical version of the synthesizer.

#### **Challenge of Your Comfort Zone**

- **New for Me**: Deepening knowledge of vector synthesis and its implementation in MAX MSP. Additionally, I am a beginner in MAX MSP and sound synthesis in general, which may present a steep learning curve in both understanding the technical aspects and implementing them effectively. 
- **Mapping Synthesis Parameters to Visuals**: Developing meaningful visual representations that are effectively controlled by audio parameters could be complex and may require significant experimentation.
- **Smooth Communication Between Systems**: Ensuring seamless communication between MAX MSP and VVVV, particularly in real-time applications, might present integration difficulties.

### **Work Plan**

#### **Timeline (15.01.2025 – 15.03.2025)**

1. **Week 1 (15.01 – 21.01)**:
   - Research additive and vector synthesis (Cipriani book).
   - Complete Node Institute course.
   - Draft technical plan for MAX MSP implementation.
2. **Week 2 (22.01 – 28.01)**:
   - Build additive synthesis module in MAX MSP.
3. **Week 3 (29.01 – 04.02)**:
   - Build vector synthesis module.
   - Allow some time for planning master controls (filters, reverb, spatialization). (implementation of this part is out of the scope of this project)
4. **Week 4 (05.02 – 11.02)**:
   - Initial testing and debugging.
5. **Week 5 (12.02 – 18.02)**:
   - Explore MAX MSP to VVVV communication.
   - Experiment with sending synthesis data to Fuse library (VVVV).
6. **Week 6 (19.02 – 25.02)**:
   - Test audio-visual mappings.
   - Document results and refine system.
7. **Week 7 (26.02 – 03.03)**:
   - Finalize the prototype.
   - Conduct user testing (optional).
8. **Week 8 (04.03 – 10.03)**:
   - Prepare final documentation and presentation.
   - Polish prototype.

#### **Work Packages**

1. Research and planning (Week 1).
2. Additive synthesis implementation (Week 2).
3. Vector synthesis implementation (Weeks 2–3).
4. Master controls and presets (Week 3).
5. VVVV integration and experimentation (Weeks 5–6).
6. Final testing and documentation (Weeks 7–8).

#### **Milestones**

- **Milestone 1 (End of Week 2)**: Additive synthesis module functional.
- **Milestone 2 (End of Week 3)**: Vector synthesis module functional.
- **Milestone 3 (End of Week 4)**: Complete soundscape synthesizer prototype.
- **Milestone 4 (End of Week 6)**: Prototype integrates with VVVV (if time permits).
- **Milestone 5 (End of Week 8)**: Finalized prototype and documentation.

