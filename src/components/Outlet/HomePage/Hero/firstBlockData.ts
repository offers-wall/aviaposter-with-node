export enum BackgroundPaths {
  Desktop = '/images/backgrounds/desktop_background.jpg',
  Mobile = '/images/backgrounds/mobile_background.jpg',
}

export interface FirstBlock {
  title: string;
  description: string;
  buttonText: string;
}

export const firstBlock: FirstBlock = {
  title: 'Online store of paintings and posters “ArtPoster”:',
  description:
    'Buying paintings-posters means coloring your gray life! How often do we have to choose between interior items that will surround us for a long time, between decor that will have to fulfill its purpose 100% and dilute the boring, discreet surroundings! But how not to make a mistake in choosing so that this very decor, contrary to its main function, designed to please the eye, does not begin to go against our goals and objectives and does not become a spot of disappointment, and maybe even irritation!? It’s doubly offensive when such inappropriate decor costs a lot of money! There is a solution - buy a painting or poster! Custom paintings and posters are a solution that will help you choose what you need, something that will make you happy and comfortable at the same time, in the configuration and size that best suits your situation! This is the option the result of which, with the right approach, can be predicted with a high degree of probability, because we have tried to provide as many tools as possible to create exactly your painting or poster!',
  buttonText: 'Buy Now',
};
