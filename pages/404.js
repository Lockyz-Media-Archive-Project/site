        import React from 'react';

        const Page = () => {
          return (
            <div dangerouslySetInnerHTML={ __html: `&lt;div class=&quot;container&quot;&gt;
            &lt;h1&gt;404 — Page not found&lt;/h1&gt;
&lt;p&gt;We couldn&#x27;t find the page you requested.&lt;/p&gt;
&lt;p&gt;&lt;a class=&quot;link-button btn-primary&quot; href=&quot;/index.html&quot;&gt;Return Home&lt;/a&gt;&lt;/p&gt;

          &lt;/div&gt;` } />
          );
        }

        export default Page;
