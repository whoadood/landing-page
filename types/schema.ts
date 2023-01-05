import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
}

/**
 * About
 *
 *
 */
export interface SanityAbout extends SanityDocument {
  _type: 'about'

  /**
   * Navigation URLs — `array`
   *
   *
   */
  navigationURLs?: Array<SanityReference<SanityNavigation>>

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: 'previewImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * CTA Button Label — `string`
   *
   *
   */
  CTAButtonLabel?: string

  /**
   * CTA Button URL — `url`
   *
   *
   */
  CTAButtonURL?: string

  /**
   * Projects Button Label — `string`
   *
   *
   */
  projectsButtonLabel?: string

  /**
   * Projects Button URL — `url`
   *
   *
   */
  projectsButtonUrl?: string

  /**
   * Users — `array`
   *
   *
   */
  users?: Array<SanityReference<SanityUser>>
}

/**
 * User
 *
 *
 */
export interface SanityUser extends SanityDocument {
  _type: 'user'

  /**
   * Name — `string`
   *
   *
   */
  name?: string

  /**
   * Website — `url`
   *
   *
   */
  website?: string

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: 'logo'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Navigation
 *
 *
 */
export interface SanityNavigation extends SanityDocument {
  _type: 'navigation'

  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * URL — `string`
   *
   *
   */
  url?: string
}

/**
 * SEO
 *
 *
 */
export interface SanitySeo extends SanityDocument {
  _type: 'seo'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Description — `string`
   *
   *
   */
  description?: string

  /**
   * URL — `url`
   *
   *
   */
  url?: string

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * GitHub Mock
 *
 *
 */
export interface SanityGithubMock extends SanityDocument {
  _type: 'githubMock'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Mock Image — `image`
   *
   *
   */
  mockimage?: {
    _type: 'mockimage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Title (Rich Text) — `array`
   *
   *
   */
  titleRich?: Array<SanityBlock>
}

/**
 * Calender
 *
 *
 */
export interface SanityCalender extends SanityDocument {
  _type: 'calender'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Calender Image — `image`
   *
   *
   */
  calenderImage?: {
    _type: 'calenderImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Title (Rich Text) — `array`
   *
   *
   */
  titleRich?: Array<SanityBlock>
}

/**
 * Feature
 *
 *
 */
export interface SanityFeature extends SanityDocument {
  _type: 'feature'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: 'previewImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Preview Video Url — `url`
   *
   *
   */
  previewVideoUrl?: string

  /**
   * Description — `string`
   *
   *
   */
  description?: string
}

/**
 * Testimonial
 *
 *
 */
export interface SanityTestimonial extends SanityDocument {
  _type: 'testimonial'

  /**
   * Twitter username — `string`
   *
   *
   */
  twitterUsername?: string

  /**
   * Twitter Name — `string`
   *
   *
   */
  twitterName?: string

  /**
   * User Image — `image`
   *
   *
   */
  userImage?: {
    _type: 'userImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * date — `date`
   *
   *
   */
  date?: string

  /**
   * Testimonial — `string`
   *
   *
   */
  testimonial?: string

  /**
   * Tweet Link — `url`
   *
   *
   */
  tweetLink?: string
}

/**
 * Footer
 *
 *
 */
export interface SanityFooter extends SanityDocument {
  _type: 'footer'

  /**
   * Label — `string`
   *
   *
   */
  label?: string

  /**
   * Url — `url`
   *
   *
   */
  url?: string

  /**
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: 'icon'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Featured Blog
 *
 *
 */
export interface SanityFeaturedBlog extends SanityDocument {
  _type: 'featuredBlog'

  /**
   * Is it native blog? — `boolean`
   *
   *
   */
  isNative?: boolean

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Summary — `string`
   *
   *
   */
  summary?: string

  /**
   * Author — `string`
   *
   *
   */
  author?: string

  /**
   * Read Time — `number`
   *
   *
   */
  readTime?: number

  /**
   * Topic — `array`
   *
   *
   */
  topics?: Array<string>

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: 'coverImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Blog Url — `url`
   *
   *
   */
  blogUrl?: string

  /**
   * Blog Content — `array`
   *
   *
   */
  blogContent?: Array<SanityBlock>
}

/**
 * Blog
 *
 *
 */
export interface SanityBlog extends SanityDocument {
  _type: 'blog'

  /**
   * Is it native blog? — `boolean`
   *
   *
   */
  isNative?: boolean

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Summary — `string`
   *
   *
   */
  summary?: string

  /**
   * Author — `string`
   *
   *
   */
  author?: string

  /**
   * Read Time — `number`
   *
   *
   */
  readTime?: number

  /**
   * Topic — `array`
   *
   *
   */
  topics?: Array<string>

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string }

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: 'coverImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Blog Url — `url`
   *
   *
   */
  blogUrl?: string

  /**
   * Blog Content — `array`
   *
   *
   */
  blogContent?: Array<SanityBlock>
}

/**
 * Press
 *
 *
 */
export interface SanityPress extends SanityDocument {
  _type: 'press'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string

  /**
   * Feature Image — `image`
   *
   *
   */
  featureImage?: {
    _type: 'featureImage'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * CTA Button Label — `string`
   *
   *
   */
  CTAButtonLabel?: string

  /**
   * CTA Button Link — `string`
   *
   *
   */
  CTAButtonLink?: string

  /**
   * All Assets — `file`
   *
   *
   */
  AllAssets?: { _type: 'AllAssets'; asset: SanityAsset }

  /**
   * Last Updated — `date`
   *
   *
   */
  LastUpdated?: string

  /**
   * dos — `array`
   *
   *
   */
  dos?: Array<string>

  /**
   * donts — `array`
   *
   *
   */
  donts?: Array<string>

  /**
   * OpenSauced Logo — `array`
   *
   *
   */
  openSaucedLogo?: Array<SanityReference<SanityOpenSaucedLogo>>
}

/**
 * OpenSauced Logo
 *
 *
 */
export interface SanityOpenSaucedLogo extends SanityDocument {
  _type: 'openSaucedLogo'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Description — `string`
   *
   *
   */
  description?: string

  /**
   * Black Background? — `boolean`
   *
   *
   */
  isBlackBG?: boolean

  /**
   * SVG Logo — `image`
   *
   *
   */
  svgLogo?: {
    _type: 'svgLogo'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * PNG Logo — `image`
   *
   *
   */
  pngLogo?: {
    _type: 'pngLogo'
    asset: SanityAsset
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type Documents =
  | SanityAbout
  | SanityUser
  | SanityNavigation
  | SanitySeo
  | SanityGithubMock
  | SanityCalender
  | SanityFeature
  | SanityTestimonial
  | SanityFooter
  | SanityFeaturedBlog
  | SanityBlog
  | SanityPress
  | SanityOpenSaucedLogo
