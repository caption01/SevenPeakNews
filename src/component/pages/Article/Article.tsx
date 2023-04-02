import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Navigation, GridArticleNews } from '@/component/organisms';
import { Layout } from '@/component/molecules';

const respone = {
  status: 'ok',
  userTier: 'developer',
  total: 1,
  content: {
    id: 'sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused',
    type: 'article',
    sectionId: 'sport',
    sectionName: 'Sport',
    webPublicationDate: '2022-10-07T12:00:01Z',
    webTitle:
      'Jos Buttler primed for England comeback while Phil Salt stays focused',
    webUrl:
      'https://www.theguardian.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused',
    apiUrl:
      'https://content.guardianapis.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused',
    fields: {
      thumbnail:
        'https://media.guim.co.uk/fb655b01596a6709634592f37113e78d1b2775b3/0_126_6500_3900/500.jpg',
      headline:
        'Jos Buttler primed for England comeback while Phil Salt stays focused',
      body: '<p>Jos Buttler is expected to return to the England side on Sunday for the first of three Twenty20 internationals against Australia, ending nearly two months out of action with a calf injury, as preparations for the T20 World Cup intensify.</p> <p>England’s World Cup squad, complete with three travelling reserves, assembled in Perth this week, having travelled to Australia either from Pakistan or from England. Of those who had missed the series against Pakistan to work on their fitness Tymal Mills has fully recovered from the toe problem that forced him to sit out most of the Hundred while Chris Jordan and Liam Livingstone, who have been suffering from finger and ankle problems respectively, are considered more likely to play in Wednesday’s second game in Canberra than the opener at Optus Stadium.</p> <aside class="element element-rich-link element--thumbnail"> <p> <span>Related: </span><a href="https://www.theguardian.com/sport/2022/oct/05/ben-stokes-returns-england-specialist-superhero-cricket-t20-world-cup">The Spin | Ben Stokes back as England’s specialist superhero for T20 World Cup</a> </p> </aside>  <p>They will face an understrength Australia side, who completed a 2-0 series defeat of West Indies with a 31-run win in Brisbane on Friday night. Adam Zampa, Mitchell Starc, Josh Hazlewood, Pat Cummins and Glenn Maxwell have remained on the east coast while the rest of the squad are due to fly to Perth on Saturday, play on Sunday and leave again on Monday, with those players left behind all due to rejoin the team when they move to the capital.</p> <p>Buttler was present for each of England’s seven games in Pakistan without making a competitive appearance. In his absence Moeen Ali captained the side, with Phil Salt opening and keeping wicket. There remains a chance that Salt will continue to perform both those roles even after the captain returns to the team, though notably he spent the opening period of the team’s first full training session in the country on Friday practising catches in the outfield.</p> <p>The intense security cordon placed around the team while they were in Pakistan, which saw the squad occupy an entire floor of their hotel and travel to matches and training under police escort, meant that every player was forced to travel to every session. In Australia they have adopted a different approach, similar to that taken by the Test side since the start of the summer, under which no training session is compulsory and players can decide for themselves how best to ensure they go into each match at their mental and physical peak.</p> <p>For Salt, like Mills, Sunday’s match has added interest ahead of a return to the Optus Stadium in December to play for Perth Scorchers in the Big Bash League, and they will meet that team’s coaches before a game which represents the city’s first glimpse of international cricket since the end of 2019. Promisingly, Salt’s one previous appearance at the ground, with Adelaide Strikers in January 2020, saw him post his highest BBL score.</p> <aside class="element element-rich-link element--thumbnail"> <p> <span>Related: </span><a href="https://www.theguardian.com/sport/2022/oct/05/australia-beat-west-indies-in-thrilling-first-t20-tuneup-before-world-cup">Australia beat West Indies in thrilling first T20 tuneup before World Cup</a> </p> </aside>  <p>When the World Cup squad was first announced Rob Key, England’s managing director of men’s cricket, said the selectors already had a full first XI in mind, but it seems that certainty was another casualty of the freak golf injury that ruled Jonny Bairstow out of the competition.</p> <p>On Friday Salt said the team had “not had any sort of conversations” to suggest a lineup had been decided. “Things change very quickly in sport and whatever you have in mind can be out the window the next minute,” he said, “so I’m just looking to play the best cricket I can and hopefully I’m in the XI.”</p> <p>Salt’s battle with Alex Hales for a single spot at the top of the order will form an intriguing subplot to the series, but it is one the 26-year-old is doing his best to ignore. “If you keep giving yourself finish lines you can distract yourself,” he said. “If you have a more stripped back process, I’ve found that’s the best way to keep developing and keep performing.”</p> <p>The key contenders for England’s XI at least have the benefit of being in their squad. The same is not true of Australia whose form player, Cameron Green, was <a href="https://www.theguardian.com/sport/2022/oct/05/mitchell-marsh-and-stoinis-prioritised-over-green-for-australias-t20-world-cup" title="">left out of their initial selection</a>. That may still change – teams who have qualified directly for the Super 12s are free to alter their squads until next Sunday, after which players can only be replaced if they are injured – but after Aaron Finch, their captain, all but dismissed the idea on Wednesday he is running out of opportunities to make a compelling case for inclusion, and the four-ball one he posted at the Gabba on Friday will not have helped his cause.</p>',
    },
    blocks: {
      body: [
        {
          id: '633ff9818f08e561623cad3d',
          bodyHtml:
            '<p>Jos Buttler is expected to return to the England side on Sunday for the first of three Twenty20 internationals against Australia, ending nearly two months out of action with a calf injury, as preparations for the T20 World Cup intensify.</p> <p>England’s World Cup squad, complete with three travelling reserves, assembled in Perth this week, having travelled to Australia either from Pakistan or from England. Of those who had missed the series against Pakistan to work on their fitness Tymal Mills has fully recovered from the toe problem that forced him to sit out most of the Hundred while Chris Jordan and Liam Livingstone, who have been suffering from finger and ankle problems respectively, are considered more likely to play in Wednesday’s second game in Canberra than the opener at Optus Stadium.</p> <aside class="element element-rich-link element--thumbnail"> <p> <span>Related: </span><a href="https://www.theguardian.com/sport/2022/oct/05/ben-stokes-returns-england-specialist-superhero-cricket-t20-world-cup">The Spin | Ben Stokes back as England’s specialist superhero for T20 World Cup</a> </p> </aside>  <p>They will face an understrength Australia side, who completed a 2-0 series defeat of West Indies with a 31-run win in Brisbane on Friday night. Adam Zampa, Mitchell Starc, Josh Hazlewood, Pat Cummins and Glenn Maxwell have remained on the east coast while the rest of the squad are due to fly to Perth on Saturday, play on Sunday and leave again on Monday, with those players left behind all due to rejoin the team when they move to the capital.</p> <p>Buttler was present for each of England’s seven games in Pakistan without making a competitive appearance. In his absence Moeen Ali captained the side, with Phil Salt opening and keeping wicket. There remains a chance that Salt will continue to perform both those roles even after the captain returns to the team, though notably he spent the opening period of the team’s first full training session in the country on Friday practising catches in the outfield.</p> <p>The intense security cordon placed around the team while they were in Pakistan, which saw the squad occupy an entire floor of their hotel and travel to matches and training under police escort, meant that every player was forced to travel to every session. In Australia they have adopted a different approach, similar to that taken by the Test side since the start of the summer, under which no training session is compulsory and players can decide for themselves how best to ensure they go into each match at their mental and physical peak.</p> <p>For Salt, like Mills, Sunday’s match has added interest ahead of a return to the Optus Stadium in December to play for Perth Scorchers in the Big Bash League, and they will meet that team’s coaches before a game which represents the city’s first glimpse of international cricket since the end of 2019. Promisingly, Salt’s one previous appearance at the ground, with Adelaide Strikers in January 2020, saw him post his highest BBL score.</p> <aside class="element element-rich-link element--thumbnail"> <p> <span>Related: </span><a href="https://www.theguardian.com/sport/2022/oct/05/australia-beat-west-indies-in-thrilling-first-t20-tuneup-before-world-cup">Australia beat West Indies in thrilling first T20 tuneup before World Cup</a> </p> </aside>  <p>When the World Cup squad was first announced Rob Key, England’s managing director of men’s cricket, said the selectors already had a full first XI in mind, but it seems that certainty was another casualty of the freak golf injury that ruled Jonny Bairstow out of the competition.</p> <p>On Friday Salt said the team had “not had any sort of conversations” to suggest a lineup had been decided. “Things change very quickly in sport and whatever you have in mind can be out the window the next minute,” he said, “so I’m just looking to play the best cricket I can and hopefully I’m in the XI.”</p> <p>Salt’s battle with Alex Hales for a single spot at the top of the order will form an intriguing subplot to the series, but it is one the 26-year-old is doing his best to ignore. “If you keep giving yourself finish lines you can distract yourself,” he said. “If you have a more stripped back process, I’ve found that’s the best way to keep developing and keep performing.”</p> <p>The key contenders for England’s XI at least have the benefit of being in their squad. The same is not true of Australia whose form player, Cameron Green, was <a href="https://www.theguardian.com/sport/2022/oct/05/mitchell-marsh-and-stoinis-prioritised-over-green-for-australias-t20-world-cup" title="">left out of their initial selection</a>. That may still change – teams who have qualified directly for the Super 12s are free to alter their squads until next Sunday, after which players can only be replaced if they are injured – but after Aaron Finch, their captain, all but dismissed the idea on Wednesday he is running out of opportunities to make a compelling case for inclusion, and the four-ball one he posted at the Gabba on Friday will not have helped his cause.</p>',
          bodyTextSummary:
            'Jos Buttler is expected to return to the England side on Sunday for the first of three Twenty20 internationals against Australia, ending nearly two months out of action with a calf injury, as preparations for the T20 World Cup intensify. England’s World Cup squad, complete with three travelling reserves, assembled in Perth this week, having travelled to Australia either from Pakistan or from England. Of those who had missed the series against Pakistan to work on their fitness Tymal Mills has fully recovered from the toe problem that forced him to sit out most of the Hundred while Chris Jordan and Liam Livingstone, who have been suffering from finger and ankle problems respectively, are considered more likely to play in Wednesday’s second game in Canberra than the opener at Optus Stadium.\nThey will face an understrength Australia side, who completed a 2-0 series defeat of West Indies with a 31-run win in Brisbane on Friday night. Adam Zampa, Mitchell Starc, Josh Hazlewood, Pat Cummins and Glenn Maxwell have remained on the east coast while the rest of the squad are due to fly to Perth on Saturday, play on Sunday and leave again on Monday, with those players left behind all due to rejoin the team when they move to the capital. Buttler was present for each of England’s seven games in Pakistan without making a competitive appearance. In his absence Moeen Ali captained the side, with Phil Salt opening and keeping wicket. There remains a chance that Salt will continue to perform both those roles even after the captain returns to the team, though notably he spent the opening period of the team’s first full training session in the country on Friday practising catches in the outfield. The intense security cordon placed around the team while they were in Pakistan, which saw the squad occupy an entire floor of their hotel and travel to matches and training under police escort, meant that every player was forced to travel to every session. In Australia they have adopted a different approach, similar to that taken by the Test side since the start of the summer, under which no training session is compulsory and players can decide for themselves how best to ensure they go into each match at their mental and physical peak. For Salt, like Mills, Sunday’s match has added interest ahead of a return to the Optus Stadium in December to play for Perth Scorchers in the Big Bash League, and they will meet that team’s coaches before a game which represents the city’s first glimpse of international cricket since the end of 2019. Promisingly, Salt’s one previous appearance at the ground, with Adelaide Strikers in January 2020, saw him post his highest BBL score.\nWhen the World Cup squad was first announced Rob Key, England’s managing director of men’s cricket, said the selectors already had a full first XI in mind, but it seems that certainty was another casualty of the freak golf injury that ruled Jonny Bairstow out of the competition. On Friday Salt said the team had “not had any sort of conversations” to suggest a lineup had been decided. “Things change very quickly in sport and whatever you have in mind can be out the window the next minute,” he said, “so I’m just looking to play the best cricket I can and hopefully I’m in the XI.” Salt’s battle with Alex Hales for a single spot at the top of the order will form an intriguing subplot to the series, but it is one the 26-year-old is doing his best to ignore. “If you keep giving yourself finish lines you can distract yourself,” he said. “If you have a more stripped back process, I’ve found that’s the best way to keep developing and keep performing.” The key contenders for England’s XI at least have the benefit of being in their squad. The same is not true of Australia whose form player, Cameron Green, was left out of their initial selection. That may still change – teams who have qualified directly for the Super 12s are free to alter their squads until next Sunday, after which players can only be replaced if they are injured – but after Aaron Finch, their captain, all but dismissed the idea on Wednesday he is running out of opportunities to make a compelling case for inclusion, and the four-ball one he posted at the Gabba on Friday will not have helped his cause.',
          attributes: {},
          published: true,
          createdDate: '2022-10-07T12:00:01Z',
          firstPublishedDate: '2022-10-07T12:00:01Z',
          publishedDate: '2022-10-07T13:36:32Z',
          lastModifiedDate: '2022-10-07T13:36:32Z',
          contributors: [],
          elements: [
            {
              type: 'text',
              assets: [],
              textTypeData: {
                html: '<p>Jos Buttler is expected to return to the England side on Sunday for the first of three Twenty20 internationals against Australia, ending nearly two months out of action with a calf injury, as preparations for the T20 World Cup intensify.</p> \n<p>England’s World Cup squad, complete with three travelling reserves, assembled in Perth this week, having travelled to Australia either from Pakistan or from England. Of those who had missed the series against Pakistan to work on their fitness Tymal Mills has fully recovered from the toe problem that forced him to sit out most of the Hundred while Chris Jordan and Liam Livingstone, who have been suffering from finger and ankle problems respectively, are considered more likely to play in Wednesday’s second game in Canberra than the opener at Optus Stadium.</p>',
              },
            },
            {
              type: 'rich-link',
              assets: [],
              richLinkTypeData: {
                url: 'https://www.theguardian.com/sport/2022/oct/05/ben-stokes-returns-england-specialist-superhero-cricket-t20-world-cup',
                originalUrl:
                  'https://www.theguardian.com/sport/2022/oct/05/ben-stokes-returns-england-specialist-superhero-cricket-t20-world-cup',
                linkText:
                  'The Spin | Ben Stokes back as England’s specialist superhero for T20 World Cup',
                linkPrefix: 'Related: ',
                role: 'thumbnail',
              },
            },
            {
              type: 'text',
              assets: [],
              textTypeData: {
                html: '<p>They will face an understrength Australia side, who completed a 2-0 series defeat of West Indies with a 31-run win in Brisbane on Friday night. Adam Zampa, Mitchell Starc, Josh Hazlewood, Pat Cummins and Glenn Maxwell have remained on the east coast while the rest of the squad are due to fly to Perth on Saturday, play on Sunday and leave again on Monday, with those players left behind all due to rejoin the team when they move to the capital.</p> \n<p>Buttler was present for each of England’s seven games in Pakistan without making a competitive appearance. In his absence Moeen Ali captained the side, with Phil Salt opening and keeping wicket. There remains a chance that Salt will continue to perform both those roles even after the captain returns to the team, though notably he spent the opening period of the team’s first full training session in the country on Friday practising catches in the outfield.</p> \n<p>The intense security cordon placed around the team while they were in Pakistan, which saw the squad occupy an entire floor of their hotel and travel to matches and training under police escort, meant that every player was forced to travel to every session. In Australia they have adopted a different approach, similar to that taken by the Test side since the start of the summer, under which no training session is compulsory and players can decide for themselves how best to ensure they go into each match at their mental and physical peak.</p> \n<p>For Salt, like Mills, Sunday’s match has added interest ahead of a return to the Optus Stadium in December to play for Perth Scorchers in the Big Bash League, and they will meet that team’s coaches before a game which represents the city’s first glimpse of international cricket since the end of 2019. Promisingly, Salt’s one previous appearance at the ground, with Adelaide Strikers in January 2020, saw him post his highest BBL score.</p>',
              },
            },
            {
              type: 'rich-link',
              assets: [],
              richLinkTypeData: {
                url: 'https://www.theguardian.com/sport/2022/oct/05/australia-beat-west-indies-in-thrilling-first-t20-tuneup-before-world-cup',
                originalUrl:
                  'https://www.theguardian.com/sport/2022/oct/05/australia-beat-west-indies-in-thrilling-first-t20-tuneup-before-world-cup',
                linkText:
                  'Australia beat West Indies in thrilling first T20 tuneup before World Cup',
                linkPrefix: 'Related: ',
                role: 'thumbnail',
              },
            },
            {
              type: 'text',
              assets: [],
              textTypeData: {
                html: '<p>When the World Cup squad was first announced Rob Key, England’s managing director of men’s cricket, said the selectors already had a full first XI in mind, but it seems that certainty was another casualty of the freak golf injury that ruled Jonny Bairstow out of the competition.</p> \n<p>On Friday Salt said the team had “not had any sort of conversations” to suggest a lineup had been decided. “Things change very quickly in sport and whatever you have in mind can be out the window the next minute,” he said, “so I’m just looking to play the best cricket I can and hopefully I’m in the XI.”</p> \n<p>Salt’s battle with Alex Hales for a single spot at the top of the order will form an intriguing subplot to the series, but it is one the 26-year-old is doing his best to ignore. “If you keep giving yourself finish lines you can distract yourself,” he said. “If you have a more stripped back process, I’ve found that’s the best way to keep developing and keep performing.”</p> \n<p>The key contenders for England’s XI at least have the benefit of being in their squad. The same is not true of Australia whose form player, Cameron Green, was <a href="https://www.theguardian.com/sport/2022/oct/05/mitchell-marsh-and-stoinis-prioritised-over-green-for-australias-t20-world-cup" title="">left out of their initial selection</a>. That may still change – teams who have qualified directly for the Super 12s are free to alter their squads until next Sunday, after which players can only be replaced if they are injured – but after Aaron Finch, their captain, all but dismissed the idea on Wednesday he is running out of opportunities to make a compelling case for inclusion, and the four-ball one he posted at the Gabba on Friday will not have helped his cause.</p>',
              },
            },
          ],
        },
      ],
      totalBodyBlocks: 1,
    },
    isHosted: false,
    pillarId: 'pillar/sport',
    pillarName: 'Sport',
  },
};

const getBodyElements = (body = []) => {
  const elements = body[0]?.elements || [];

  return elements.reduce((result, element) => {
    if (element.type !== 'text') return result;

    return [
      ...result,
      {
        element: 'div',
        type: element.type,
        html: element.textTypeData?.html,
      },
    ];
  }, []);
};

const transformToArticleData = (response = {}) => {
  const publicationDate = response?.content?.webPublicationDate;
  const title = response?.content?.webTitle;
  const body = respone?.content?.blocks?.body;
  const image = respone?.content?.fields?.thumbnail || 'peakLogo';

  const formatData = dayjs(publicationDate).format('ddd DD MMM YYYY HH:mm');

  return {
    publicationDate: formatData,
    title: title,
    body: getBodyElements(body),
    image: image,
  };
};

const Article = () => {
  const data = transformToArticleData(respone);
  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        <GridArticleNews article={data} />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Article;
