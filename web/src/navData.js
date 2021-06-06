const navModel = {
  title: 'How would you like to grow?',
  subTitle: 'Select an area below you would like to grow in. We have plenty of resources that will help you become healthier, and assist you in your journey of growing more like Jesus.',
  imageLinks: [
    {
      text: 'Relational Health',
      image: '/images/pexels-matteo-badini-4064432.jpg',
      subPanel: {
        title: 'How would you like to grow relationally?',
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
      text: 'Spiritual Health',
      image: '/images/pexels-aleksey-kuprikov-3493777.jpg',
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
      text: 'Physical Health',
      image: '/images/pexels-paul-ijsendoorn-33041.jpg',
      subPanel: {
        title: 'How would you like to grow physically?',
        links: []
      }
    }
 ]
}

export default navModel;
