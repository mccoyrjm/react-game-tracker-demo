const unit = 'px'

// Size names based on DnD Terminology!
// https://dungeons.fandom.com/wiki/SRD:Table_of_Creature_Size_and_Scale
const breakPoints = {
  tiny: 320,
  small: 480,
  medium: 768,
  large: 992,
}

const greaterThan = {
  greaterThanTiny: `min-width: ${breakPoints.tiny}${unit}`,
  greaterThanSmall: `min-width: ${breakPoints.small}${unit}`,
  greaterThanMedium: `min-width: ${breakPoints.medium}${unit}`,
  greaterThanLarge: `min-width: ${breakPoints.large}${unit}`,
}

export default greaterThan
