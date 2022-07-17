export default {
  Hero: {
    heading: 'Let´s Roll the Dice',
    subheading: 'Welcome to the magic world of spell casters and fighters',
    headingType: 'h1',
    subheadingType: 'h2',
    ctaPrimary: {
      url: '/adventures',
      label: 'The Adventures',
    },
    ctaSecondary: {
      url: '/characters',
      label: 'The Characters',
    },
    mediaProps: {
      component: 'picture',
      breakpoints: {
        xs: 'https://wallpapercave.com/wp/zD18bKX.jpg',
        sm: 'https://wallpapercave.com/wp/wp2770248.jpg',
      },
    },
  },
  ArticleSlideshow: {
    heading: 'Generic Heading',
    entries: Array.from(new Array(6), () => ({
      mediaProps: {
        component: 'img',
        src: '//source.unsplash.com/m1m2EZOZVwA',
      },
      subheading: 'Vivamus',
      heading: 'Lorem ipsum dolor',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie varius viverra. Quisque urna tortor, bibendum ac quam a, bibendum fringilla nulla.', // prettier-ignore
      url: '/foo',
    })),
  },
  Promo: {
    alignContent: 'left',
    imageCircle: false,
    name: 'Oldrin Maclorion',
    mediaProps: {
      component: 'picture',
      src: 'https://picsum.photos/200/300?dl',
     },
    description: `It is normally played indoors with the participants seated around a tabletop. A typical Dungeons & Dragons game consists of an "adventure" in a fantasy world or "campaign setting". Typically, each player controls only a single character. The results of the characters' choices and the overall storyline for the game are determined by the Dungeon Master (DM) according to the rules of the game and the DM's interpretation of those rules. `, // prettier-ignore
    subtitle: 'Dwarf / Cleric',
  },

  Media: {
    mediaProps: {
      component: 'picture',
      breakpoints: {
        xs: { src: '//source.unsplash.com/DmD8HVOjy4c/1280x720', width: 1280, height: 720 },
        sm: { src: '//source.unsplash.com/DmD8HVOjy4c/1920x1080', width: 1920, height: 1080 },
      },
    },
  },
  Content: {
    text: `
      <h1>HTML Ipsum Presents</h1>
      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames
        ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
        ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>
        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi.
        Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="#0">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
      </p>
      <h2>Header Level 2</h2>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>
      <p>
        Curabitur eu lobortis nisi. Sed condimentum diam et sollicitudin commodo. Vestibulum tempus
        ligula ac massa aliquet sodales. Suspendisse vitae quam lobortis, laoreet sem ut, venenatis
        dolor. Sed mattis rutrum eros ac lobortis. Aenean quis lectus dapibus, convallis mi sed,
        rutrum dolor.
      </p>
      <blockquote>
        <p>”Morbi felis dui, tincidunt suscipit consectetur”</p>
      </blockquote>
      <figure>
        <img src="//source.unsplash.com/weekly" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</figcaption>
      </figure>
      <h3>Header Level 3</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
      <h4>Header Level 4</h4>
      <img src="//source.unsplash.com/daily" alt="" />
      <h5>Header Level 5</h5>
      <h6>Header Level 6</h6>
    `,
  },
  TitleHero: {
    heading: 'The Hooded Bandits',
    subtitle: 'SESSION II',
    textColor: 'text.secondary',
  },
  SpecialSectionHeading: {
    heading: 'EPICS',
    headingType: 'h2',
  },
  FeaturedText: {
    heading: 'The Fey of Clay',
    headingType: 'h1',
    subtitle1:
      'You shall be the Fellowship of the Ring. Overlook questions stubbornness Southrons excellent self driven speed stout how removed markings. Of keeps brook Radagast the Brown covering',
    subtitle2: `It is normally played indoors with the participants seated around a tabletop. A typical Dungeons & Dragons game consists of an "adventure" in a fantasy world or "campaign setting". Typically, each player controls only a single character. The results of the characters' choices and the overall storyline for the game are determined by the Dungeon Master (DM) according to the rules of the game and the DM's interpretation of those rules. `,
    ctaPrimary: {
      url: '/foo',
      label: 'Read full adventure',
    },
  },
}
