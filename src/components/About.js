import React, { Component } from 'react';
import Alisha from '../img/alisha-1.jpg';
export default class About extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
    };

  }

  render() {
    return (
      <div>
        <article>
      <p>About Us</p>
      <p>Raise your hand if you are a collar addict....Yeah? Me too.</p><img alt='Alisha' src={Alisha}></img>

<p>Alisha and 3 Hounds (taken 2006)My 2 Hounds Design adventure began in 2003
   when I needed an outlet for my creative energy and wanted to find that
    special martingale dog collar for my two retired racing Greyhounds. What
     started out as a way to create something special for my own hounds turned
      into my passion and I am lucky to be living my dream, and doing what I
       love.</p>

<p>My educational background is in Physics (B.S., and M.S.) and Mathematics
   (B.A.). The research skills I learned in school and in my short career as a
    Project Manager combined with my creative side is what fuels me.</p>

<p>What started as a one-woman show has turned into a team effort. I have hand
   selected my team of employees so that each person has different strengths
    that help make 2HD who we are today. I am lucky to live in what used to be
     a textile Mecca, where a large part of the world's furniture was once sewn.
      Many of those jobs have gone overseas, so it really means a lot to me to
       be able to help employ some of the people who have lost their jobs.</p>

<p>My team and I have worked long and hard to perfect the art of collar making.
   We only use premium hardware, first quality fabrics, and all of our collars
    are available lined with a super soft cuddle satin lining. We spend a great
     deal of time searching and establishing relationships with fabric and
     ribbon dealers all over the world. From Hand loomed Laotian Silk to French
      Jacquard Ribbon to Asian Silk Brocades, and even Scalamandre Silks, I
       choose each fabric or ribbon myself to create a stunning selection of
        dog collars!</p>

<p>And the best part? I am able to give more and do more for the canine
   community than I ever could if I worked a 9-5 job. We often donate products
    for fundraisers, we have hosted several programs in which a percentage of
     profits from a particular collar collection were given to groups, and we
      love hosting auctions to help raise money for adoption groups. In the
       almost 10 years that we have been in business, we have helped raise more
        than $500,000 for adoption groups all over the world.</p>
</article>
    </div>
    );
  };
}
