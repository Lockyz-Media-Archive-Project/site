        import React from 'react';

        const Page = () => {
          return (
            <div dangerouslySetInnerHTML={ __html: `&lt;div class=&quot;container&quot;&gt;
            &lt;h1&gt;Lockyz Media Archive&lt;/h1&gt;
&lt;h2&gt;Preserving our history!&lt;/h2&gt;
&lt;p&gt;The Lockyz Media Archive serves to host all our abandonded projects.&lt;/p&gt;

&lt;section class=&quot;card&quot;&gt;
  &lt;h2&gt;Monsty Corp Unity&lt;/h2&gt;
  &lt;p&gt;Explore the facility known as &quot;Monsty Corp&quot; in this story-based puzzle game.&lt;/p&gt;
  &lt;p&gt;&lt;a class=&quot;link-button btn-primary&quot; href=&quot;/games/monsty-corp/index.html&quot;&gt;Explore Monsty Corp →&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;

&lt;section class=&quot;card&quot;&gt;
  &lt;h2&gt;SCPC&lt;/h2&gt;
  &lt;p&gt;Defeat the Galactic Conquers in this epic spaceship battling game.&lt;/p&gt;
  &lt;p&gt;&lt;a class=&quot;link-button&quot; href=&quot;/games/scpc/index.html&quot;&gt;Visit SCPC →&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;

&lt;section class=&quot;card&quot;&gt;
  &lt;h2&gt;Table Ball Unity&lt;/h2&gt;
  &lt;p&gt;The last Unity build for our game Unreal Table Ball.&lt;/p&gt;
  &lt;p&gt;&lt;a class=&quot;link-button&quot; href=&quot;/games/table-ball/index.html&quot;&gt;Play Table Ball →&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;

&lt;section class=&quot;card&quot;&gt;
  &lt;h2&gt;Project Jareth&lt;/h2&gt;
  &lt;p&gt;Project Jareth is an unfinished VR Game.&lt;/p&gt;
  &lt;p&gt;&lt;a class=&quot;link-button&quot; href=&quot;/games/project-jareth/index.html&quot;&gt;Check it out! →&lt;/a&gt;&lt;/p&gt;
&lt;/section&gt;

          &lt;/div&gt;` } />
          );
        }

        export default Page;
