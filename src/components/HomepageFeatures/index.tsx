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
    title: 'Easy to Understand',
    Svg: require('@site/static/img/undraw_thinking-mode_7czd.svg').default,
    description: (
      <>
        This course is designed to be accessible to everyone, regardless of their prior experience with programming. We will start with the basics and gradually build up your skills, ensuring that you can follow along and understand each concept before moving on to the next.
      </>
      // not white on pink, icons and text change. easy, practical, modern
    ),
  },
  {
    title: 'Hands On Learning',
    Svg: require('@site/static/img/undraw_coding-assistant_i178.svg').default,
    description: (
      <>
       This course emphasizes hands-on learning, allowing you to apply what you learn through practical exercises and projects. Giving you valuable experience and confidence in your AI assisted coding skills.
      </>
    ),
  },
  {
    title: 'Modern and Up-to-Date',
    Svg: require('@site/static/img/undraw_code-deployed_iwvu.svg').default,
    description: (
      <>
        This course is designed to be modern and up-to-date, covering the latest tools and techniques in AI assisted coding. You will learn how to use popular AI coding assistants and stay ahead of the curve in this rapidly evolving field.
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
