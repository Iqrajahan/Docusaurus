import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
        title: 'Linear Regression ',
    description: (
      <>
        We used Linear Regression model from Scikit learn model selection to perform classification. 
        Accuracy achieved is 69% while the weighted F1 score of 71%.
      </>
    ),
  },
  {
    title: 'Random forest',
    description: (
      <>
            We used Random Forest model from Scikit learn model selection to perform classification.
            Accuracy achieved is 75% while the weighted average F1 score of 76%.
      </>
    ),
    },
    {
        title: 'SVM',
        description: (
            <>
                We used SVM model from Scikit learn model selection to perform classification.
                Accuracy achieved is 78% while the weighted average F1 score of 78%.
            </>
        ),
    },
  {
    title: 'ANN',
    description: (
      <>
        Used ANN model fpor classification purpose.
        Accuracy achieved is 75% and weighted average is 76%.
      </>
    ),
  },
];

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
