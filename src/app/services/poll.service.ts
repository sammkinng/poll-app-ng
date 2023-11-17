import { Injectable } from '@angular/core';
import { Poll } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList = [
    {
      content: "<h1>This is heading</h1><p>here goes</p><p><br></p><h2>subheading</h2><p>bhjdabh</p><p><br></p><h3>small head</h3><p>fdfd  jkfxjgjb jkfnbng <strong>jnxfb <em>dfbngnmnb </em></strong><em>fnbjcnb<u>kjvbvmbn  </u></em><u>vbvb</u></p><ol><li><u>fdg</u></li><li><u>3rwf</u></li><li><u>fxhg</u></li></ol><p><br></p><p><br></p><p>gnbvn </p><ul><li>fg</li><li>ggfb</li><li>gf</li></ul><p>cgbn</p><p><br></p><p><br></p>".replaceAll('<p><br></p>',''),
      name: "poll1",
      closed: false,
      id: 'ddh1',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",

      content: "Hello",
      closed: false,
      id: 'ddh2',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'England',
      genre: 'Adventure'
    },
    {
      content: "Hello",
      name: "poll3",
      closed: true,
      id: 'ddh3',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Adventure'
    },
    {
      content: "Hello",
      name: "poll4",
      closed: false,
      id: 'ddh4',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: ["A",'B','C','D','E'
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
      content: "Hello",
      name: "poll5",
      closed: true,
      id: 'ddh5',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
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
