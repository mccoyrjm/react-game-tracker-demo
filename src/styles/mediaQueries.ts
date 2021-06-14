const unit = 'px'

// Size names based on DnD Terminology!
// https://dungeons.fandom.com/wiki/SRD:Table_of_Creature_Size_and_Scale
export const breakPoints = {
  diminutive: `320${unit}`,
  tiny: `415${unit}`,
  small: `480${unit}`,
  medium: `768${unit}`,
  large: `992${unit}`,
}

const greaterThan = {
  greaterThanTiny: `(min-width: ${breakPoints.tiny})`,
  greaterThanSmall: `(min-width: ${breakPoints.small})`,
  greaterThanMedium: `(min-width: ${breakPoints.medium})`,
  greaterThanLarge: `(min-width: ${breakPoints.large})`,
}

export default greaterThan
