import indicator, { OrdinalSuffix } from './indicator'
export { indicator, OrdinalSuffix }

export default function ordinal <I extends number>(i: I): `${I}${OrdinalSuffix}`
