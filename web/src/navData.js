const navModel = {
  title: 'Where are you along your faith journey?',
  subTitle: 'Select a starting point below. Each pathway features resources we offer to support and guide you along your journey to be more like Christ.',
  imageLinks: [
    {
      text: 'Exploring',
      image: '/images/exploring.jpg',
      persona: {
        name: 'Tim',
        picture: '/images/exploring.jpg',
        title: 'Where are the next steps in my relationship with God?',
        description:'Jennifer has been attending worship services a few times a month now, but she wants something more. She is looking for authentic community where she can grow alongside other believers. She met a few people when she volunteered during server Day, but is hoping to build deeper connections within her church family. Jennifer is also excited to learn more about God and his Word with others. If she understands the Bible more, she can feel more confident having meaningful conversations about her faith with others.'
      },
      choicePanel: {
        title: 'Where would you like to focus?',
        choices: [
          {
            buttonText: 'I want to experience more of God in my life',
            linkPanel : {
              title: 'Explore the practice of engaging God individually',
              links: [
                {
                  buttonText: 'Begin your bible reading habit',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Practice the "ACTS" prayer model',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Use the Engage God Daily',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Attend the Walk Thru the Bible seminars',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'I want to connect & explore with other Christ followers',
            linkPanel : {
              title: 'Explore the practice of connecting in a group',
              links: [
                {
                  buttonText: 'Join a discovery group',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Join a new believer\'s group',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Become a CF Encourage',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'I want to make a personal impact on someone\'s life',
            linkPanel : {
              title: 'Explore the practice of impacting others personally',
              links: [
                {
                  buttonText: 'Learn more about CF\'s vision of "The Table"',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Share your faith story in a meaningful conversation',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Use the "Opportunity Finder" to serve at CF',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'I want to worship God with others',
            linkPanel : {
              title: 'Explore the practice of worshipping in a gathering',
              links: [
                {
                  buttonText: 'Attend weekly worship services',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Explore the meaning of the Lord\'s Supper',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Find out about getting baptized',
                  buttonLink: '#'
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: 'Growing',
      image: '/images/growing.jpg',
      persona: {
        name: 'Jennifer',
        picture: '/images/exploring.jpg',
        title: 'Where are the next steps in my relationship with God?',
        description:'Jennifer has been attending worship services a few times a month now, but she wants something more. She is looking for authentic community where she can grow alongside other believers. She met a few people when she volunteered during server Day, but is hoping to build deeper connections within her church family. Jennifer is also excited to learn more about God and his Word with others. If she understands the Bible more, she can feel more confident having meaningful conversations about her faith with others.'
      },
      choicePanel: {
        title: 'How would you like to grow spiritually?',
        links: [
          {
            buttonText: 'Join a Group',
            buttonLink: ''
          }

        ]
      }
    },
    {
      text: 'Restoring',
      image: '/images/restoring.jpg',
      persona: {
        name: 'Eric',
        picture: '/images/exploring.jpg',
        title: 'Where are the next steps in my relationship with God?',
        description:'Jennifer has been attending worship services a few times a month now, but she wants something more. She is looking for authentic community where she can grow alongside other believers. She met a few people when she volunteered during server Day, but is hoping to build deeper connections within her church family. Jennifer is also excited to learn more about God and his Word with others. If she understands the Bible more, she can feel more confident having meaningful conversations about her faith with others.'
      },
      choicePanel: {
        links: []
      }
    },
    {
      text: 'Maturing',
      image: '/images/maturing.jpg',
      persona: {
        name: 'Will',
        picture: '/images/exploring.jpg',
        title: 'Where are the next steps in my relationship with God?',
        description:'Jennifer has been attending worship services a few times a month now, but she wants something more. She is looking for authentic community where she can grow alongside other believers. She met a few people when she volunteered during server Day, but is hoping to build deeper connections within her church family. Jennifer is also excited to learn more about God and his Word with others. If she understands the Bible more, she can feel more confident having meaningful conversations about her faith with others.'
      },
      choicePanel: {
        links: []
      }
    }
 ]
}

export default navModel;
