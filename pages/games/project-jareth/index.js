        import React from 'react';

        const Page = () => {
          return (
            <div dangerouslySetInnerHTML={ __html: `&lt;div class=&quot;container&quot;&gt;
            &lt;h1&gt;Project Jareth&lt;/h1&gt;
&lt;p&gt;A now abandoned VR Game, this was created purely to allow us to learn how to make VR Games.&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;IMPORTANT!&lt;/strong&gt; This is a VR-REQUIRED game, you&#x27;ll need a VR Headset compatible with OpenXR. This game has ONLY been tested with the Oculus Rift.&lt;/p&gt;

&lt;p&gt;&lt;a class=&quot;link-button btn-primary&quot; href=&quot;https://lockyz-media.itch.io&quot;&gt;Download Game - itch.io&lt;/a&gt;&lt;/p&gt;

&lt;h2&gt;Known Issues&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Sometimes doors close before you can enter them.&lt;/li&gt;
  &lt;li&gt;The Maze is Unfinished&lt;/li&gt;
  &lt;li&gt;Shooter Enemies are janky as heck&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;a class=&quot;link-button&quot; href=&quot;/index.html&quot;&gt;← Back to Archive&lt;/a&gt;&lt;/p&gt;

&lt;div class=&quot;meta&quot;&gt;Version: 0.7.0.0 • Developer: Lockyz Dev • Genre: Action • Engine: Unreal Engine • Status: Prototype&lt;/div&gt;

          &lt;/div&gt;` } />
          );
        }

        export default Page;
