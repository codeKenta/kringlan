import dynamic from 'next/dynamic'

export const ArticleSlideshow = dynamic(() => import(/* webpackChunkName: "blocks/ArticleSlideshow" */ './ArticleSlideshow')) // prettier-ignore
export const Content = dynamic(() => import(/* webpackChunkName: "blocks/Content" */ './Content')) // prettier-ignore
export const Hero = dynamic(() => import(/* webpackChunkName: "blocks/Hero" */ './Hero')) // prettier-ignore
export const Media = dynamic(() => import(/* webpackChunkName: "blocks/Media" */ './Media')) // prettier-ignore
export const Promo = dynamic(() => import(/* webpackChunkName: "blocks/Promo" */ './Promo')) // prettier-ignore
export const SpecialSectionHeading = dynamic(() => import(/* webpackChunkName: "blocks/SpecialSectionHeading" */ './SpecialSectionHeading')) // prettier-ignore
export const TitleHero = dynamic(() => import(/* webpackChunkName: "blocks/TitleHero" */ './TitleHero')) // prettier-ignore
export const FeaturedText = dynamic(() => import(/* webpackChunkName: "blocks/FeaturedText" */ './FeaturedText')) // prettier-ignore
