export interface Scientist {
    id: number;
    name: string;
    imageId: string;
    profession: string;
    awards: string[];
    discovery: string;
    }
export const SCIENTISTS: Scientist[] = [
   {
    id: 0,
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    profession: 'physicist and chemist',
    awards: [
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal'
    ],
    discovery: 'polonium (chemical element)'
  },
  {
    id: 1,
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'geochemist',
    awards: [
      'Miyake Prize for geochemistry',
      'Tanaka Prize'
    ],
    discovery: 'a method for measuring carbon dioxide in seawater'
  },
  {
    id: 2,
    name: 'Albert Einstein',
    imageId: 'fJTaGgg',
    profession: 'theoretical physicist',
    awards: [
      'Nobel Prize in Physics',
      'Copley Medal',
      'Max Planck Medal'
    ],
    discovery: 'theory of relativity'
  },
  {
    id: 3,
    name: 'Niels Bohr',
    imageId: 'rN1f5t9',
    profession: 'physicist',
    awards: [
      'Nobel Prize in Physics',
      'Hughes Medal',
      'Copley Medal'
    ],
    discovery: 'the structure of the atom and quantum theory'
  },
  {
    id: 4,
    name: 'Srinivasa Ramanujan',
    imageId: 'dB6dQq2',
    profession: 'mathematician',
    awards: [
      'Fellow of the Royal Society',
      'Trinity College Fellowship'
    ],
    discovery: 'contributions to number theory, infinite series, and continued fractions'
  },
  {
    id: 5,
    name: 'C. V. Raman',
    imageId: 'kP3xWv1',
    profession: 'physicist',
    awards: [
      'Nobel Prize in Physics',
      'Bharat Ratna',
      'Lenin Peace Prize'
    ],
    discovery: 'the Raman effect (scattering of light)'
  },
  {
    id: 6,
    name: 'Homi J. Bhabha',
    imageId: 'mZ9tLp4',
    profession: 'nuclear physicist',
    awards: [
      'Adams Prize',
      'Padma Bhushan'
    ],
    discovery: 'cascade theory of cosmic ray showers and pioneering India\'s nuclear program'
  },
  {
    id: 7,
    name: 'Vikram Sarabhai',
    imageId: 'wQ7gYx3',
    profession: 'physicist and astronomer',
    awards: [
      'Padma Bhushan',
      'Padma Vibhushan (posthumous)'
    ],
    discovery: 'founder of India\'s space research programme (ISRO)'
  }
];