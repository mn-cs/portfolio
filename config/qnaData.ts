const qnaData = [
  {
    header: "Background & Experience",
    questions: [
      "What inspired you to become a data scientist?",
      "What's your educational background, and how did it shape your approach to data science?",
      "Can you describe a data science project you're particularly proud of?",
    ],
    answers: [
      "I was always fascinated by the power of data in decision-making. My curiosity led me to explore analytics, and seeing real-world impact sealed my passion for data science.",
      "I am currently pursuing a master's degree in data science, which is providing me with strong foundations in machine learning, statistics, and programming. My academic projects are reinforcing my ability to apply these concepts to practical problems.",
      "One project I'm particularly proud of involved optimizing resource allocation for a university's IT department. Using predictive analytics, we significantly improved efficiency, reducing wasted resources by 30%.",
    ],
  },
  {
    header: "Technical & Problem-Solving",
    questions: [
      "How do you approach solving a complex data problem?",
      "What are your favorite programming languages and tools for data science?",
      "How do you handle missing or messy data?",
      "What's a machine learning model or technique you find particularly exciting?",
    ],
    answers: [
      "I break down the problem into smaller components, understand the business context, explore the data thoroughly, and iteratively experiment with different approaches before finalizing a solution.",
      "I primarily use Python with libraries like NumPy, Pandas and Scikit-learn. I also enjoy using SQL for data manipulation and Matplotlib for visualization.",
      "It depends on the situation, sometimes imputing missing values with statistical methods works, other times dropping or flagging them is more appropriate. The key is understanding the impact on the model.",
      "I'm particularly excited about transformer models in NLP. The way they understand and generate human-like text has revolutionized AI applications.",
    ],
  },
  {
    header: "Industry & Trends",
    questions: [
      "What are the biggest trends in data science that excite you?",
      "How do you stay updated with the latest developments in the field?",
      "What are some common misconceptions about data science?",
    ],
    answers: [
      "The rise of generative AI, automated machine learning (AutoML), and the growing emphasis on ethical AI are some of the most exciting trends right now.",
      "I follow key research papers, attend conferences, and stay active in data science communities like Kaggle, LinkedIn, and academic forums.",
      "One big misconception is that data science is all about building models. In reality, a lot of time is spent on data cleaning, feature engineering, and making insights actionable.",
    ],
  },
  {
    header: "Practical & Applied Work",
    questions: [
      "Can you share a time when data analysis led to a surprising insight?",
      "How do you balance model accuracy with interpretability?",
      "What's your take on the ethical implications of AI and data science?",
    ],
    answers: [
      "During an analysis on student engagement, I found that non-traditional engagement metrics (like time spent on forums) were stronger predictors of success than traditional grades.",
      "It depends on the use case, if a model is used for high-stakes decisions (like healthcare or finance), interpretability takes priority over raw accuracy.",
      "Ethics should be a top priority. AI bias, data privacy, and transparency are crucial issues that every data scientist should consider when developing models.",
    ],
  },
  {
    header: "Personal & Soft Skills",
    questions: [
      "What's your philosophy on working with cross-functional teams?",
      "How do you communicate technical findings to non-technical stakeholders?",
      "What's a piece of advice you'd give to aspiring data scientists?",
    ],
    answers: [
      "Collaboration is key. The best results come from combining domain knowledge with data science expertise.",
      "I focus on storytelling, breaking down complex ideas into simple terms and using visualizations to make insights clear.",
      "Never stop learning. The field evolves rapidly, so continuous learning and hands-on projects are essential.",
    ],
  },
  {
    header: "Fun & Personal Touch",
    questions: [
      "What's the most interesting dataset you've ever worked with?",
      "If you weren't a data scientist, what would you be doing?",
      "What's a surprising fact about you that people might not expect?",
    ],
    answers: [
      "A dataset analyzing social media trends during the World Cup, it revealed fascinating patterns in global sentiment shifts.",
      "Probably a researcher in behavioral psychology which involve curiosity and pattern recognition!",
      "I love photography and have an entire collection of pictures from my travels that I've categorized using computer vision models.",
    ],
  },
];
export default qnaData;
