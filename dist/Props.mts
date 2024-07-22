// Author: Igor Dimitrijević (@igorskyflyer)

import type { Color } from '@igor.dvlpr/common-color'

export interface Props {
  polyfillScroll?: boolean
  background?: Color
  backgroundHover?: Color
  size?: number
  borderRadius?: number
  offset?: number
  fontSize?: number
  animationTime?: string
  iconTop?: string
  iconBottom?: string
  zIndex?: number
  color?: Color
  colorHover?: Color
  position?: 'left' | 'right'
  show?: 'always' | 'whenNeeded'
}
