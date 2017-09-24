import React, { Component } from 'react';
import ReactPlayer from 'react-player';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
      {
          name: '1" freedom no pull harness',
          size: ['MD (Chest 22" - 28")', 'LG (Chest 26" - 32")',
          'XL (Chest 30"-36")(+$2.00)', '2XL (Chest 34"-44")(+4.00)',],
          color: [{ mdsku: '9781495073397', lgsku: '9781495073415',
                    xlsku: '9781495073434', xxlsku: '9781495073449',
                    color: 'Black/Silver', },
                  { mdsku: '9781495073398', lgsku: '9781495073416',
                    xlsku: '9781495073435', xxlsku: '9781495073450',
                    color: 'Red/Black', },
                  { mdsku: '9781495073399', lgsku: '9781495073417',
                    xlsku: '9781495073436', xxlsku: '9781495073451',
                    color: 'Brown/Black', },
                  { mdsku: '9781495073400', lgsku: '9781495073418',
                    xlsku: '9781495073437', xxlsku: '9781495073452',
                    color: 'Burgandy/Black', },
                  { mdsku: '9781495073401', lgsku: '9781495073419',
                    xlsku: '9781495073438', xxlsku: '9781495073453',
                    color: 'Rose Pink/Silver', },
                  { mdsku: '9781495073402', lgsku: '9781495073420',
                    xlsku: '9781495073439', xxlsku: '9781495073454',
                    color: 'Turquiose/Silver', },
                  { mdsku: '9781495073403', lgsku: '9781495073421',
                    xlsku: '9781495073440', xxlsku: '9781495073455',
                    color: 'Hot Pink/Black', },
                  { mdsku: '9781495073404', lgsku: '9781495073422',
                    xlsku: '9781495073441', xxlsku: '9781495073415',
                    color: 'Neon Orange/Black', },
                  { mdsku: '9781495073405', lgsku: '9781495073423',
                    xlsku: '9781495073442', xxlsku: '9781495073415',
                    color: 'Neon Green/Kelly Green', },
                  { mdsku: '9781495073406', lgsku: '9781495073424',
                    xlsku: '9781495073443', xxlsku: '9781495073456',
                    color: 'Kelly Green/Neon Green', },
                  { mdsku: '9781495073407', lgsku: '9781495073425',
                    xlsku: '9781495073444', xxlsku: '9781495073457',
                    color: 'Navy Blue/Royal Blue', },
                  { mdsku: '9781495073408', lgsku: '9781495073426',
                    xlsku: '9781495073415', xxlsku: '9781495073458',
                    color: 'Royal Blue/Navy Blue', },
                  { mdsku: '9781495073409', lgsku: '9781495073427',
                    xlsku: '9781495073415', xxlsku: '9781495073459',
                    color: 'Purple/Black', },
                  { mdsku: '9781495073410', lgsku: '9781495073428',
                    xlsku: '9781495073415', xxlsku: '9781495073460',
                    color: 'Teal/Silver', },
                  { mdsku: '9781495073411', lgsku: '9781495073429',
                    xlsku: '9781495073415', xxlsku: '9781495073461',
                    color: 'Tan/Black', },
                  { mdsku: '9781495073411', lgsku: '9781495073430',
                    xlsku: '9781495073445', xxlsku: '9781495073462',
                    color: 'Raspberry/Black', },
                  { mdsku: '9781495073412', lgsku: '9781495073431',
                    xlsku: '9781495073446', xxlsku: '9781495073463',
                    color: 'Silver/Black', },
                  { mdsku: '9781495073413', lgsku: '9781495073432',
                    xlsku: '9781495073447', xxlsku: '9781495073464',
                    color: 'Yellow/Silver', },
                  { mdsku: '9781495073414', lgsku: '9781495073433',
                    xlsku: '9781495073448', xxlsku: '9781495073465',
                    color: 'Rust(Bright)/Brown', },],
          cost: [{ size: 'MD', price: 29.99 }, { size: 'LG', price: 29.99 },
                 { size: 'XL', price: 31.99 }, { size: 'XXL', price: 33.99, }],
          training_leash: false,
          training_package: false,
          euro_leash: false,
          leash_only: false,
          notes: ['Makes Walking Fun!  The 1" wide Freedom Harness features a patented control loop on the back of the harness, which tightens gently around your dog\'s chest to discourage pulling and makes walking your dog an easy, more enjoyable experience.',
        'Fits Great!  To measure for the harness, use a soft measuring tape (or a piece of string) and measure all the way around the LARGEST part of your dog\'s chest. Choose the SMALLEST size that fits within that measurement.  So, for example, if your dog has a 28" chest, we recommend the size Medium for the best fit.',
        'Keeps your dog safe!  The harness is made with stainless steel hardware and four adjustment points to ensure that it is more than strong enough to hold any size dog, from 14 lbs all the way up to 250+ lbs. The chest strap is lined with Swiss Velvet, which helps prevent rubbing and chaffing sores behind the legs and the straps are all turned out to prevent sores and raw spots along the seams.',
        'Dual Connection makes it easy to walk your dog!  This harness also features a structural ring on the front of the harness. Connecting to this ring is Optional but it does allow you to connect to the front and back of the harness simultaneously. The main connection on the back of the harness tightens gently around the chest to discourage pulling behavior, while the connection on the front of the harness allows you to redirect your dog\'s attention back to you for training and treats.',
        'The Optional Training Leash allows you to connect to the front and back of the harness simultaneously. Alternatively you can use the training leash to connect to the harness and a collar at the same time, providing additional control points.  LEASH IS NOT INCLUDED UNLESS YOU ADD IT IN THE DROP DOWN MENU.',
        'NOTE: The Training leash that is included when you select "Make this a training package" is a shorter leash. When you use both connections, it is 3 feet long, when you use a single connection, it is 5 feet long. If you would like a longer leash option, you can order our Euro leash at This Link',
        '2 Hounds Design is the exclusive manufacturer of the Freedom Harness.  All of our products are Made in the USA!',
        '***This Harness is 1 inch wide, which is meant for medium and larger breed dogs such as Greyhounds, Great Danes, Mastiffs, etc. If you are looking for the 5/8 inch wide Freedom Harness for smaller dogs, please click this link: 5/8 inch Harness',
        'To measure your dog for the Freedom Harness, simply measure all the way around the chest at the largest point (right behind the front legs).  We recommend that you order the smallest size that still fits.  So for example, if the measurement is 28 inches, we recommend the Medium, rather than the Large.',
      ],
          disclamer: 'Please note: No used harnesses will be accepted for return or exchange. If you realize you have ordered the wrong size harness, you can exchange your unused harness for the correct size for the cost of shipping within 7 days of receipt.',
          reviews: [{ reviewer: 'Victoria Slocum', review: 'We have used these harnesses with our greyhounds for years. They provide excellent control and prevent them from slipping out of a collar. We would highly recommend them! Advantages: Excellent control, secure, works well with any dog with neck problems (one of our greyhounds has a disk problem in her neck). They are extremely easy to put on! Disadvantages: None!', stars: 4, date: 'Sep 2, 2013'},
        { reviewer: 'Thomas', review: 'We had tried other anti-pulling harnesses and frankly I did not think this one would work either. I was wrong. On the first walk, one of our champion pullers went from dislocating our shoulder to a slack lead walker. This product works! The short lead length, I found very handy. When you have a puller, you don\'t really want a long leash. With this double leash attachment, your dog is right there by your side. Advantages: The dual leash attachment is the key. This harness, some patience, and positive enforcement will make your dog a slack lead walker too. Disadvantages: It does take some time to initially adjust the harness. If your dog is especially squirmy, it helps to have two people. But once adjusted, putting on this harness is a simple one person job.', stars: 4, date: 'Jan 20, 2014'},
        { reviewer: 'Michele Matozzi', review: 'I ordered the Freedom No pull harness and leash set for my 5 year old very Pulling Great Dane. The minute I put this on her she was by my side and walked like a well behaved girl. I must say it was the best money spent. Can\'t wait to order another for my boy. Advantages: Does exactly what they say.', stars: 4, date: 'Sep 4, 2013'},
        { reviewer: 'Kerry St Thomas', review: 'We ordered our first harness for a greyhound some six years back - we were nervous about a friend whose hound had slipped out of his collar. Our boy adapted very quickly to the leashpoint between his shoulders. When we got our second hound, we quickly learned that she pulled and pulled and pulled with a leash attached to her collar - so we got her a harness too. Very quickly, she stopped pulling, and was a lot happier on walks. We haven\'t looked back, and have been thrilled with them. Advantages: Easy to put on; easy to train a dog to "nose into;" easy to adjust and fit especially with a deep-chested dog; velvet underband prevents chafing. Disadvantages: None!', stars: 4, date: 'Sep 5, 2013'},
        { reviewer: 'Yvonne Dunbar', review: 'Love the harness. It made such a difference to our wolfhound x. He still pulls a bit but comparatively he is now so easy to walk. All our foster kids are trained in the harness and we have found that when/if they go back to a collar there are few problems. Advantages: Makes walking the dogs a pleasure rather than a chore. Lots of beautiful colors to choose from. Disadvantages: None - other than deciding what color to buy - I want them all.', stars: 4, date: 'Jan 13, 2014', }
    ]},

  ],
    }



  }

  render() {
    const product = this.state.items;
    return (
      <div>
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?time_continue=2&v=FagQYmTE6AA'/>
        <p>{product.name}</p>
        <form>
        <input type="text" placeholder="Enter your e-mail"/>
        <input type="button" value="Submit"/>
      </form>
      </div>
    );

  };
};
