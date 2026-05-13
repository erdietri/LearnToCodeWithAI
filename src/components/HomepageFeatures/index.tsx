import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast & Easy to Follow',
    Svg: require('@site/static/img/undraw_thinking-mode_7czd.svg').default,
    description: (
      <>
        No-ego, self-paced videos (*mostly*) under 20 minutes... perfect for busy network engineers. The course is crafted with everything you need to develop an automation mindset.
        <br />
        <br />
        "Super helpful stuff! I'm having more luck with this than the development course offered at my college. Cheers!" -@autoattackband (YouTube comment) <br/> <br/> "This is very easy and I don't really program on a day today basis. Thanks for making this easy Erika!!" -Adrian, network engineer (YouTube comment)

      </>
      // not white on pink, icons and text change. easy, practical, modern
    ),
  },
  {
    title: 'Practical & Relevant to Networking/IT',
    Svg: require('@site/static/img/undraw_coding-assistant_i178.svg').default,
    description: (
      <>
        No unnecessary fluff or theory. No generic examples. Just practical, real-world coding examples that are directly relevant to network engineers and IT (and with growing neteng collabs!). <br/> <br/> "20-year network engineer here. Trying to lead my team into the world of scripting/coding/automation/ etc. Your videos are a breath of fresh air. Thank you for creating them! Keep em' coming. Looking forward to the next level of videos."
        - Josh, Network Engineer (Substack message)" <br/> <br/> "Thanks for breaking it down! You made it easy for a SysOps guy to understand" -Keegan, SysOps Engineer (YouTube comment) 
      </>
    ),
  },
  {
    title: 'Modern Coding Includes AI & Cyber',
    Svg: require('@site/static/img/undraw_code-deployed_iwvu.svg').default,
    description: (
      <>
        Dividing the learning into 3 levels, this course walks you through foundations, learning with AI, and generating code with AI, with cybersecurity principles woven throughout. <br/> <br/> "This was an awesome video! I got a good gist of what APIs are now and can't wait to learn about best practices. I'll be checking out the Shodan API to see the type of information I can get with their product." -@the-overtinker (YouTube comment) <br/> <br/> "Level 2!! Lets go!!! 😃 Kudos to you for being dilligent in making this course." -Aaron (YouTube comment)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
