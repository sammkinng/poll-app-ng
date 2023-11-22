import { Injectable } from '@angular/core';
import { Poll } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList = [
    {
      
      bg:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      content: "<h1>This is heading</h1><p>here goes</p><p><br></p><h2>subheading</h2><p>bhjdabh</p><p><br></p><h3>small head</h3><p>fdfd  jkfxjgjb jkfnbng <strong>jnxfb <em>dfbngnmnb </em></strong><em>fnbjcnb<u>kjvbvmbn  </u></em><u>vbvb</u></p><ol><li><u>fdg</u></li><li><u>3rwf</u></li><li><u>fxhg</u></li></ol><p><br></p><p><br></p><p>gnbvn </p><ul><li>fg</li><li>ggfb</li><li>gf</li></ul><p>cgbn</p><p><br></p><p><br></p>".replaceAll('<p><br></p>',''),
      name: "poll1",
      closed: false,
      id: 'ddh1',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date('11-25-2023'),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",
      
      bg:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    
      content: "Hello",
      closed: false,
      id: 'ddh2',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date('11-25-2023'),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'England',
      genre: 'Adventure'
    },
    {
    bg:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  
      content: "Hello",
      name: "poll3",
      closed: true,
      id: 'ddh3',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date('11-25-2023'),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Adventure'
    },
    {
    bg:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  
      content: "Hello",
      name: "poll4",
      closed: false,
      id: 'ddh4',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date('11-25-2023'),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
    bg:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  
      content: "Hello",
      name: "poll5",
      closed: true,
      id: 'ddh5',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date('11-25-2023'),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Animation'
    },

  ]

  constructor() { }

  getAllPolls() {
    return new Promise<Poll[]>((resolve, reject) => {
      setTimeout(() => resolve(this.pollList), 1000)
    })
  }

  getPollById(id: string | null) {
    return new Promise<Poll | null>((resolve, reject) => {
      setTimeout(() => resolve(this.pollList.find(i => i.id === id) || null), 500)
    })
  }


}
