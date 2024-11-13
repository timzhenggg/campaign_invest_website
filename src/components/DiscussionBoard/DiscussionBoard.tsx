import { DiscussionEmbed } from 'disqus-react';

const DiscussionBoard = () => {
    // Set up the configuration for Disqus
    // const disqusConfig = {
    //     url: article.url,            // URL of the article
    //     identifier: article.id,      // Unique identifier for the article
    //     title: article.title,        // Title of the article
    //     language: 'zh_TW'            // Language code for Disqus (Traditional Chinese in this example)
    // };

    return (
      <div id='discussion' className='px-4 md:px-6 w-full h-full flex justify-center'>
        <div className='w-full max-w-[1260px]'>
          <DiscussionEmbed
            shortname="elielectricvehicles"
            // config={disqusConfig}
            config={{}}
          />
        </div>
      </div>
    );
};

export default DiscussionBoard;
