const navModel = {
  title: 'Where are you along your faith journey?',
  subTitle: 'Select a starting point below. Each pathway features resources we offer to support and guide you along your journey to be more like Christ.',
  imageLinks: [
    {
      text: 'Exploring',
      image: '/images/exploring.jpg',
      subPanel: {
        title: 'Where would you like to focus?',
        links: [
          {
            title: 'Build Christian Friendships',
            buttonText: 'Join a Group',
            buttonLink: 'https://www.google.com'
          },
          {
            title: 'Work Through some Habits, or Hangups',
            buttonText: 'Celebrate Recovery',
            buttonLink: '#celebrateRecovery'
          },
          {
            title: 'Serve Alongside Others',
            buttonText: 'View Ministries',
            buttonLink: '#viewMinistries'
          },
          {
            title: 'Learn About Emotional Health',
            buttonText: 'Learn More',
            buttonLink: '#learnMore'
          }
        ]
      }
    },
    {
      text: 'Growing',
      image: '/images/growing.jpg',
      subPanel: {
        title: 'How would you like to grow spiritually?',
        links: [
          {
            title: 'Build Christian Friendships',
            buttonText: 'Join a Group',
            buttonLink: ''
          }

        ]
      }
    },
    {
      text: 'Restoring',
      image: '/images/restoring.jpg',
      subPanel: {
        title: 'How would you like to grow physically?',
        links: []
      }
    },
    {
      text: 'Maturing',
      image: '/images/maturing.jpg',
      subPanel: {
        title: 'How would you like to grow physically?',
        links: []
      }
    }
 ]
}

export default navModel;
