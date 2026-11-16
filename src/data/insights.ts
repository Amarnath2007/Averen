export interface ArticleServiceItem {
  title: string;
  description: string;
}

export interface ArticleSection {
  title: string;
  paragraphs?: string[];
  highlight?: string;
  services?: ArticleServiceItem[];
  founders?: string[];
  postParagraphs?: string[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryLabel: string;
  readingTime: string;
  publishedDate: string;
  formattedDate: string;
  authorLabel: string;
  shortDescription: string;
  sections: ArticleSection[];
  closing: {
    brand: string;
    tagline: string;
  };
}

export const articles: Article[] = [
  {
    slug: 'the-story-behind-averen',
    title: 'The Story Behind Averen: How It Started and Why We Built It',
    subtitle:
      'Every meaningful journey begins with an idea. Ours began with a curiosity to build, a passion for technology and a belief that ideas deserve to become reality.',
    category: 'Our Story',
    categoryLabel: 'OUR STORY',
    readingTime: '4–5 min read',
    publishedDate: '2026-11-16',
    formattedDate: 'November 16, 2026',
    authorLabel: "Founder's Story · Averen Technologies",
    shortDescription:
      'Every meaningful journey begins with an idea. Ours began with a curiosity to build, a passion for technology and a belief that ideas deserve to become reality.',
    sections: [
      {
        title: 'Every Big Idea Has a Beginning',
        paragraphs: [
          "Averen wasn't born in a boardroom. It didn't begin with a large team, a huge investment or an elaborate business plan.",
          'It started with something much simpler: curiosity.',
          'An interest in technology, programming and the endless possibilities of building something from scratch gradually grew into a bigger ambition.',
          'We started exploring how websites worked, how applications were built and how technology could solve everyday problems. What initially felt like learning new skills slowly became a passion for creating things that people could actually use.',
          'With every experiment, every project and every new challenge, one thought became clearer:',
        ],
        highlight:
          "We didn't just want to learn technology. We wanted to use it to build something meaningful.",
        postParagraphs: ['And that thought became the foundation of Averen.'],
      },
      {
        title: 'From Ideas to Something Real',
        paragraphs: [
          "The journey wasn't about having everything figured out from day one.",
          'It was about experimenting, learning through mistakes, exploring new technologies and constantly improving.',
          'Some ideas became projects. Some remained experiments. Others challenged us to think differently and find creative ways to solve problems.',
          'Through this journey, we realised something important: building a digital product is not just about writing code or making something look good.',
          'It is about understanding an idea, identifying the problem behind it and creating a solution that makes sense.',
          'A website could help a small business establish its online presence. An application could simplify a process. A prototype could help a startup demonstrate an idea that once existed only on paper.',
          'That is when we began looking beyond technology itself and towards the possibilities it creates.',
        ],
      },
      {
        title: 'But Why Averen?',
        paragraphs: [
          'Why start another technology studio when there are already so many companies offering digital services?',
          'Because we believe there are countless ideas that never get built.',
          'A small business owner might want a professional website but find the process confusing.',
          'A student might have an interesting project idea but struggle to turn it into a working product.',
          'An aspiring entrepreneur might have a startup concept but need help building the first version.',
          'Someone might simply have an idea and not know where to begin.',
          'Different people. Different ambitions. One common challenge: turning an idea into something real.',
          'We wanted to build something that could help bridge that gap.',
          'A space where creativity meets technology, where ideas are taken seriously and where people can find the support to take their next step.',
        ],
        highlight: "Averen exists because we believe great ideas shouldn't remain just ideas.",
      },
      {
        title: 'What We Are Building',
        paragraphs: [
          'Averen Technologies is a digital product and technology studio focused on helping individuals, businesses and innovators bring their ideas to life.',
          'Our work covers different areas of the digital world:',
        ],
        services: [
          {
            title: 'Web Development',
            description:
              'Creating modern, responsive websites and digital experiences that help businesses and individuals establish their online presence.',
          },
          {
            title: 'Application Development',
            description:
              'Building applications with practical functionality and user experience at the centre.',
          },
          {
            title: 'MVP & Prototype Development',
            description:
              'Helping founders and innovators transform early-stage ideas into working prototypes and minimum viable products.',
          },
          {
            title: 'Custom Software Solutions',
            description:
              'Developing digital solutions around specific business needs, challenges and requirements.',
          },
          {
            title: 'Creative & Digital Design',
            description:
              'Bringing ideas to life visually through thoughtful designs, digital creatives and brand-focused experiences.',
          },
        ],
        postParagraphs: [
          'We believe every project deserves an approach that understands its purpose. Not every idea needs a complicated solution. Sometimes, the simplest solution is the most effective one.',
        ],
      },
      {
        title: 'The People Behind Averen',
        paragraphs: [
          'Behind Averen are two founders who share an ambition to build something meaningful through technology and creativity.',
        ],
        founders: ['Amarnath B', 'Sadhana Shree'],
        postParagraphs: [
          'Together, they founded Averen Technologies with the vision of creating a technology studio that helps people turn their ideas into practical digital solutions.',
          'Averen represents more than a collection of services. It represents the willingness to start something, learn along the way, take on challenges and continuously build towards a bigger vision.',
          'The journey is still unfolding, and every project, collaboration and experience contributes to what Averen is becoming.',
        ],
      },
      {
        title: 'More Than Just a Technology Studio',
        paragraphs: [
          "We don't want Averen to be defined only by the websites we develop or the applications we create.",
          'We want it to stand for something bigger.',
          'We want to encourage people to explore their ideas, experiment with technology and take the first step towards building something of their own.',
          'We want to work with small businesses that are ready to grow digitally, founders who want to test their ideas, students who love creating and individuals who believe they have something worth building.',
          'Most importantly, we want to keep learning and improving with every opportunity.',
        ],
      },
      {
        title: 'This Is Only the Beginning',
        paragraphs: [
          'Averen is still growing.',
          'There are new technologies to explore, better solutions to discover, ambitious projects to take on and new possibilities waiting ahead.',
          'We know the journey will come with challenges. But we also believe that meaningful things are built through consistency, curiosity and the courage to begin.',
          "We aren't here to claim that we have everything figured out.",
          "We're here because we want to build, improve and create something that makes a difference.",
          "And if there's one belief that brought Averen to life, it is this:",
        ],
        highlight:
          'Every great digital product starts with an idea. What matters is having the courage and the right approach to build it.',
        postParagraphs: ["That's why we started.", "That's what keeps us building."],
      },
    ],
    closing: {
      brand: 'AV E R E N   T E C H N O L O G I E S',
      tagline: 'Turning Ideas into Reality.',
    },
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
