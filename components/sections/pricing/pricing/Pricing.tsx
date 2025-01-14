import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import PricingCard from './PricingCard'

const data = [
  {
    type: 'Limited Access',
    price: 'Free',
    per: '',
    buttonLabel: "Get Started",
    options: ['30 days of data', 'Limited insights*', 'Explore OSS data'],
    href: 'https://insights.opensauced.pizza/start',
  },
  {
    type: 'Full Access',
    price: '$99',
    per: '/ mo',
    buttonLabel: "Get Started",
    options: [
      '6 months of data', 'Full Insights*', 'CSV data exports',
      'Repository Comparisons', 'Team Sharing', 'Insights up to 10 repos'
    ],
    href: 'mailto:hello@opensauced.pizza?subject=I would like to pay for OpenSauced',
  },
  {
    type: 'Enterprise',
    price: 'Contact us',
    per: '',
    buttonLabel: "Contact Us",
    options: [
      'Insights on organizations',
      'Talent Pipeline',
      'Custom alerts and notifications',
    ],
    href: 'mailto:hello@opensauced.pizza',
  },
]

const Pricing: FC = (): ReactElement => {
  return (
    <SectionWrapper pt={205} pts={60} pb={260}>
      <Typography variant="preHeading">Pricing</Typography>
      <div className="w-full largeTablet:w-2/3">
        <Heading>
          $yellow-to-orangeAccess insights$yellow-to-orange you never knew
          existed
        </Heading>
      </div>

      <div className="pt-4 pb-10 largeTablet:pt-10 largeTablet:pb-20 largeTablet:w-[58%]">
        <Typography variant="subheading">
          Build your own dashboard to identify the best engineers across the
          world. OpenSauced is best with your own custom insights dashboard. Get
          notifications when contributions are trending.
        </Typography>
      </div>
      <div className="w-full flex flex-col gap-6 justify-center items-center largeTablet:flex-row">
        {data.map((item, i) => {
          const height =
            i !== 1 ? 'largeTablet:min-h-[454px]' : 'largeTablet:min-h-[486px]'
          const wrapperStyle = `h-fit w-full ${height}] largeTablet:w-1/3 `
          return (
            <div key={item.href} className={wrapperStyle}>
              <GradientBorderWrapper
                key={item.type}
                style={{ width: '100%', height: '100%', borderRadius: '5px' }}
              >
                <PricingCard data={item} index={i} />
              </GradientBorderWrapper>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Pricing
