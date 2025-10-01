type TStackContainer = {
  title: string;
  stacks: string;
};

type TAboutPageProps = {
  mainTitle: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  descriptionParagraph3: string;
  stackContainer: TStackContainer[];
};

type TSiteContentProps = {
  about: TAboutPageProps;
};

export const siteContent: TSiteContentProps = {
  about: {
    mainTitle: "I help companies to thrive with software.",
    descriptionParagraph1: `My lifelong passion for technology began with hardware and networks,
            understanding how systems work from the ground up. To build upon
            that foundation, I pursued a degree in Systems Analysis and
            Development, which gave me the structured knowledge to architect and
            manage complex IT systems effectively. This blend of formal
            education and practical experience is the core of my problem-solving
            approach.`,
    descriptionParagraph2: ` Today, as a software engineer, I apply this complete perspective to
            everything I build. Whether I'm freelancing on a new MVP for a
            client or debugging a challenging issue, I am dedicated to creating
            solutions that are well-engineered from concept to deployment. I
            love making technology work seamlessly, and I have the full-stack
            skills to make it happen.`,
    descriptionParagraph3: `Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own. Wanna learn
            more? `,
    stackContainer: [
      {
        title: `Frontend Tools`,
        stacks: `JavaScript(ES6+), React, Next.js, TypeScript, Jotai, React Query, HTML5, Git/GitHub, React Hook Form.`,
      },
      {
        title: `UI Libraries`,
        stacks: `CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Bootstrap, Shadcn/ui`,
      },
      {
        title: `Backend Tools`,
        stacks: `JavaScript(ES6+), TypeScript, Node.js, Nest.js, Express.js, Prisma, Typeorm, Python, Django, C#, .NET, SQL, REST API`,
      },
      {
        title: `DevOps Tools`,
        stacks: `Docker, Azure, AWS, Vercel, Render`,
      },
      {
        title: `Design Tools`,
        stacks: `Figma, FigJam, UI Design, Prototyping`,
      },
    ],
  },
};
