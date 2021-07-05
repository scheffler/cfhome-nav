﻿const navModel = {
  title: 'Where are you along your faith journey?',
  subTitle: 'Select a starting point below. Each pathway features resources we offer to support and guide you along your journey to be more like Christ.',
  imageLinks: [
    {
      text: 'Exploring',
      image: '/images/exploring.jpg',
      persona: {
        name: 'Are you like Tim?',
        picture: '/images/tim.png',
        description:'Tim is exploring faith in God and wants to better understand what believing in Jesus is all about. Tim is interested in connecting with a few trusted people who can answer some questions he has about the Bible. He wants some guidance as he learns about prayer, gets involved in serving, and considers giving to the church. He\'s curious what else is available to help him develop a relationship with God and determine the next steps in his faith journey.'
      },
      choicePanel: {
        title: 'What does it look like to follow Jesus?',
        choices: [
          {
            buttonText: 'Engage God Individually',
            linkPanel : {
              title: 'How can I experience more of God?',
              links: [
                {
                  buttonText: 'Begin your Bible reading habit',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Practice daily prayer',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Use the Engage God Daily',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Learn more about the Bible',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'Connect in a Group',
            linkPanel : {
              title: 'How can I explore with other Christ followers?',
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
            buttonText: 'Impact Others Personally',
            linkPanel : {
              title: 'How can I help other people?',
              links: [
                {
                  buttonText: 'Learn about The Table',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Share your faith story',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Use Opportunity Finder',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'Worship in a Gathering',
            linkPanel : {
              title: 'How can I worship with others?',
              links: [
                {
                  buttonText: 'Attend weekly worship services',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Learn about the Lord\'s Supper',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Get baptized',
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
        name: 'Are you like Jennifer?',
        picture: '/images/jennifer.png',
        description:'Jennifer has been attending worship services a few times a month now, but she wants something more. She is looking for authentic community where she can grow alongside other believers. She met a few people when she volunteered during server Day, but is hoping to build deeper connections within her church family. Jennifer is also excited to learn more about God and his Word with others. If she understands the Bible more, she can feel more confident having meaningful conversations about her faith with others.'
      },
      choicePanel: {
        title: 'Where are the next steps in my relationship with God?',
        choices: [
          {
            buttonText: 'Engage God Individually',
            linkPanel : {
              title: 'How can I experience more of God?',
              links: [
                {
                  buttonText: 'Enrich your Bible reading habit',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Explore Spiritual Pathways',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Do a Digging Deeper study',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Walk Thru the Bible seminars',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'Connect in a Group',
            linkPanel : {
              title: 'How can I grow with other Christ followers?',
              links: [
                {
                  buttonText: 'Join a Life Group',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Participate in a Bible study',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Join Moms Connection',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Join Re:engage or Re:Generation',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'Impact Others Personally',
            linkPanel : {
              title: 'How can I help other people?',
              links: [
                {
                  buttonText: 'Become a CF Encourager',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Host a Neighbors\' Table',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Join with ministry partners',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Use Opportunity Finder',
                  buttonLink: '#'
                }
              ]
            }
          },
          {
            buttonText: 'Worship in a Gathering',
            linkPanel : {
              title: 'How can I worship with others?',
              links: [
                {
                  buttonText: 'Attend weekly worship services',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Participate through prayer',
                  buttonLink: '#'
                },
                {
                  buttonText: 'Worship in song',
                  buttonLink: '#'
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: 'Restoring',
      image: '/images/restoring.jpg',
      persona: {
        name: 'Erica',
        picture: '/images/erica.png',
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
        picture: '/images/will.png',
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
