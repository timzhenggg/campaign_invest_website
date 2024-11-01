import React from 'react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const Footer: React.FC = () => {
  return (
    <footer className='py-14 w-full bg-primary-text'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col gap-12 md:gap-20 lg:gap-24'>
          <div className='w-full flex flex-col sm:flex-row sm:items-center justify-between gap-8 sm:gap-4'>
            <img src="/logo.svg" alt="logo" draggable={false} className='w-20' />
            <nav>
              <ul className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8'>
                <li className='text-white uppercase'>WHY INVEST</li>
                <li className='text-white uppercase'>MARKET</li>
                <li className='text-white uppercase'>EXPANSION</li>
                <li className='text-white uppercase'>PERKS</li>
                <li className='text-white uppercase'>FAQ</li>
              </ul>
            </nav>
          </div>  

          <div className='flex flex-col gap-12 md:gap-16'>
            <div className='flex flex-col gap-6 sm:gap-8'>
              <p className='text-primary-text-100 font-bold text-2xl md:text-3xl'>Sources</p>
              <ol className='list-decimal list-inside'>
                <li className='text-primary-green text-sm'>
                  <a href="https://micromobility.io/news/what-is-micromobility" target='_blank'>
                    https://micromobility.io/news/what-is-micromobility
                  </a>
                </li>
                <li className='text-primary-green text-sm'>
                  <a href="https://bikeleague.org/national-household-travel-survey-short-trips-analysis/" target='_blank'>
                    https://bikeleague.org/national-household-travel-survey-short-trips-analysis/
                  </a>
                </li>
                <li className='text-primary-green text-sm'>
                  <a href="https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/mckinsey-on-urban-mobility/minimobility-the-next-big-thing-in-urban-mobility" target='_blank'>
                    https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/mckinsey-on-urban-mobility/minimobility-the-next-big-thing-in-urban-mobility
                  </a>
                </li>
              </ol>
            </div>

            <div className='w-full flex flex-col items-center gap-12 md:gap-16'>
              <div className='flex flex-col gap-6 md:gap-8'>
                <p className='text-white/50 leading-[130%] text-sm'>Equity crowdfunding investments in private placements, and start-up investments in particular, are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest in start-ups. Companies seeking startup investment through equity crowdfunding tend to be in earlier stages of development and their business model, products and services may not yet be fully developed, operational or tested in the public marketplace. There is no guarantee that the stated valuation and other terms are accurate or in agreement with the market or industry valuations. Further, investors may receive illiquid and/or restricted stock that may be subject to holding period requirements and/or liquidity concerns.</p>
                <div className='flex flex-col'>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC, a registered broker-dealer, and member of <span className='text-white'>FINRA</span> | <span className='text-white'>SIPC</span>, located at 4000 Eagle Point Corporate Drive, Suite 950, Birmingham, AL 35242, is the Intermediary for this offering and is not an affiliate of or connected with the Issuer. Please check our background on <span className='text-white'>FINRA</span>'s <span className='text-white'>BrokerCheck</span>.</p>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC does not make investment recommendations.</p>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC is NOT placing or selling these securities on behalf of the Issuer.</p>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC is NOT soliciting this investment or making any recommendations by collecting, reviewing, and processing an Investor's documentation for this investment.</p>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC conducts Anti-Money Laundering, Identity and Bad Actor Disqualification reviews of the Issuer, and confirms they are a registered business in good standing.DealMaker Securities LLC is NOT vetting or approving the information provided by the Issuer or the Issuer itself.
                  </p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-white/50 leading-[130%] text-sm'>Contact information is provided for Investors to make inquiries and requests to DealMaker Securities LLC regarding Regulation CF in general, or the status of such investor’s submitted documentation, specifically.</p>
                  <p className='text-white/50 leading-[130%] text-sm'>DealMaker Securities LLC may direct Investors to specific sections of the Offering Circular to locate information or answers to their inquiry but does not opine or provide guidance on issuer related matters.</p>
                </div>
                <p className='text-white/50 leading-[130%] text-sm'>This website contains forward-looking statements. These statements may include the words “believe”, “expect”, “anticipate”, “intend”, “plan”, “estimate”, “project”, “will”, “may”, “targeting” and similar expressions as well as statements other than statements of historical facts including, without limitation, those regarding the financial position, business strategy, plans, targets and objectives of the management of Eli Electric Vehicles, Inc. (the "Company") for future operations (including development plans and objectives). Such forward-looking statements involve known and unknown risks, uncertainties and other important factors which may affect the Company's ability to implement and achieve the economic and monetary policies, budgetary plans, fiscal guidelines and other development benchmarks set out in such forward-looking statements and which may cause actual results, performance or achievements to be materially different from future results, performance or achievements expressed or implied by such forward-looking statements. Such forward-looking statements are based on numerous assumptions regarding the Company's present and future policies and plans and the environment in which the Company will operate in the future. Furthermore, certain forward-looking statements are based on assumptions or future events which may not prove to be accurate, and no reliance whatsoever should be placed on any forward-looking statements in this presentation. The forward-looking statements in this website speak only as of the date of the Company's initial Form C, and the Company expressly disclaims to the fullest extent permitted by law any obligation or undertaking to disseminate any updates or revisions to any forward-looking statements contained herein to reflect any change in expectations with regard thereto or any change in events, conditions or circumstances on which any such statements are based.</p>
              </div>

              <ul className='flex items-center flex-wrap gap-8'>
                <li className='text-white leading-[130%] text-sm'>© {new Date().getFullYear()} Eli Electric Vehicles</li>
                <li className='text-white leading-[130%] text-sm'>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;