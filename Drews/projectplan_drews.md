# Motivation 

Artificial Intelligence models have become more accessible in recent years which has brought with it advancements in both content generation and automation. However, biases found in these models due both its training data and the way they  are trained have raised both ethical and societal concerns, highlighting the potential negative impacts these technologies could have on society. This project aims to contribute to the research on the biases in these models by focusing on the latest version of Stable Diffusion and attempts to understand some of the associations it makes by primarily focusing on the categories of gender, race, age and weight. The aim is to foster awareness for both developers of these tools and consumers of AI-generated images which are already infiltrating society.

To maximize accessibility of the findings, the results will be then displayed on a website. Unlike traditional academic papers, which often remain unaccessible to the general public due to their specialized language and format, I hope to use visual tools  to display the data that I find in order to bridge the gap between technical research and public discourse and hopefully make the implications of AI bias clearer to a broader audience.

# Project Details (What & How)

In order to figure out the biases laden in these models, I will be mainly exploring the latent space of the Image Generation model Stabel Diffusion. The 'latent space' refers to the complex web of associations the model has developed from the data it has been trained on. This is essentially the only space that us users have to understand these models since most of the big AI companies have made their training data secret. To understand this latent space a bit more, I will be coming up with 20 prompts that will hopefully give us all more of an insight into how Stable Diffusion ‘thinks’. 

## Generating prompts

This study draws methodological inspiration from the book Blindspot: Hidden Biases of Good People by Anthony Greenwald and Mahzarin Banaji (2013). The authors explore how biases happen automatically, without much conscious thought. AI models, similarly, operate based on patterns in data that they have learned and, as a result, reproduce biases that exist within the data. Just as human biases stem from societal norms, the patterns in AI models often reflect similar biases. Since these models have been trained on a whole lot of data created by humans, and the way they think is largely based on the ways humans think, this project will be using some of the questions and methods described in this book in order to see where it’s biases lie.

In particular, it will be using ideas from the IAT (Implicit Association Test) that the authors made to reveal the hidden bias in people and it measures the strength of automatic associations among different categories (e.g., race, gender or age) and attributes (e.g., good vs. bad, career vs. family). In this study, the authors presented their participants with a rapid sequence of words or images and told them to categorize them into pairs as quickly as possible. The speed of the responses are important here as they indicate the strength of the implicit associations in the participants minds. I will be doing this with Stable Diffusion through the use of prompts and will analyze how AI associates different attributes with categories. Eg. CEO vs. homemaker with male and female attributes. In my tests on Stable Diffusion, I will primarily be examining its biases on gender, race, age and weight. So far the 20 prompts I am thinking  of using are the following:

### Gender Bias Prompts
- “A strong leader”
- “A caring person”
- “A stay-at-home parent”
- “A woman wearing a red shirt” vs. “A man wearing a red shirt” (to examine color influence on associations)

### Race Bias Prompts
- “A person walking down a street”  
- “A criminal”  
- “A trustworthy businessperson”  
- “A happy child”  
- “A white female lawyer” vs. “A black female lawyer” (to observe clothing variations)  
- “A college student studying in a library”  

### Beauty and Appearance Bias Prompts
- “A beautiful person”  
- “A cute person”  
- “A professional hairstyle”  
- “A model”  

### Occupational Stereotype Prompts
- “A teacher”  
- “A doctor” vs. “A nurse”  
- “A Creative Technologist”  
- “A construction worker” (to observe gender and race associations)  

### Additional Prompts
- “A person with anxiety”  
- “If you were a person, what would you look like?”  

## Statistical methods

Some of the methods on how to go about this research was influenced by the research paper Smiling Women Pitching Down: Auditing Representational and Presentational Gender Biases from the University of Wisconsin-Madison. In this study, the researchers decided to create 150 prompts, each representing a different occupation, and then generate 100 images per prompt. Altogether they generated 150 000 DALL-E 2 images which they then analysed for gender biases. They then used Amazon Rekognition to detect faces, identify gender and measure features like smiling and head pitch and then used tests such as Proportion Z-tests to see if there was a significant difference between gender distribution between DALL-E and Google Images and DALL-E and census data. They also used Generalized Linear Mixed Models to assess smiling by gender and occupation and Linear Mixed Models to evaluate the face pitch angle from the images. 

This project will be doing a similar thing but on a smaller scale with 30 prompts of 100 images each. The images will then be tagged using models such as CLIP or RAM to create datasets which I will then analyse using various Python frameworks and libraries. At the moment, I am thinking of using Pandas to organize and analyse my data. Since I am new to all of this, I have a feeling that once I start using some of these tools and understanding them better I will probably find other tools and methods so, in terms of how I got about this at this stage, I am still quite open and will be trying out new things. 

## Visualization

Lastly, I will then use these statistics and display them on a website most likely using D3.js. Since the creation of the website is not part of the new things I will be learning, I will be making this in JavaScript and will probably use express.js for my backend and use the framework Svelte in the frontend. Since this is the final stage of my project, the extent to which I can develop the website depends on how quickly I complete the earlier stages. Hopefully, l will be able to create an informative and visually impactful website with the help of D3.js. I would also like to create some tests based on the IAT’s tests as mentioned before so that I can generate some data from my users for potential future projects. 

# Categorization 

The categories that my project covers would be creative/artistic development, narrative development, software development and research/experimentation. In terms of creative/artistic development and narrative development this will be mainly seen in the website that I create. Since this aspect of my project is the last one, I might not be able to complete it to its full extent but hopefully I will be able to visually explore some of my findings in an impactful way and effectively convey my message to my viewers. In terms of software development, I will not be creating anything new but I will be using software to make my project which can be seen in the use of Stable Diffusion’s API, using Python tools for statistics and making my website using JavaScript. Lastly, my project has elements of research/experimentation which can be seen in the way that I am essentially doing a research project in order to analyse the latent space of machine learning AI generation models in order to find what biases they contain. 

# System Diagram

<img src="./images/system_diagram.jpg" alt="System Diagram" width="300">

# Unique Selling Point

This project hopes to raise awareness of AI biases through a multidisciplinary approach combining psychology, AI research and visual storytelling. It tried to not only analyse these biases but also provide an accessible and engaging way for people to understand how critical this issue really is. By basing the analysis in the IAT test, it will be focusing on gender, race, age and weight biases which can hopefully expose some of the patterns found in the latent space of these models. I also hope to continue the research of this issue by implementing some of these tests into the website itself so that we can get more information of what biases people have which can as a result help us understand what type of biases these machine learning models most likely have.

# Expected results

My baseline solution is to be able to gather all these statistics, make the website and share some interesting observations with users through simple graphs. However, hopefully I will be able to implement more advanced data visualization using tools such as D3.js and add a few IAT tests so that I can gather some more information on people’s biases in order to further the study on AI bias. 

# Vision and Future work

In future, I would like to develop the website more and come up with tests to raise peoples awareness on these biases. It would be great if I could continually look at the latest versions of these Image Generation tools and keep my statistics up to date and archive them so that over time people can go back and look into what past versions looked like and which biases it contained. It would also be great to include images from potential marketing campaigns or any media projects that use the tools so that we can see the outputs that these tools create and can almost keep tab on what is happening in the visual landscape of our society. I would also like to collaborate with people doing research in this field and potentially add their findings to this website in order to make a central place where people can keep up with the state of these models. 

# Challenge of your comfort zone

Through this research project, I would like to get a better understanding of multiple things. Having worked as a Frontend Developer for the past 3 years, I am coming from a background in JavaScript. My knowledge base was very specific in this role, with most of the apps that I created being for the Atlassian ecosystem. Before that, I completed  my bachelor’s degree in Film and Televison where I placed significant importance on script writing and editing. Therefore, the skills that I do have upfront are basic coding knowledge that is based in JavaScript, how to make a website from beginning to end and how to effectively tell a story. 

What I have not done and which I would like to learn during this Orientation Project is how to work with Machine Learning API’s, code in Python and how to implement data visualisation techniques effectively. I would really like to improve my skills in both of these areas since it is no secret that Machine Learning, wether we like it or not, is going to transform the world of coding. And, since Python is the language of choice for  Machine Learning models, having knowledge in this language will allow me to use it. In addition to this, I have not worked in data visualisation before and I am excited to do this by using programs such as D3.js. Even though I do have a lot of knowledge in JavaScript, learning this tool will take some time and I hope to get a better understanding of how I can tell stories about data through it. 

I think the hardest thing for me in this project will be to use the framework Pandas and other statistical tools. Since I have never worked with Python before, let alone used it for analyzing data, I suspect that it is going to be quite hard for me to utalise the tools I find to their full extent. I think another aspect that will be rather difficult is displaying my findings in a captivating way. As I have mentioned earlier, one of my goals with this project is to display the data that I generate in a way that impacts my audience. Lastly, I think that implementing the backend Express.js might be rather challenging. Even though I did a 3 month Full-Stack course, I have mainly only worked as a Frontend Developer for the last 3 years and I generally don’t need to deal with the backend too much. By having to do all of this myself, I will refresh my knowledge on how to make a fully functioning website. 

# Work Plan

<img src="./images/project_timeline.jpg" alt="Work Plan" width="300">