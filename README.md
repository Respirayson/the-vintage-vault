# Try it here: https://unique-froyo-b37020.netlify.app/
# Video Demo: https://youtu.be/oJqqROymM7c

## Inspiration
In recent years, the popularity of thrifting has witnessed significant growth worldwide. During the Covid-19 pandemic, thrifting culture experienced a surge in popularity and rose to become one of the most popular activities in Singapore today. (Fitri Astuti, L., & Ratna, A., n.d.) As such, we decided to explore the thrifting scene in Singapore more extensively. The widespread influence of social media has played a crucial role in boosting the appeal of thrifting. With the acceleration of the digitalisation of our lives, the reach of social media platforms are expanding and driving trends stronger than ever before. Thrifting, being an up and coming topic even before the pandemic, has particularly benefited from this phenomenon. Today, it is not surprising to see thrifting culture flourish at an even greater pace.

Recognising the significant impact of thrifting and its growing prominence, we have decided to establish a centralised platform where consumers can explore a wide range of vintage clothing and also create listings of their own. Our unique feature is the ability to view listed clothes on our 3D interactive model. By offering consumers the ability to see the clothing on a 3D model, we aim to provide consumers enhanced convenience, eliminating the need to visit physical stores entirely. Embracing technology is imperative in the modern era, as it has the potential to elevate business operations and offer consumers an easy, seamless and enjoyable shopping experience. Therefore, our application has the capability to benefit a rising number of thrifters, both new and old. 

## What it does
Our website serves as a comprehensive hub, gathering thrift shop offerings from different platforms, including telegram channels. By aggregating these listings in one place, we streamline the consumer experience and eliminate the need for extensive research and physical store visits. Users can now explore a wide range of thrift shop items conveniently without stepping foot out of the comfort of their homes. 

The features that we have implemented are:
1. Browsing available listings
2. Create listings to advertise your own apparel 
3. Filter listings according to category and price
4. View the look of different clothes listed on our 3D shirt model
5. Upload images of their own vintage clothing onto our 3D shirt model
6. Communicate easily by redirecting to the seller’s telegram

## How we built it
To bring our vision to life, we utilised a combination of Python and React to develop our innovative platform. Python's versatility and extensive libraries allowed us to implement web scraping techniques, extracting and categorizing thrift shop offerings from telegram channels seamlessly. We used telethon for this. 

On the frontend, we employed React to create a dynamic and responsive user interface. By harnessing React's component-based architecture and state management capabilities, we crafted an intuitive and visually appealing website that ensures an engaging user experience. With the power of ThreeJS, we managed to render 3D models and applied these images as textures onto the models to simulate how such clothes would appear on a body. 

The combination of Python and React proved to be a winning combination, enabling us to deliver a feature-rich platform that revolutionizes the thrift shopping experience.

## Challenges we ran into
During the development process, our team encountered several challenges that demanded innovative solutions. Integrating with telegram channels required us to navigate through their unique APIs, which involved understanding their documentation and adapting our code accordingly. Ensuring the accuracy and timeliness of the thrift shop listings presented another obstacle, as the information needed to be constantly updated to reflect the latest offerings. Maintaining the state of the React components and rendering the components in a beautiful manner were also challenges. However, through rigorous problem-solving and collaboration, we have overcome these challenges, resulting in a robust and user-centric platform.

## Accomplishments that we're proud of
As we reflect on our journey, we take pride in achieving our primary goal of creating a comprehensive thrift shopping platform. Given that none of us had prior experience in web scraping, we felt that we had achieved beyond our expectations. Within the given time frame, we successfully developed a user-friendly website that aggregates thrift shop offerings from various sources. We optimized the user experience by designing an intuitive interface, enabling effortless navigation and product discovery. Through our collective efforts, we have transformed the thrift shop experience into a convenient and enjoyable digital venture. 

## What we learned
Throughout this process, our team gained valuable insights and honed our skills in web development, API integration, and data management. We deepened our understanding of consumer behavior in a digital environment and the importance of providing convenience and accessibility. Collaborating effectively as a team, we learned the significance of communication and adaptability in solving complex challenges.

## What's next for Circuit Breakers The-Vintage-Vault
Looking ahead, we envision exciting opportunities to enhance and expand our platform, The Vintage Vault. We plan to incorporate advanced search and recommendation algorithms to personalize the user experience and showcase tailored product suggestions. Additionally, we aim to establish partnerships with more thrift shop channels, expanding our offerings and reaching a wider audience. By continuously refining our website's functionality and design, we aspire to create a thriving online community that celebrates sustainable fashion and promotes the joy of thrift shopping in the digital era.

## References
Fitri Astuti, L., & Ratna, A. (n.d.). Thrifting Culture During The COVID-19 pandemic and Its Impact on the Environment. Retrieved from https://www.e3s-conferences.org/articles/e3sconf/pdf/2021/93/e3sconf_icenis2021_01006.pdf Last Accessed on 30/5/2023

## How to Run the Code
cd client
npm run dev
